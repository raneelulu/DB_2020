<template>
  <div v-if="user">
    <TaskTable />
    <br>
    <ul>
      <li>
        <b-button @click="selectTask">TASK 신청</b-button>
      </li>
      <li>
        <b-button @click="backPage">뒤로 가기</b-button>
      </li>
    </ul>
    <ul>
      <p>© ED's DBD</p>
    </ul>
  </div>
</template>

<script>
import TaskTable from './TaskTable.vue'

export default {
  name: 'task',
  components: {
    TaskTable,
  },
  methods: {
    selectTask() {
      this.$router.push({name: "Submitter"});
    },
    backPage() {
      this.$router.push({name: "Submitter"});
    }
  },
  computed:{
     user() {return this.$store.getters.user;}  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  position : relative;
  top : 80px;
  list-style-type : none;
  padding : 0;
}
ul > li {
  font-size : large;
  display : inline-block;
  margin : 0 80px;
  font-weight : bold;
}
a {
  text-decoration : none;
}
a > div {
  margin : 0px;
  height : 100px;
  width : 100px;
  border-color : #42b983;
  text-align: center;
}
p {
  position : relative;
  top : 300px;
  padding-bottom : 40px;
  font-size : small;
}
</style>