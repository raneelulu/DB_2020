<template>
  <div v-if="user">
    <p>{{user.name}}님의 평가 점수 : {{score}}</p>
    <br>
    <h3>TASK 목록</h3>
    <b-table :fields="fields" :items="items">
      <template #cell(name)="data">
        <!-- 테스크 표 테스크 클릭 시 선택 가능 selected 에 저장 -->
        <b-button size="sm" @click="selectTask(data.value)">{{ data.value }}</b-button>
      </template>
    </b-table>

    <p> Selected Task : {{ selected }} </p>

    <br>

    <select v-model="selectedType" @change="changeType()">
      <option v-for="type in dataType" v-bind:key="type.typeName" v-bind:value="type.typeName">
        {{type.typeName}}
      </option>
    </select>
    <span>Original Data Type : {{ selectedType }}</span>

    <br>

    <b-table :fields="dFields" :items="submitFiles"></b-table>

    <br>

    <p> 제출한 총 파일 수 : {{ subFileNum }} </p>
    <p> PASS된 총 tuple 수 : {{ tupleNum }} </p>

    <div id="fileBox">
      <b-form-file
          v-model="file"
          name="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
      ></b-form-file>
    </div>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

    <b-form-input v-model="subNum" placeholder="회차를 입력하시오"></b-form-input>
    <b-form-input v-model="start_period" placeholder="시작기간을 입력하시오"></b-form-input>
    <b-form-input v-model="end_period" placeholder="종료기간을 입력하시오"></b-form-input>
    <br>

    <ul>
      <li>
        <b-button variant="info" @click="upload">SUBMIT</b-button>
      </li>
      <li>
        <b-button variant="info" @click="backPage">BACK</b-button>
      </li>
    </ul> 
    <ul>
      <p>© ED's DBD</p>
    </ul>
  </div>
</template>

<script>
export default {
    created() {
        this.$http.post('/api/getTable', this.$store.getters.user)
            .then((res) => {
                this.items = res.data.items;
                this.score = res.data.score;
            })
            .catch((err) => {
                console.error(err)
            })
    },
    data() {
        return {
            selected: '',
            selectedType: '',
            file: null,
            fields: [
              {key: 'name', label: 'TASK 이름'},
              {key: 'period', label: '최소 업로드 주기'},
              {key: 'description', label: '설명'}
            ],
            items: [],
            dataType: [],
            submitFiles: [],
            score: 0,
            subFileNum: null,
            tupleNum: null,
            dFields: [
              {key: 'filename', label: '제출된 파일 이름'},
              {key: 'subNum', label: '회차'},
              {key: 'isPass', label: 'PASS 여부'}
            ],
            subNum: '',
            period: '',
            complete: false
        }
    },
    methods: {
      checkInput() {
        if (this.start_period != '' && this.end_period != '' && this.subNum != '' && this.selected != '' && this.selectedType != '' && this.file != null) this.complete = true;
        else this.complete = false; 
      },
      backPage() {
        this.$router.push({name: "Submitter"});
      },
      changeType() {
        this.$http.post('/api/getTable/' + this.selected + '/' + this.selectedType)
          .then((res) => {
                this.submitFiles = res.data.submitFiles;
                this.subFileNum = res.data.subFileNum;
                this.tupleNum = res.data.tupleNum;
            })
            .catch((err) => {
                console.error(err)
            })
      },
      removeTask() {
        this.selected = '';
        this.dataType = [];
        this.subFileNum = 0;
        this.tupleNum = 0;  
      },
      selectTask(value) {
        this.selected = value;
        this.$http.post('/api/getTable/' + this.selected)
          .then((res) => {
                this.dataType = res.data.type;
            })
            .catch((err) => {
                console.error(err)
            })
      },
      async upload() {
        this.checkInput();
        if (this.complete == true) {
          var fd = new FormData();
          fd.append('file', this.file);
          fd.append('subNum', this.subNum);
          fd.append('start_period', this.start_period);
          fd.append('end_period', this.end_period);
          fd.append('taskName', this.selected);
          fd.append('dataType', this.selectedType);

          this.$http.post('/api/upload',
              fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            ).then(response => {
                if(response.data.stat == 0){
                  alert("파일 제출 성공");
                } else if(response.data.stat == -1){
                  alert('회차와 수집기간의 입력값을 확인하세요.');
                } else if(response.data.stat == 1){
                  alert('제출한 데이터의 컬럼 이름이 원본 데이터 타입과 일치하지 않습니다.');
                } else if(response.data.stat == 2){
                  alert('제출한 데이터의 자료형이 원본 데이터 타입과 일치하지 않습니다.');
                }

                // 다시 제출한 파일 이름, 총 파일 수, 튜플 수 리로드
                this.$http.post('/api/getTable/' + this.selected + '/' + this.selectedType)
                  .then((res) => {
                        this.submitFiles = res.data.submitFiles;
                        this.subFileNum = res.data.subFileNum;
                        this.tupleNum = res.data.tupleNum;
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            })
            .catch(function () {
              console.log('FAILURE!!');
            });
        }
        else {
          alert("입력되지 않은 정보가 존재합니다.");
        }
      }
    },
    computed:{
        user() {return this.$store.getters.user;}  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin : 20px;
}
h2 {
    font-weight: bold;
}
select {
  min-width: 100px;
}
#fileBox {
  padding-top: 50px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
ul > li {
  font-size : large;
  display : inline-block;
  margin : 0 80px;
  font-weight : bold;
}
ul > p {
  text-align: center;
  top : 200px;
  bottom : 0;
  padding-bottom : 40px;
  font-size : small;
}
</style>
