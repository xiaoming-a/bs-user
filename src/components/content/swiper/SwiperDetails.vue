<template>
  <div class="swipers">
    <swiper>

      <swiper-item v-for="item in icons" :key="item._id">
        <img :src="item.icon" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "../../common/swiper/Swiper";
  import SwiperItem from "../../common/swiper/SwiperItem";

  export default {
    name: "SwiperDetails",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      icons: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .swipers,
  .swipers img {
    width: 100%;
    height: 281px;
  }
</style>