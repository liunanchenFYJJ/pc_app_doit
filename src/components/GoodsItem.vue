<template>
    <div class="card" @click="toGoodItem" :style="{height: o_height}">
        <div>
            <img :style="{height: i_height}" :src="imgSrc" alt="">
        </div>
        <div>
            <slot name="title"></slot>
        </div>
        <div>
            <Icon color="#ffac2d" type="ios-star" v-for="n in 4" :key="n"></Icon><Icon color="#ffac2d" type="ios-star" v-if="9.4 >= baseRate"></Icon><Icon color="#ffac2d" type="ios-star-half" v-else></Icon>
            <slot name="rate"></slot>
        </div>
        <div>
            <slot name="address"></slot>
        </div>
        <div>
            <slot name="price"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'GoodsItem',
  props: {
    imgSrc: {
      type: String,
    },
    baseRate: {
      type: Number,
      default: 6,
    },
    o_height: {
      type: String,
      default: '280px',
    },
    i_height: {
      type: String,
      default: '200px',
    },
  },
  methods: {
    toGoodItem() {
      console.log('click');
    },
  },
};
</script>
<style lang="scss">
  .card {
    background: #fff;
    // height: 280px;
    // margin: 1em 0 0 0;
    div {
      width: 100%;
      // height: 200px;
      &:nth-child(n+2) {
          height: 1.5em;
      }
      img {
          width: 100%;
          // height: 200px;
          padding-bottom: 1em;
      }
    }
  }
</style>
