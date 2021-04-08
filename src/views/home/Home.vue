<template>
  <div class="home">
    <!--  logo  -->
    <div class="logo-header clearfix">
      <img src="~assets/img/icon/logo.jpg" alt="logo">
      <span>租房</span>
    </div>

    <!--  轮播图  -->
    <div class="c-swi clearfix">
      <swiper-main></swiper-main>
      <div class="inp" @click="$router.push('/search')">
        <span class="address">{{city}}<i class="iconfont icon-toBottom"></i></span>
        <span class="con">请选择城市</span>
        <span class="sch iconfont icon-sousuo">搜索</span>
      </div>
    </div>

    <!--  内容  -->
    <div class="container">
      <div class="con-title">热门推荐</div>
      <div class="con-main">

        <div class="con-item"
             v-for="item in content"
             :key="item.id"
             @click="getHouseDetails(item.id)"
        >
          <img :src="item.icon" alt="">
          <div class="price">${{item.rent}}</div>
          <div class="tit">{{item.name}}</div>
        </div>

      </div>
      <div class="con-more" @click="goList">显示更多房源</div>
    </div>

    <!--  底部  -->
    <div class="footer">
      <div class="f-item">
        <span class="iconfont icon-icon-service"/>
        <span>24小时客服热线</span>
      </div>
      <div class="f-item">
        <span class="iconfont icon-xuqiudingyue"/>
        <span>租房须知</span>
      </div>
      <div class="f-item">
        <span class="iconfont icon-pinpaijiameng"/>
        <span>合作加盟</span>
      </div>
      <div class="f-item">
        <span class="iconfont icon-women"/>
        <span>关于我们</span>
      </div>
    </div>
    <tab-bar-main/>
  </div>
</template>

<script>
  import SwiperMain from "components/content/swiper/SwiperMain";
  import TabBarMain from "components/content/tabbarmain/TabBarMain";

  export default {
    name: "Home",
    data() {
      return {
        content: [],
        city: ''
      }
    },
    components: {
      SwiperMain,
      TabBarMain
    },
    methods: {
      //获取首页数据
      async getHome() {
        let id = sessionStorage.getItem('id')
        // console.log(id)
        let bj = '605d40ad3d98e801005443b2'
        if (id === null) {
          const res = await this.$http.get(`home/${bj}`)
          this.getMap(res.data)
          this.city = this.content[0].city
        } else {
          const res = await this.$http.get(`home/${id}`)
          this.getMap(res.data)
          this.city = this.content[0].city
        }
      },

      //跳转到列表页
      goList() {
        let id = sessionStorage.getItem('id')
        let bj = '605d40ad3d98e801005443b2'
        if (id === null) {
          this.$router.push(`/houses/${bj}`)
        } else {
          this.$router.push(`/houses/${id}`)
        }
      },

      //跳转房屋详细信息
      async getHouseDetails(id) {
        await this.$router.push(`/houses/details/${id}`)
      },

      //获取房屋列表数据 map方法
      getMap(arr) {
        this.content = [...arr].map(item => {
          return {
            id: item._id,
            icon: item.house_icon.length > 0 ? item.house_icon[0].icon : "",
            name: item.house_name,
            rent: item.rent,
            city: item.city.city_name
          }
        });
      },
    },
    created() {
      this.getHome();
    },
  }
</script>

<style scoped>
  .home {
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
  }

  .logo-header img {
    width: 20vw;
    height: 43px;
  }

  .logo-header span {
    position: absolute;
    left: 58px;
  }


  /*轮播图*/
  .c-swi {
    position: relative;
    width: 100%;
    height: 254px;
  }

  .inp {
    position: absolute;
    width: 330px;
    height: 50px;
    background-color: #f7f6f6;
    opacity: 0.9;
    left: calc((375px - 330px) / 2);
    bottom: 35px;
    border-radius: 25px;
    display: flex;
    line-height: 50px;
    text-align: center;
    z-index: 9999;
  }

  .address {
    flex: 1;
    font-size: 14px;
    font-weight: 800;
    color: black;
    /*background-color: #409EFF;*/
  }

  .address i {
    margin-left: 5px;
    font-size: 12px;
  }

  .con {
    flex: 2;
    padding-left: 5px;
    /*background-color: #ff8198;*/
    text-align: left;
  }

  .con::before {
    content: '';
    width: 1px;
    height: 30px;
    border-left: 1px solid #c2c0c0;
    margin-right: 10px;
  }

  .sch {
    flex: 1;
    height: 40px;
    background-color: #cbcaca;
    border-radius: 20px;
    margin-right: 5px;
    margin-top: 5px;
    opacity: 1;
    color: #ff5e79;
    font-weight: 800;
    line-height: 40px;
  }


  /*内容1*/
  .container {
    margin-top: 20px;
  }

  .con-title {
    width: 100%;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    font-weight: 900;
    padding-left: 11px;
  }

  .con-main {
    display: flex;
    flex-wrap: wrap;
  }

  .con-item {
    width: 45vw;
    height: 200px;
    margin-left: 11px;
    margin-bottom: 10px;
  }

  .con-item:nth-last-child(-n+2) {
    margin-bottom: 0;
  }

  .con-item img {
    width: 92%;
    height: 65%;
    border-radius: 8%;
  }

  .price {
    font-size: 16px;
    font-weight: 800;
    margin-top: 5px;
  }

  .tit {
    font-size: 18px;
    margin-top: 6px;
    /*超出一行省略号*/
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .con-more {
    width: 85%;
    height: 40px;
    margin: 10px auto 0 auto;
    /*background-color: #409EFF;*/
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #dedede;
  }

  .footer {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    background-color: #efae95;
    display: flex;
    flex-wrap: wrap;
  }

  .f-item {
    width: 40%;
    height: 80px;
    background-color: #e3bd88;
    margin-left: 25px;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffffff;
    border-radius: 10px;
  }

  .f-item span {
    margin-top: 2px;
    color: #ffffff;
  }
</style>