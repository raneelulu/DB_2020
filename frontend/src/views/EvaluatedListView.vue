<template>
  <div class="wrapper">
    <Menu current="evaluated"/>
    <EvaluatedFileList :files="evaluatedFiles"/>
  </div>
</template>

<script>
import Menu from '@/components/EvalMenu.vue';
import EvaluatedFileList from '@/components/EvaluatedFileList.vue';
export default {
  components: {
    Menu,
    EvaluatedFileList
  },
  data() {
    return {
      evaluatedFiles: [
        { id: 1, task: 'android', type: 'seoul', number: 1, p_np: true},
        { id: 3, task: 'ios', type: 'incheon', number: 1, p_np: false},
        { id: 7, task: 'windows10', type: 'incheon', number: 1, p_np: true},
      ]
    }
  }
}
</script>

<style scoped>
div.wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>