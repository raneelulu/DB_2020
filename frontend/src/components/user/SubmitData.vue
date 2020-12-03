<template>
  <div v-if="user">
    <h2>TASK 목록</h2>
    <b-table :fields="fields" :items="items">
      <template #cell(name)="data">
        <!-- 테스크 표 테스크 클릭 시 선택 가능 selected 에 저장 -->
        <b-button size="sm" @click="selectTask(data.value)">{{ data.value }}</b-button>
      </template>
    </b-table>
    <br>
    <p> Selected Task : {{ selected }} </p>
    <select v-model="selectedType">
      <option v-for="task in user.tasks" v-bind:key="task.task" v-bind:value="task.task">
        {{ task.task }}
      </option>
    </select>
    <span>Selected Task : {{ selectedType }}</span>
    <br>
    <div id="fileBox">
      <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
      ></b-form-file>
    </div>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
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
    data() {
        return {
            selected: '',
            selectedType: '',
            file: null,
            fields: [
                {
                    key: 'name',
                    label: 'TASK Name'
                },
                {
                    key: 'period',
                    label: 'Period'
                },
                {
                  key: 'description',
                  label: 'Description',
                }
            ],
            items: [
                { name: 'task1', period: 2, description: 'data of school'},
                { name: 'task2', period: 4, description: 'data of food' },
                { name: 'task3', period: 1, description: 'data of habit' },
                { name: 'task4', period: 1, description: 'data of money' }
            ]
        }
    },
    methods: {
      backPage() {
        this.$router.push({name: "Submitter"});
      },
      selectTask(value) {
        this.selected = value;
      },
      async upload() {
        var fd = new FormData();
        fd.append('file', this.file)

        this.axios.post('/api/upload',
            fd, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then( response => {
            console.log('SUCCESS!!');
            console.log(response.data)
          })
          .catch(function () {
            console.log('FAILURE!!');
          });
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
p {
  text-align: center;
  top : 200px;
  bottom : 0;
  padding-bottom : 40px;
  font-size : small;
}
</style>
