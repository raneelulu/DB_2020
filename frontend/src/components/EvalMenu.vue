<template>
  <div class="menu">
    <div :class="alloc_list_style" @click="on_click_alloc">
      배당 파일 목록
    </div>
    <div :class="finished_list_style" @click="on_click_eval">
      평가 완료 파일 목록
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: String,
      required: true
    }
  },
  computed: {
    alloc_list_style() {
      return {
        list: true,
        current: this.current === "todo"
      }
    },
    finished_list_style() {
      return {
        list: true,
        current: this.current === "evaluated"
      }
    }
  },
  methods: {
    on_click_alloc() {
      if (this.current === "todo") return
      this.$router.push('/evaluator/' + this.$route.params.userID + '/todo')
    },
    on_click_eval() {
      if (this.current === "evaluated") return
      this.$router.push('/evaluator/' + this.$route.params.userID + '/evaluated')
    }
  }
}
</script>

<style scoped>
div.menu {
  flex-grow: 1;
  /* width: 100%; */
  background-color: #cccccc;
  padding: 5px 20px;
  margin: 10px;
}

div.list {
  margin: 10px 0px;
  padding: 4px 0px;
  background-color:  rgb(209, 242, 255);
}

div.list:hover:not(.current) {
  background-color: #dddddd;
  font-weight: bold;
}

div.list:active:not(.current) {
  background-color: #cccccc;
}

div.current {
  background-color: rgb(59, 82, 211);
  color: white;
  font-weight: bold;
}
</style>
