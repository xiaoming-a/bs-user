<template>
  <div class="app-toast"
       v-if="isShow"
       :class="{'info': type=== 'info','success': type=== 'success','wraning': type=== 'wraning','danger': type=== 'danger'}">
    {{text}}
  </div>
</template>

<script>
  export default {
    name: "Toast"
  }
</script>

<style scoped>
  .app-toast {
    position: fixed;
    width: 100px;
    height: 50px;
    left: 50%;
    top: 10%;
    background: #ccc;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  .info {
    background: #00aaee;
  }
  .success {
    background: #00ee6b;
  }
  .wraning {
    background: #eea300;
  }
  .danger {
    background: #ee000c;
  }
</style>