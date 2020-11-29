<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="http://localhost:3000/#">
        <img src="../../assets/EDs_DBD.png" alt="logo">
      </b-navbar-brand>
      <!--<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="http://localhost:3000/#/">Profile</b-dropdown-item>
            <b-dropdown-item href="http://localhost:3000/#/login">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
    name : "header",
}
</script>

<style scoped>
  img {
    width : 50px;
    height : auto;
  }
</style>