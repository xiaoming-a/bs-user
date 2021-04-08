<template>
  <div class="details">
    <!--  头部  -->
    <div class="de-header clearfix">
      <span class="ico iconfont icon-zuo" @click="$router.go(-1)"></span>
      <span class="tit">{{houseDetails.house_name}}</span>
    </div>

    <!--  轮播图  -->
    <div class="de-swiper">
      <swiper-details :icons="houseDetails.house_icon"/>
    </div>

    <!--  房子信息  -->
    <div class="tip">
      <!--  标签  -->
      <div class="taps">
        <span v-for="(item,index) in houseDetails.tabs" :key="index">{{item}}</span>
      </div>

      <!--  标题  -->
      <div class="text">
        {{houseDetails.house_name}}
      </div>

      <!--  其他的  -->
      <div class="another">
        <div class="an-left">
          <span>{{houseDetails.rent}}元/月</span>
          <span>租金</span>
        </div>
        <div class="an-middle">
          <span>{{houseDetails.door_model}}</span>
          <span>户型</span>
        </div>
        <div class="another-right">
          <span>{{houseDetails.area}}m²</span>
          <span>面积</span>
        </div>
      </div>

      <!--  房屋详细   -->
      <div class="t-main">
        <table>
          <tr>
            <td><span>看房时间</span>{{houseDetails.checking_time}}</td>
            <td><span>支付</span>{{houseDetails.pay}}</td>
          </tr>
          <tr>
            <td><span>电梯</span>{{houseDetails.elevator===true?"有":"没有"}}</td>
            <td><span>出租方式</span>{{houseDetails.rent_way}}</td>
          </tr>
          <tr>
            <td><span>朝向</span>{{houseDetails.orientation}}</td>
            <td><span>楼层</span>{{houseDetails.floors}}</td>
          </tr>
          <tr>
            <td><span>装修</span>{{houseDetails.fitment}}</td>
            <td><span>楼型</span>{{houseDetails.floor_type}}</td>
          </tr>
        </table>
      </div>
    </div>

    <!--  房屋配置  -->
    <div class="disposition">
      <div class="di-item" v-for="item in disposition" :key="item.name">
        <div class="it-icon iconfont" :class="item.icon"></div>
        <div class="it-name">{{item.name}}</div>
      </div>
    </div>

    <!--  房屋描述  -->
    <div class="describe">
      <h3>房源特点</h3>
      <div class="bright">
        <div class="br-tit">房屋亮点</div>
        <div class="br-con">{{houseDetails.bright_spot}}</div>
      </div>
      <div class="bright">
        <div class="br-tit">户型介绍</div>
        <div class="br-con">{{houseDetails.door_introduced}}</div>
      </div>
      <div class="bright">
        <div class="br-tit">交通出行</div>
        <div class="br-con">{{houseDetails.travel}}</div>
      </div>
    </div>

    <!--  底部  -->
    <div class="footer">
      <div class="call" @click="callName=true">联系业主</div>
    </div>

    <div class="zzc" v-show="callName">
      <ul>
        <li>姓名：</li>
        <li>{{houseDetails.owners}}</li>
        <li>电话：</li>
        <li>{{houseDetails.telephone}}</li>
      </ul>
      <div class="btn">
        <span class="bt-left" @click="callName=false">取消</span>
        <span class="bt-right" @click="callName=false">确定</span>
      </div>
    </div>

  </div>
</template>

<script>
  import SwiperDetails from "../../components/content/swiper/SwiperDetails";

  export default {
    name: "Details",
    components: {
      SwiperDetails
    },
    props: {
      id: {}
    },
    data() {
      return {
        houseDetails: {},
        disposition: [],
        callName: false
      }
    },
    methods: {
      async getDetails() {
        const res = await this.$http.get(`houses/details/${this.id}`)
        this.houseDetails = res.data

        console.log()

        //取出房屋配置的值
        this.getConfiguration(res.data.configuration, this.disposition)

      },
      getConfiguration(arr, arrr1) {
        arr.forEach(v => {
          switch (v) {
            case "洗衣机":
              arrr1.push({name: "洗衣机", icon: 'icon-weibiaoti-'});
              break;
            case "冰箱":
              arrr1.push({name: "冰箱", icon: 'icon-bingxiang'});
              break;
            case "电视":
              arrr1.push({name: "电视", icon: 'icon-dianshi'});
              break;
            case "空调":
              arrr1.push({name: "空调", icon: 'icon-peitaosheshixiaotubiao_kongtiao'});
              break;
            case "热水器":
              arrr1.push({name: "热水器", icon: 'icon-reshuiqi'});
              break;
            case "天然气":
              arrr1.push({name: "天然气", icon: 'icon-meiqitianranqi'});
              break;
            case "暖气":
              arrr1.push({name: "暖气", icon: 'icon-shuinuanqigongcheng'});
              break;
            case "床":
              arrr1.push({name: "床", icon: 'icon-chuang1'});
              break;
            case "网络":
              arrr1.push({name: "网络", icon: 'icon-wangluo'});
              break;
            case "衣柜":
              arrr1.push({name: "衣柜", icon: 'icon-yigui'});
              break;
          }
        })
      },


    },
    created() {
      this.getDetails()
    }
  }
