<template>
  <div class="search">
    <!--  头部  -->
    <div class="se-header">
      <div class="he-top">
        <span class="ico iconfont icon-zuo" @click="$router.go(-1)"></span>
        <span class="text">搜索</span>
      </div>
      <div class="he-search">
        <input type="text" v-model="cityAddress" placeholder="请输入城市区域">
        <span class="iconfont icon-sousuo" @click="getCityAreas"></span>
      </div>
    </div>

    <!--  城市列表  -->
    <div class="container">
      <div class="city">城市</div>
      <div class="city-list">
        <span v-for="item in cities"
              :key="item._id"
              @click.left="cityChange(item._id)">
          {{item.city_name}}
        </span>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "Search",
    data() {
      return {
        cities: [],
        cityAddress: '',
      }
    },
    methods: {
      async getCity() {
        const res = await this.$http.get('cities');
        this.cities = res.data
      },

      //传值
      cityChange(id) {
        this.$router.push(`/houses/${id}`)
        sessionStorage.setItem('id', id)
      },

      //传值
      async getCityAreas() {
        let address = this.cityAddress
        const res = await this.$http.post('houses/city_address', {address})
        let id = res.data[0].areas
        this.$router.push(`/search/${id}`)
      }
    },
    created() {
      this.getCity();
    }
  }
</script>

<style scoped>
  .search {
    background-color: #fcfafa;
  }

  .se-header {
    background-color: #ffff;
    box-shadow: 1px 1px 3px #c2c0c0;
  }

  .he-top {
    width: 100vw;
    height: 50px;
    /*background-color: skyblue;*/
    text-align: center;
    line-height: 40px;
    position: relative;
  }

  .he-top .ico {
    position: absolute;
    font-size: 25px;
    left: 10px;
  }

  .he-search {
    width: 100vw;
    height: 50px;
    /*background-color: #ff8198;*/
    line-height: 42px;
  }

  .he-search input {
    width: 270px;
    height: 40px;
    padding: 10px;
    outline: none;
    border: 1px solid #e2dfdf;
    border-right: 0;
    margin-left: 13px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #fcfafa;
  }

  .he-search span {
    display: inline-block;
    width: 60px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #72cbfa;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: #ffffff;
  }

  input::-webkit-input-placeholder {
    color: #d5d1d1;
    font-size: 14px;
  }

  /*城市列表*/
  .container {
    width: 100%;
    height: 700px;
  }

  .city {
    font-size: 18px;
    font-weight: 900;
    margin-top: 20px;
    margin-left: 13px;
  }

  .city-list {
    /*margin-top: 10px;*/
    font-size: 15px;
  }


  .city-list span {
    display: inline-block;
    width: 100vw;
    height: 40px;
    line-height: 40px;
    padding-left: 12px;
    background-color: #ffffff;
    margin-top: 5px;
  }

  .city-list span:nth-child(1) {
    margin-top: 10px;
  }


</style>