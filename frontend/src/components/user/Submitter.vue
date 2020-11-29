<template>
  <div v-if="user">
    <h1>Welcome! {{ user.name }}님</h1>
    <h2>[SUBMITTER Page]</h2>
      <br>
    <ul>
      <li>
        <b-button variant="info" @click="GetTask">TASK 신청</b-button>
      </li>
      <li>
        <b-button variant="info" @click="SubmitData">DATA 제출</b-button>
      </li>
    </ul>
    <ul>
      <p>© ED's DBD</p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'submitter',
  methods: {
    GetTask() {
      this.$router.push({name: "GetTask"});
    },
    SubmitData() {
      this.$router.push({name: "SubmitData"});
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
  margin : 200px;
}
h1, h2 {
  font-weight : bold;
}
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
