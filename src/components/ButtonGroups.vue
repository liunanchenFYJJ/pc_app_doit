<template>
  <ButtonGroup shape="circle">
    <Button :disabled="item.num <= 0" @click="minusNum(item)"><Icon type="ios-remove" size="16" color="#00a1e9" /></Button>
    <Button type="primary" style="width: 54px;">{{item.num}}</Button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div v-show="isBallShow" class="ball"></div>
    </transition>
    <Button @click="addNum(item)"><Icon type="ios-add" size="16" color="#00a1e9" /></Button>
  </ButtonGroup>
</template>
<script>
export default {
  name: 'ButtonGroups',
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      isBallShow: false,
    };
  },
  computed: {},
  methods: {
    addNum(item) {
      item.num++;
      this.isBallShow = true;
      this.$emit('countSum', { item, sign: 'ADD' });
    },
    minusNum(item) {
      if (item.num === 0) { // 逻辑里面进一步判断是否可以继续减
        return;
      }
      item.num--;
      this.$emit('countSum', { item, sign: 'MINUS' });
    },
    beforeEnter(el) {
      el.style.transform = 'translate(0, 0)';
    },
    enter(el, done) {
      el.offsetWidth;
      let shopCart = document.querySelector('#cart');
      el.style.transform = `translate(${shopCart.offsetLeft}px, ${shopCart.offsetTop}px)`;
      el.style.transition = 'all .4s ease-in-out';
      done(); // 去除停顿时间
    },
    afterEnter(el) {
      this.isBallShow = false;
    },
  },
};
</script>
<style lang="scss" scoped>
  .ball {
    width: 1.4em;
    height: 1.4em;
    background: $g_default_color;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    right: 15px;
    z-index: 100;
  }
</style>
