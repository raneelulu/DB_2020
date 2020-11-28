<template>
  <div :class="rowType">
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
      <span v-if="typeof(taskData.p_np) === 'number'">
        {{ taskData.p_np === 1 ? 'Pass' : 'Non-Pass' }}
      </span>
      <span v-else>
        {{ taskData.p_np }}
      </span>
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
  /* border: 1px solid black; */
  background-color: rgb(209, 242, 255);
  padding: 2px;
  vertical-align: middle;
}
</style>
