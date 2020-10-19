<template>
  <button class="table">
    <slot />
  </button>
</template>

<script>
// import { SnbTable, SnbTableColumn, SnbTableHeader } from 'vue-snb-table';
// Vue.component('snb-table', SnbTable);
// Vue.component('snb-table-column', SnbTableColumn);
// Vue.component('snb-table-header', SnbTableHeader);

export default {
  name: 'table-mobile',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="less">
.demo-button {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
