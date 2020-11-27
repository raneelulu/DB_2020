
<template>
  <form v-on:submit.prevent="onSubmit">
    <div v-if="user">
      <h1> 접속한 유저 </h1>
      <p> 아이디 : {{user.id}} </p>
      <p> 비밀번호 : {{user.password}} </p>
      <p> 이름 : {{user.name}} </p>
      <p> 직책 : {{user.position}} </p>
    </div>
    <button onClick="onSubmit">로그아웃</button>
    <ul>
      <p>© ED's DBD</p>
    </ul>
  </form>
  
</template>

<script>
export default {
    created(){
        this.$http.get('/api/login')
        .then((res) => {
            const user = res.data.user;
            if(user){
              this.$store.commit("setUser",user);
              if(user.id =="you108402"){
                this.$router.push({name:"LoginPage"});
              }
            }else{
              this.$router.push({name:"LoginPage"});
            }
        })
        .catch((err) => {
            console.error(err);
        });
    },
    methods:{
      onSubmit:function(){
        const id = this.id;
        const password = this.password;
        this.$http.post("api/logout",{id,password, },
        {"Content-Type":"application-json"})
          .then((res)=>{
            if(res.data.user){
              this.$router.push({name: "LoginPage"});
            }else if (res.data.message){
              alter(res.data.message);
            }
          })
          .catch((err)=>{
              console.error(err);
          });
      }
    },
    computed:{
     user(){return this.$store.getters.user;}  
    }
}
</script>

<style scoped>

</style>