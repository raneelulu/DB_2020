<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="http://localhost:3000/#">
        <img src="../../assets/EDs_DBD.png" alt="logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item v-on:click="pro">Profile</b-dropdown-item>
          <b-dropdown-item v-on:click="gogo">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
    name : "header",
    methods:{
      gogo:function(){
        this.$http.get("api/logout")
        this.$store.commit("initdata");
        this.$router.push({name:"LoginPage"});
      },      
      pro:function(){
        this.$router.push({name:"ProfilePage"});
      }
    },
}
</script>

<style scoped>
  img {
    width : 50px;
    height : auto;
  }
</style>