</script>

<style scoped>
  .details {
    /*height: 1200px;*/
    margin-bottom: 49px;
    background-color: #f6f6f6;
  }

  /*头部*/
  .de-header {
    width: 100vw;
    height: 49px;
    line-height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: #ffffff;
    z-index: 999;
    box-shadow: 1px 1px 1px #f8f8f8;
  }

  .de-header .ico {
    float: left;
    margin-left: 5px;
    display: inline-block;
    font-size: 30px;
  }

  .de-header .tit {
    display: inline-block;
    width: 250px;
    margin-left: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  /*轮播图*/
  .de-swiper {
    margin-top: 49px;
    height: 281px;
  }

  /*房子信息*/
  .tip {
    border-bottom: 1px solid #ffffff;
    background-color: #ffffff;
  }

  .taps {
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 8px;
  }

  .taps span {
    display: inline-block;
    width: 63px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    margin-left: 10px;
    background-color: #6fe565;
    color: #ffffff;
    border-radius: 4px;
  }

  .taps span:nth-child(1) {
    margin-left: 0;
  }

  .text {
    width: 100vw;
    font-size: 20px;
    padding: 10px 0 10px 10px;
  }

  .another {
    width: 95vw;
    display: flex;
    padding: 10px;
  }

  .an-left,
  .an-middle,
  .another-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 118px;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
  }

  .another-right {
    border-right: 0;
  }

  .an-left span,
  .an-middle span,
  .another-right span {
    display: inline-block;
    font-weight: 700;
    color: #ff562b;
  }

  .an-left span:last-child,
  .an-middle span:last-child,
  .another-right span:last-child {
    margin-top: 3px;
    font-weight: normal;
    font-size: 14px;
    color: #c4c6c6;
  }

  .t-main {
    margin: 10px 0 12px 0;
    padding: 8px;
  }

  .t-main table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  .t-main td {
    width: 50%;
    height: 30px;
    line-height: 30px;
    /*background-color: #409EFF;*/
    font-size: 14px;
    color: #3d3c3c;
  }

  .t-main td span {
    margin-right: 8px;
    color: #c4c6c6;
  }

  /*房屋配置*/
  .disposition {
    margin-top: 10px;
    background-color: #ffffff;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
  }

  .di-item {
    /*background-color: #efae95;*/
    width: 65px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 6px;
  }

  .it-icon {
    font-size: 26px;
  }

  .it-name {
    margin-top: 5px;
    font-size: 12px;
    color: #b4b3b3;
  }


  /* 房屋描述 */
  .describe {
    margin-top: 10px;
    background-color: #ffffff;
    padding: 10px 0;
  }

  .describe h3 {
    padding: 10px 8px;
  }

  .bright {
    padding: 8px;
    font-size: 14px;
    border-bottom: 1px solid #e0e0e0;
  }

  .bright:last-child {
    border-bottom: 0;
  }

  .bright .br-tit {
    color: #acacaf;
  }

  .bright .br-con {
    color: #3d3c3c;
    margin-top: 10px;
    width: 95%;
  }

  .footer {
    width: 100vw;
    height: 50px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid #d7d7d9;
  }

  .call {
    width: 50%;
    height: 30px;
    background-color: #70f672;
    line-height: 30px;
    margin-left: 85px;
    text-align: center;
    margin-top: 10px;
    border-radius: 5px;
  }

  /*遮罩层*/
  .zzc {
    position: fixed;
    left: 48%;
    top: 25%;
    width: 200px;
    height: 150px;
    transform: translateX(-50%);
    background-color: #fff;
    box-shadow: 0 0 5px #c2c0c0;
    padding: 10px;
    /*border: 1px solid #c2c0c0;*/
  }

  .zzc ul {
    width: 100%;
    height: 100px;
  }

  .zzc ul > Li {
    font-size: 18px;
    font-weight: 700;
    margin-top: 5px;
  }

  .zzc ul > Li:nth-child(1) {
    margin-top: 0;
  }

  .zzc ul > Li:nth-child(2n) {
    font-size: 14px;
    font-weight: normal;
    color: #363535;
    margin-left: 18px;
  }

  .btn {
    width: 100%;
    height: 30px;
  }

  .btn span {
    display: inline-block;
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-left: 25px;
  }

  .bt-left {
    background-color: #ff5252;
    color: #ffffff;
    border-radius: 5px;
  }

  .bt-right {
    background-color: #458af3;
    color: #ffffff;
    border-radius: 5px;
  }


</style>