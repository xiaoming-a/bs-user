<template>
  <div class="swipers">
    <swiper>
      <swiper-item>
        <img src="~assets/img/banner/banner1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="~assets/img/banner/banner2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="~assets/img/banner/banner3.jpg" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "../../common/swiper/Swiper";
  import SwiperItem from "../../common/swiper/SwiperItem";

  export default {
    name: "SwiperMain",
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .swipers img {
    width: 100%;
    height: 100%;
  }
</style>