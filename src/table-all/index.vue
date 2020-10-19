<template>
  <button class="table-all">
    <slot />
  </button>
</template>

<script>

export default {
  name: 'table-all',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

