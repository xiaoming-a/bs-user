<template>
  <div class="house">
    <div class="h-header">
      <i class="iconfont icon-zuo" @click="$router.go(-1)"/>
      出租房屋
    </div>
    <div class="h-from">
      <form @submit.prevent="postHouse">
        <ul>

          <li>
            <label for="h-name">房子名称:</label>
            <input type="text" placeholder="请输入房屋名称" id="h-name" v-model.trim="model.house_name">
          </li>

          <li>
            <label for="h-owner">业主名字:</label>
            <input type="text" placeholder="请输入名字" id="h-owner" v-model.trim="model.owners">
          </li>

          <li>
            <label for="h-tel">联系电话:</label>
            <input type="tel" placeholder="请输入联系电话" id="h-tel" v-model.trim="model.telephone">
          </li>

          <li>
            <button type="submit">提交</button>
          </li>

        </ul>
      </form>
    </div>
    <div class="ps">请等待管理员的联系信息、上门实勘与完善房屋信息</div>
  </div>
</template>

<script>
  export default {
    name: "House",
    data() {
      return {
        model: {
          house_name: '',
          owners: '',
          telephone: null
        }
      }
    },
    methods: {
      async postHouse() {
        const res = await this.$http.post('puthouse', this.model)
        await this.$router.push('/mine')
        this.$toast({
          text: '提交成功',
          type: 'success',
          duration: 1000
        })
      }
    }
  }
</script>

<style scoped>
  .h-header {
    width: 100vw;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: 700;
    background-color: #dedede;
    position: relative;
  }

  .h-header i {
    position: absolute;
    left: 0;
    font-size: 30px;
  }

  .h-from {
    padding: 0 10px;
  }

  ul li {
    width: 350px;
    height: 60px;
    margin-top: 10px;
    border-bottom: 1px solid #b6b4b4;
  }

  ul li:last-child {
    border-bottom: 0;
  }

  ul li label {
    display: block;
    width: 100%;
    height: 20px;
  }

  ul li input {
    width: 100%;
    margin-top: 5px;
    height: 30px;
    border: 0;
    outline: none;
  }

  ul li input::placeholder {
    padding-left: 5px;
    font-size: 14px;
    color: #999999;
  }

  ul li button {
    width: 150px;
    height: 35px;
    margin-top: 20px;
    margin-left: 95px;
    outline: none;
    border: 0;
    background-color: #409EFF;
    color: #ffffff;
    border-radius: 4px;
  }

  .ps {
    margin-top: 50px;
    font-size: 12px;
    padding-left: 10px;
  }

</style>