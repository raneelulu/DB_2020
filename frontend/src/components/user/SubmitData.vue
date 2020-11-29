<template>
  <div v-if="user">
    <h2>TASK 목록</h2>
    <b-table :fields="fields" :items="items">
      <template #cell(name)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">{{ data.value }}</a>
      </template>
    </b-table>
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
            file: null,
            fields: [
                {
                    // A column that needs custom formatting,
                    // calling formatter 'fullName' in this app
                    key: 'name',
                    label: 'Full Name',
                    formatter: 'fullName'
                },
                // A regular column
                'age',
                {
                    // A regular column with custom formatter
                    key: 'sex',
                    formatter: value => {
                      return value.charAt(0).toUpperCase()
                    }
                },
                {
                  // A virtual column with custom formatter
                  key: 'birthYear',
                  label: 'Calculated Birth Year',
                  formatter: (value, key, item) => {
                    return new Date().getFullYear() - item.age
                  }
                }
            ],
            items: [
                { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
                { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
                { name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },
                { name: { first: 'Shirley', last: 'Partridge' }, sex: 'female', age: 62 }
            ]
        }
    },
    methods: {
      backPage() {
        this.$router.push({name: "Submitter"});
      },
      fullName(value) {
        return `${value.first} ${value.last}`
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
