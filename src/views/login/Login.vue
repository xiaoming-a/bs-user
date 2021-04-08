<template>
  <div class="login">
    <!--  头部  -->
    <div class="l-header">登录</div>

    <!--  登录主体  -->
    <div class="l-main">
      <form @submit.prevent="login">
        <ul>

          <li>
            <div class="f-label">
              <label for="username">账号</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-lunkuohua2_yonghu"></span>
              <input type="text" id="username" placeholder="请输入账号" v-model.trim="model.account">
            </div>
          </li>

          <li>
            <div class="f-label">
              <label for="password">密码</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-mima"></span>
              <input type="password" id="password" placeholder="请输入密码" v-model.trim="model.password">
            </div>
          </li>

          <li>
            <span class="span-na">我是：</span>
            <span class="span-st">
              <label class="iconfont icon-xuesheng" for="student">学生</label>
              <input type="radio" id="student" checked name="status" value="0" v-model="model.status">
           </span>
            <span class="span-ld">
              <label class="iconfont icon-yezhuguanli-" for="landlord">业主</label>
              <input type="radio" id="landlord" name="status" value="1" v-model="model.status">
            </span>
          </li>

          <li>
            <button class="f-btn" type="submit">登录</button>
          </li>
        </ul>
      </form>

      <!--   注册链接   -->
      <div class="zhuce" @click="$router.push('/register')">没有账号?去注册</div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        model: {
          account: '1712405604019',
          password: '123456',
          status: ''
        },
      }
    },
    methods: {
      async login() {
        const res = await this.$http.post('login', this.model)
        sessionStorage.token = res.data.token;
        sessionStorage.userId = res.data.userId;
        sessionStorage.username = res.data.username
        sessionStorage.num = res.data.num
        sessionStorage.userStatus = res.data.userStatus
        await this.$router.push('/mine')
        this.$toast({
          text: '登录成功',
          type: 'success',
          duration: 1000
        })
      }
    }
  }
</script>

<style scoped>

  /*头部*/
  .l-header {
    width: 100vw;
    height: 49px;
    text-align: center;
    line-height: 49px;
    font-size: 18px;
    font-weight: 800;
    background-color: #ececec;
  }


  /*登录主体*/

  .l-main {
    margin-top: 20px;
    width: 80vw;
    /*background-color: #409EFF;*/
    margin-left: 5vw;
  }

  .l-main li:nth-child(2) {
    margin-top: 20px;
  }

  .l-main li:nth-child(3) {
    margin-top: 10px;
  }


  .f-label {
    font-size: 15px;
  }

  .f-inp {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #999797;
    /*background-color: #ff8198;*/
  }


  .f-inp input {
    width: 90%;
    height: 50%;
    outline: none;
    border: none;
  }

  .f-inp input::placeholder {
    font-size: 12px;
    color: #cbc8c8;
  }

  .f-inp span {
    margin-right: 10px;
    font-size: 18px;
  }

  .span-na {
    font-size: 14px;
  }

  .span-ld label,
  .span-st label {
    font-size: 14px;
    vertical-align: top;
  }

  .span-ld {
    margin-left: 20px;
  }

  .f-btn {
    margin-top: 20px;
    margin-left: 50px;
    outline: none;
    border: 0;
    width: 200px;
    height: 30px;
    background-color: skyblue;
  }

  /*注册链接*/
  .zhuce {
    font-size: 14px;
    color: #b3b0b0;
    margin-top: 20px;
    margin-left: 94px;
  }


</style>