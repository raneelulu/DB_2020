<template>
  <div>
    <div class="a">
      <div class="b">
        <div class="c bold">Task ID</div>
        |
        <div class="c">{{ file.id }}</div>
      </div>
      <div class="b">
        <div class="c bold">Task</div>
        |
        <div class="c">{{ file.task }}</div>
      </div>
      <div class="b">
        <div class="c bold">Data Type</div>
        |
        <div class="c">{{ file.type }}</div>
      </div>
      <div class="b">
        <div class="c bold">Episode</div>
        |
        <div class="c">{{ file.number }}</div>
      </div>
      <div class="b" style="width: 30%;">
        <div class="c bold">Period</div>
        |
        <div class="c">{{ file.start_period }} ~ {{ file.end_period }}</div>
      </div>
    </div>
    <hr>
    <div class="a">
      <div class="b">
        <div class="c bold">Number of Tuples</div>
        |
        <div class="c">{{ file.all_tuple_number }}</div>
      </div>
      <div class="b">
        <div class="c bold">Number of Duplicates</div>
        |
        <div class="c">{{ file.duplicated_tuple_number }}</div>
      </div>
      <div class="b" style="width: 40%;">
        <div class="c bold">Download Link</div>
        |
        <div class="c"><a :href="download_link">Download</a></div>
      </div>
      <div class="b" style="width: 90%;">
        <div class="c bold">Null value Rate</div>
        <table>
          <thead>
            <th v-for="colName in properties" v-bind:key="colName">{{ colName }}</th>
          </thead>
          <tbody>
            <tr>
              <td v-for="col in file.null_col_rate" :key="Object.keys(col)[0]">{{ col }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr>
    <div class="a">
      <div class="b" style="width: 30%">
        <div class="c bold"><span title="0 ~ 10 사이의 값을 입력하세요">Score</span></div>
        |
        <div class="c">
          <input v-model.number="score" type="number">
        </div>
      </div>
      <div class="b" style="width: 30%;">
        <div class="c bold">Your Evaluation</div>
        |
        <div class="c">
          <select v-model="pass">
            <option value="pass">Pass</option>
            <option value="non-pass">Non-Pass</option>
          </select>
        </div>
      </div>
      <div class="b">
        <div class="c">
          <input type="submit" style="margin: 0;" @click="onClickSubmit">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      file: {
        id: 5,
        tase: 'android',
        type: 'seoul',
        number: 1,
        start_period: '2020-11-22',
        end_period: '2020-11-23',
        download_link: '',
        all_tuple_number: 30,
        duplicated_tuple_number: 0,
        null_col_rate: {
          colA: 0,
          colB: 0,
          colC: 0,
          colD: 0
        }
      },
      properties: '',
      pass: 'Non-Pass',
      score: 0
    }
  },
  created () {
    this.$http.get('/api/evaluator/' + this.$route.params.userID + '/' + this.$route.params.taskID)
      .then((res) => {
        console.log(res)
        if (Object.keys(res.data.file).length !== 0) {
          this.file = res.data.file
        }
      })
      .catch((err) => {
        console.error(err)
      })
    this.properties = Object.keys(this.file.null_col_rate)
  },
  methods: {
    onClickSubmit () {
      this.$http.post('/api/evaluator/' + this.$route.params.userID + '/' + this.$route.params.taskID, {score: score, p_np: pass}, {"Content-Type": "application-json"})
        .then((res) => {
          // post가 성공하면
          if (res.data.success) {
            this.$route.push("/evaluator/" + this.$route.params.userID)
          } else {
            alert("Wrong data input")
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  watch: {
    score: function (val) {
      if (val < 0) {
        alert("0보다 작은 값이 입력되었습니다.")
        // val = 0
      } else if (val > 10) {
        alert("10보다 큰 값이 입력되었습니다.")
        // val = 10
      }
    }
  }
}
</script>

<style scoped>
.a {
  background-color: #cccccc;
  border-radius: 3px;
  padding: 4px;
  margin: 4px, 0px;
  /* font-size: 2em; */
}
.b {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 15%;
  border-radius: 4px;
  padding: 4px;
  margin: 3px 3px;
}
.c {
  display: inline-block;
  height: 100%;
  padding: 0px 5px;
}
.bold {
  font-weight: bold;
}

table {
  /* border-collapse: collapse; */
  border-spacing: 0px;
  padding: 10px;
}
th {
  border: 1px solid black;
  border-bottom: 3px solid black;
  padding: 4px;
}
td {
  border: 1px solid black;
  padding: 4px;
}
table thead th:first-child {
  border-radius: 5px 0 0 0;
}
table thead th:last-child {
  border-radius: 0 5px 0 0;
}
table tbody tr:last-child td:first-child {
  border-radius: 0 0 0 5px;
}
table tbody tr:last-child td:last-child {
  border-radius: 0 0 5px 0;
}
</style>
