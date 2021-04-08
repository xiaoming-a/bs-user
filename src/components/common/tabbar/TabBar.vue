<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 49px;
    background-color: #f6f6f6;
    display: flex;
    box-shadow: 0 -2px 1px rgba(121, 119, 119, 0.10);

  }


</style>