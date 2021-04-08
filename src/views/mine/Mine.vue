<template>
  <div class="mine">
    <!--  logo  -->
    <div class="logo-header clearfix">
      <img src="~assets/img/icon/logo.jpg" alt="logo">
      <span>租房</span>
    </div>
    <!--主体-->
    <div class="mine-main">
      <img src="../../assets/img/icon/bj.jpg" alt="">
      <div class="content clearfix">

        <div class="zc" v-if="token===null">
          <span @click.stop="$router.push('/login')">登录/注册</span>
        </div>
        <div class="zc" v-else>
          <!--    登录后的显示     -->
          <div class="z-main">
            <div class="m-name">Hi !!!</div>
            <div class="m-name">{{username}}</div>
          </div>
          <!--  编辑按钮   -->
          <div>
            <div class="z-icon" @click="onDo">
              <i class="iconfont icon-shezhi"/>
            </div>
            <div class="txt" v-show="setUser" @click="setSf">编辑资料</div>
            <div class="down" v-show="setUser" @click="tuichu">退出登录</div>
          </div>
        </div>

        <div class="con-more">
          <div class="more-item" @click="goService">
            <i class="iconfont icon-weixiu"/>上报维修
          </div>
          <div class="more-item" @click="goPay">
            <i class="iconfont icon-jiaofei"/>缴费单
          </div>
          <div class="more-item" @click="goHouse">
            <i class="iconfont icon-fangwufangchan"/>出租房屋
          </div>
          <div class="more-item" @click="goContract">
            <i class="iconfont icon-hetong1"/>合同信息
          </div>
        </div>
      </div>
    </div>

    <!--  导航  -->
    <tab-bar-main/>
  </div>
</template>

<script>
  import TabBarMain from "components/content/tabbarmain/TabBarMain";

  export default {
    name: "Mine",
    components: {
      TabBarMain,
    },
    data() {
      return {
        token: '',
        username: '',
        userId: '',
        setUser: false
      }
    },
    methods: {
      // 获取页面初始数据
      async getMine() {
        // 用户token
        this.token = sessionStorage.getItem('token')
        //用户名字
        this.username = sessionStorage.getItem('username')
        // 用户id
        this.userId = sessionStorage.getItem('userId')
      },
      //鼠标移动到设置按钮显示编辑等
      onDo() {
        this.setUser = !this.setUser
      },

      //维修报表
      async goService() {
        if (this.token === null) {
          this.$toast({
            text: '请先登录',
            duration: 1000
          })
          return
        }
        await this.$router.push('/service')
      },

      //缴费单
      async goPay() {
        if (this.token === null) {
          this.$toast({
            text: '请先登录',
            duration: 1000
          })
          return
        }
        await this.$router.push('/pay')
      },

      //出租房屋
      async goHouse() {
        if (this.token === null) {
          this.$toast({
            text: '请先登录',
            duration: 1000
          })
          return
        }
        await this.$router.push('/put_house')
      },

      //合同信息
      async goContract() {
        if (this.token === null) {
          this.$toast({
            text: '请先登录',
            duration: 1000
          })
          return
        }
        await this.$router.push('/contract')
      },

      async setSf() {
        await this.$router.push('/zl')
        this.setUser = false
      },

      tuichu() {
        sessionStorage.clear()
        this.setUser = false
        this.$toast({
          text: '退出成功',
          type: 'success',
          duration: 1000
        })
        this.getMine()
      }
    },
    computed: {},
    created() {
      this.getMine()
    }
  }
</script>

<style scoped>
  .mine {
    margin-bottom: 49px;
  }

  /*logo*/
  .logo-header {
    display: flex;
    height: 45px;
    background-color: #ffffff;
    /*border: 1px solid #dedede;*/
    line-height: 45px;
    font-size: 16px;
    font-weight: 900;
    position: relative;
    border: 1px solid #dedede;
  }

  .logo-header img {
    width: 20vw;
    height: 43px;
  }

  .logo-header span {
    position: absolute;
    left: 58px;
  }

  /* 主体 */
  .mine-main {
    width: 100%;
    height: calc(100vh - 49px - 45px);
    position: relative;
  }

  .mine-main img {
    width: 100%;
    height: 100%;
    padding: 10px 15px;
    border-radius: 30px;
  }

  .content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 10px 15px;
    /*background-color: #409EFF;*/
    z-index: 999;
  }

  .zc {
    width: 100%;
    height: 200px;
    position: relative;
  }

  .zc span {
    display: inline-block;
    width: 100px;
    height: 40px;
    font-size: 16px;
    font-weight: 800;
    color: #fdf7f7;
    text-align: center;
    line-height: 40px;
    margin-left: 122px;
    border-radius: 6px;
    margin-top: 80px;
    border: 1px solid #dedede;
  }

  .z-main {
    position: absolute;
    width: 110px;
    height: 110px;
    left: 50%;
    top: 50%;
    opacity: 0.6;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #71b2f5;
  }

  .m-name {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    font-size: 26px;
    font-weight: 800;
  }

  .z-icon {
    position: absolute;
    right: 8px;
    top: 8px;
  }

  .z-icon i {
    font-size: 26px;
    color: #ffffff;
  }

  .txt {
    width: 80px;
    height: 30px;
    position: absolute;
    right: 3px;
    top: 40px;
    background-color: white;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    font-weight: 700;
    border-radius: 6px;
  }

  .down {
    width: 80px;
    height: 30px;
    position: absolute;
    right: 3px;
    top: 70px;
    background-color: white;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    font-weight: 700;
    border-radius: 6px;
  }

  .con-more {
    width: 100%;
    height: 353px;
    /*background-color: #409EFF;*/
  }

  .more-item {
    width: 90%;
    height: 70px;
    background-color: #dedede;
    opacity: 0.8;
    margin-top: 15px;
    margin-left: 17px;
    padding-left: 13px;
    line-height: 70px;
    border-radius: 10px;
    color: #403f3f;
  }

  .more-item i {
    font-size: 20px;
    margin-right: 7px;
  }

</style>