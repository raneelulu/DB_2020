<template>
  <div v-if="user">
    <ul>
      <li>
        신청 가능한 Task 목록
      </li>
      <li>
        신청 대기 중인 목록
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'task',
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
</style>
