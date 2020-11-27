<template>
  <div :class="rowType" @click="goTo">
    <div class="tableCell">
      {{ taskData.id }}
    </div>
    <div class="tableCell">
      {{ taskData.task }}
    </div>
    <div class="tableCell">
      {{ taskData.type }}
    </div>
    <div class="tableCell">
      {{ taskData.number }}
    </div>
    <div class="tableCell">
      {{ taskData.start_period }}
      <span v-if="taskData.end_period !== ''"> ~ {{ taskData.end_period }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taskData: {
      type: Object,
      required: true
    },
    rowType: {
      type: String,
      default: 'tableRow'
    }
  },
  methods: {
    goTo () {
      if (this.taskData.id === 'ID') return
      this.$router.push(this.$route.path + '/' + this.taskData.id.toString())
    }
  }
}
</script>

<style scoped>
.tableHeader {
  display: table-header-group;
  font-weight: bold;
  text-align: center;
}
.tableRow {
  display: table-row;
}
.tableCell {
  display: table-cell;
  border-radius: 5px;
  /* background-color: #96ffff; */
  background-color: rgb(209, 242, 255);
  /* background-color: rgb(135,206,235); */
  padding: 2px;
  vertical-align: middle;
}
</style>
