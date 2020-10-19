<template>
  <div>
    <sdc-picker show-toolbar :columns="columns" @change="change" ref="picker" @confirm="confirm" />
  </div>
</template>

<script>
const areas = [
  {
    text: '北京',
    id: '1',
  },
  {
    text: '湖北',
    id: '2',
    children: [
      {
        text: '武汉',
        id: '2-1',
        children: [
          { text: '武昌区', id: '2-1-1' },
          { text: '汉阳区', id: '2-1-2' },
        ],
      },
      {
        text: '荆州',
        id: '2-2',
        children: [
          { text: '监利县', id: '2-2-1' },
          { text: '和田县', id: '2-2-2' },
        ],
      },
      { text: '黄冈', id: '2-3' },
    ],
  },
  {
    text: '湖南',
    id: '3',
    children: [
      {
        text: '长沙',
        id: '3-1',
        children: [
          { text: '下沙区', id: '3-1-1' },
          { text: '橘子洲', id: '3-1-2' },
        ],
      },
      { text: '岳阳', id: '3-2' },
    ],
  },
];

export default {
  data() {
    return {
      columns: [],
    };
  },
  created() {
    this.addCol(areas, 0);
  },
  methods: {
    confirm(vals) {
      console.log('选中的值', JSON.stringify(vals));
    },
    removeColMap(index) {
      const len = Object.keys(this.colMap).length;
      for (let i = index; i < len; i++) {
        delete this.colMap[i];
      }
    },
    change(picker, value, index) {
      this.columns.splice(index + 1);
      this.removeColMap(index + 1);
      const selectValueIndex = picker.getColumnIndex(index);
      const selectOption = this.colMap[index][selectValueIndex];
      if (selectOption.children && selectOption.children.length) {
        this.addCol(selectOption.children, index + 1);
      }
    },
    addCol(arr, index) {
      if (!Array.isArray(arr)) return;

      this.colMap = this.colMap || {};

      this.colMap[index] = arr;

      this.columns.push({
        values: arr.map(item=>({text:item.text,id:item.id})),
      });

      if (arr[0] && arr[0].children) {
        this.addCol(arr[0].children, ++index);
      }
    },
  },
};
</script>
