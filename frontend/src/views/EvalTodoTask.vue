<template>
  <div>
    <div class="a">
      <div class="b">
        <div class="c bold">Task ID</div>
        |
        <div class="c">{{ task.id }}</div>
      </div>
      <div class="b">
        <div class="c bold">Task</div>
        |
        <div class="c">{{ task.task }}</div>
      </div>
      <div class="b">
        <div class="c bold">Data Type</div>
        |
        <div class="c">{{ task.type }}</div>
      </div>
      <div class="b">
        <div class="c bold">Episode</div>
        |
        <div class="c">{{ task.number }}</div>
      </div>
      <div class="b" style="width: 30%;">
        <div class="c bold">Period</div>
        |
        <div class="c">{{ task.start_period }} ~ {{ task.end_period }}</div>
      </div>
    </div>
    <hr>
    <div class="a">
      <div class="b">
        <div class="c bold">Number of Tuples</div>
        |
        <div class="c">{{ task.all_tuple_number }}</div>
      </div>
      <div class="b">
        <div class="c bold">Number of Duplicates</div>
        |
        <div class="c">{{ task.duplicated_tuple_number }}</div>
      </div>
      <div class="b" style="width: 30%;">
        <div class="c bold">downloadLink</div>
        |
        <div class="c"><a href="">Download</a></div>
      </div>
      <div class="b" style="width: 20%;">
        <div class="c bold">Your Evaluation</div>
        |
        <div class="c">
          <select v-model="pass">
            <option value="pass">Pass</option>
            <option value="non-pass">Non-Pass</option>
          </select>
        </div>
        |
        <div class="c">
          <input type="submit" style="margin: 0;">
        </div>
      </div>
      <div class="b" style="width: 90%;">
        <div class="c bold">Null value Rate</div>
        <table>
          <thead>
            <th v-for="colName in properties" v-bind:key="colName">{{ colName }}</th>
          </thead>
          <tbody>
            <tr>
              <td v-for="col in task.nullColRate" :key="Object.keys(col)[0]">{{ col }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: {
        id: 5,
        taskName: 'android',
        dataType: 'seoul',
        episode: 1,
        start: '2020-11-22',
        end: '2020-11-23',
        downloadLink: 'asdfasdfasdf',
        totalTupleCount: 30,
        duplicateTupleCount: 0,
        nullColRate: {
          colA: 0,
          colB: 0,
          colC: 0,
          colD: 0
        }
      },
      properties: '',
      pass: 'Non-Pass'
    }
  },
  created () {
    this.$http.get('/api/evaluator/' + this.$route.params.userID + '/' + this.$route.params.taskID)
      .then((res) => {
        console.log(res)
        this.task = res.data.task
        // this.taskEval = res.data.taskEval
      })
      .catch((err) => {
        console.error(err)
      })
    this.properties = Object.keys(this.taskEval.nullColRate)
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
