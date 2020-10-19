<template>
  <demo-section>
    <demo-block title="动态级联列表">
      <dynamic-list />
    </demo-block>
    <demo-block title="基础用法">
      <sdc-picker show-toolbar title :columns="columns" />
    </demo-block>
    
  </demo-section>
</template>

<script>
import DynamicList from "./dynamicList"
export default {
  data() {
    return {
      columns: [
        {
          values: ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday'],
          defaultIndex: 2,
        },
        {
          values: ['Morging', 'Afternoon', 'Evening'],
          defaultIndex: 1,
        },
      ],
    };
  },
  components:{
    DynamicList
  }
};
</script>
