<template>
  <div class="room-list">
    <!--  头  -->
    <div class="r-1ist">
      <!--   头部   -->
      <div class="list-header">
        <div class="list-select iconfont icon-toBottom" @click="show1">
          区域
        </div>
        <div class="list-select iconfont icon-toBottom" @click="show2">
          价格
        </div>
      </div>

      <!--    内容1  -->
      <div class="list-container" v-show="isShow1" @click.self="isShow1 = false">
        <!--    城市区域选择    -->
        <div class="se-content clearfix">
          <div class="co-item"
               v-for="(item,index) in district"
               :key="index"
               @click="chooseAreas(item)"
          >{{item}}
          </div>
          <div class="ck-item" @click="clear">清除</div>
        </div>
      </div>

      <!--    内容2  -->
      <div class="list-container" v-show="isShow2" @click.self="isShow2 = false">
        <!--    价格    -->
        <div class="se-content">
          <div class="co-item"
               v-for="(item,index) in price"
               :key="index"
               @click="getPrice(index)"
          >{{item}}
          </div>
          <div class="ck-item" @click="clear">清除</div>
        </div>
      </div>
    </div>

    <!--  出租房  -->
    <div class="r-container">
      <div class="cont-item"
           v-for="item in content"
           :key="item.id"
           @click="getHouseDetails(item.id)"
      >
        <div class="it-img">
          <img v-if="item.icon" :src="item.icon" alt="">
          <img v-else src="../../assets/img/banner/banner1.jpg" alt="">
        </div>
        <div class="it-main">
          <div class="tit">{{item.name}}</div>
          <div class="tip">{{item.way}}</div>
          <div class="min">{{item.area}}m²</div>
          <div class="price">${{item.rent}}</div>
        </div>
      </div>
    </div>

    <!-- 返回首页-->
    <div class="r-footer">
      <div class="f-left" @click="$router.go(-1)"><i class="iconfont icon-fanhui"/>上一页</div>
      <div class="f-right" @click="$router.push('/home')"><i class="iconfont icon-shouye"/>首页</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "RoomSearch",
    props: {
      id: {},
    },
    data() {
      return {
        isShow1: false,
        isShow2: false,
        content: [],
        district: [],
        price: ["$1000以下", "$1000-$2000", "$2000-$3000", "$3000以上"],
        clearId: ''
      }
    },
    methods: {
      show1() {
        this.isShow1 = !this.isShow1
        this.isShow2 = false
      },
      show2() {
        this.isShow2 = !this.isShow2
        this.isShow1 = false
      },
      //获取页面数据
      async getHouse() {
        const res = await this.$http.get(`search_cy/${this.id}`)
        this.getMap(res.data)

        //获取区域
        let cityId = this.content[0].city
        this.clearId = cityId
        const res1 = await this.$http.post(`search_cy`, {cityId})
        res1.data.forEach(v => this.district.push(v.areas));
      },

      //清除数据
      async clear() {
        //清空区域
        this.district = []
        let cityId = this.clearId
        const res = await this.$http.post(`search_cy`, {cityId})
        this.getMap(res.data)
        res.data.forEach(v => this.district.push(v.areas));
        this.isShow1 = false
        this.isShow2 = false
      },


      //获取城市区域的数据
      async chooseAreas(areas) {
        const res = await this.$http.post(`houses/areas`, {areas})
        this.getMap(res.data)
        this.isShow1 = false
      },

      //获取价格区域的数据
      async getPrice(index) {
        const res = await this.$http.post(`price/index`, {index})
        this.getMap(res.data)
        this.isShow2 = false
      },

      //获取房屋列表数据 map方法
      getMap(arr) {
        this.content = [...arr].map(item => {
          return {
            id: item._id,
            icon: item.house_icon.length > 0 ? item.house_icon[0].icon : "",
            name: item.house_name,
            way: item.rent_way,
            area: item.area,
            rent: item.rent,
            city: item.city
          }
        });
      },

      //跳转房屋详细信息
      async getHouseDetails(id) {
        this.$router.push(`/houses/details/${id}`)
      }

    },

    created() {
      this.getHouse()
    },
  }
</script>

<style scoped>
  /* 头 */
  .list-header {
    width: 100%;
    height: 40px;
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }

  .list-select {
    flex: 1;
  }

  .list-container {
    width: 100%;
    height: 100vh;
    background-color: #0a0a0a;
    opacity: 0.7;
    position: fixed;
    top: 40px;
    left: 0;
    z-index: 99999;
  }

  .se-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    opacity: 1;
  }

  .co-item {
    width: 100%;
    height: 35px;
    /*background-color: #ffffff;*/
    color: #030303;
    /*margin-left: 20px;*/
    line-height: 35px;
    /*margin-top: 10px;*/
    border-bottom: 1px solid #eee;
    padding-left: 10px;
    z-index: 1000;
  }

  .ck-item {
    width: 180px;
    height: 40px;
    line-height: 40px;
    color: #030303;
    background-color: #409EFF;
    text-align: center;
    margin: 7px auto;
  }


  .co-item:last-child {
    border-bottom: 0;
  }

  /*出租房*/
  .r-container {
    width: 100%;
    /*background-color: #409EFF;*/
    margin-top: 40px;
    padding: 0 10px;
    margin-bottom: 60px;
  }

  .cont-item {
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #f6f5f5;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .cont-item .it-img {
    flex: 2;
    text-align: center;
  }

  .it-img img {
    width: 127px;
    height: 95px;
    margin-top: 4px;
    border-radius: 6px;
  }


  .cont-item .it-main {
    flex: 3;
    width: 213px;
    height: 87px;
  }

  .it-main .tit {
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }

  .it-main .tip,
  .it-main .min {
    font-size: 12px;
    color: #a3a1a1;
    margin-bottom: 5px;
  }

  .it-main .price {
    font-weight: 800;
    color: #fa6969;
    margin-top: 13px;
  }

  /* 返回首页 */
  .r-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: 900;
    background-color: #ffffff;
    border-top: 1px solid #dedede;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .f-left,
  .f-right {
    flex: 1;
  }

  .f-left i,
  .f-right i {
    margin-right: 5px;
  }

</style>