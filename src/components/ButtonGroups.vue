<template>
    <ButtonGroup shape="circle">
        <Button @click="minusNum"><Icon type="ios-add" size="16" color="#00a1e9" /></Button>
        <Button type="primary" style="width: 54px;">{{num}}</Button>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div v-show="isBallShow" class="ball"></div>
        </transition>
        <Button @click="addNum"><Icon type="ios-add" size="16" color="#00a1e9" /></Button>
    </ButtonGroup>
</template>
<script>
export default {
  name: 'ButtonGroups',
//   props: {
//     num: {
//       type: Number,
//       default: 0,
//     },
//   },
  data() {
    return {
      num: 100,
      isBallShow: false,
    };
  },
  computed: {},
  methods: {
    addNum() {
      this.num++;
      this.isBallShow = true;
    },
    minusNum() {
      this.num--;
    },
    beforeEnter(el) {
      el.style.transform = 'translate(0, 0)';
    },
    enter(el, done) {
      el.offsetWidth;
      console.log(document.querySelector('#cart'));
      let shopCart = document.querySelector('#cart');
      el.style.transform = `translate(${shopCart.offsetLeft}px, ${shopCart.offsetTop}px)`;
      el.style.transition = 'all .8s ease-in-out';
      done(); // 去除停顿时间
    },
    afterEnter(el) {
      this.isBallShow = false;
    },
  },
};
</script>
<style lang="scss">
    .ball {
        width: 1.4em;
        height: 1.4em;
        background: $g_default_color;
        border-radius: 50%;
        position: absolute;
        top: 8px;
        right: 15px;
        z-index: 20;
    }
</style>
