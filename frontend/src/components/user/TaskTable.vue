<template>
  <div v-if="user">
      <h2>
        신청 가능한 Task 목록
      </h2>
      
      <h2>
        신청 대기 중인 목록
      </h2>
  </div>
</template>

<script>
export default {
  name: 'task',
  data () {
      return {
            selected: '',
            fields1: [
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
            fields2: [
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
            items1: [
                { name: 'task1', period: 2, description: 'data of school'},
                { name: 'task2', period: 4, description: 'data of food' },
                { name: 'task3', period: 1, description: 'data of habit' },
                { name: 'task4', period: 1, description: 'data of money' }
            ],
            items2: [
                { name: 'task1', period: 2, description: 'data of school'},
                { name: 'task3', period: 1, description: 'data of habit' },
            ]
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
