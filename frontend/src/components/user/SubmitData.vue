<template>
  <div v-if="user">
    <h2>TASK 목록</h2>
    <br>
    <select v-model="selected">
      <option v-for="task in user.tasks" v-bind:key="task.task" v-bind:value="task.task">
        {{ task.task }}
      </option>
    </select>
    <span>Selected Task : {{ selected }}</span>
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
        <b-button variant="info">SUBMIT</b-button>
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
            file: null
        }
    },
    methods: {
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
