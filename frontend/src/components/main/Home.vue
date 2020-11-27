<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>[직책에 맞는 아이디로 로그인 부탁드립니다]</h2>
      <br>
    <form v-on:submit.prevent="onSubmit">
      <div>
       <label for="id">id:</label>
       <input name="id" type="text" v-model="id" />
       <label for="password">PW:</label>
       <input name="password" type="password" v-model="password"  />
      </div>
      <button onClick="onSubmit">로그인</button>
      <button type="newregister" onClick="location.href='http://localhost:3000/#/'">회원가입</button>
    </form>
    <ul>
      <p>© ED's DBD</p>
    </ul>
  </div>
</template>
<script>
export default {
    name: 'Hello',
    data() {
        return {
            msg: 'Welcome! ED\'s DBD에 오신걸 환영합니다',
            id: "",
            password:"",
        }
    },
    methods:{
      onSubmit:function(){
        const id = this.id;
        const password = this.password;
        this.$http.post("api/login",{id,password, },
        {"Content-Type":"application-json"})
          .then((res)=>{
            if(res.data.user){
              this.$store.commit("setUser",res.data.user);
              this.$router.push({name: "IndexPage"});
            }else if (res.data.message){
              alert(res.data.message);
            }
          })
          .catch((err)=>{
              console.error(err);
          });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin : 150px;
}
h1, h2 {
  font-weight : bold;
}
ul {
  position : relative;
  top : 70px;
  list-style-type : none;
  padding : 0;
}
ul > li {
  font-size : large;
  display : inline-block;
  margin : 0 80px;
  font-weight : bold;
  color : #42b983;
}
a {
  text-decoration : none;
}
p {
  position : relative;
  top : 300px;
  margin-bottom : 40px;
  font-size : small;
}
</style>