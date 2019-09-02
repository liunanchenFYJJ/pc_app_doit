<template>
    <ButtonGroup shape="circle">
        <Button :disabled="isBtnDisabled" @click="minusNum(item)"><Icon type="ios-remove" size="16" color="#00a1e9" /></Button>
        <Button type="primary" style="width: 54px;">{{num}}</Button>
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
      num: 0,
      isBallShow: false,
      // isBtnDisabled: true,
    };
  },
  computed: {
  //   num() {
  //     return this.$store.state.num;
  //   },
    isBtnDisabled() {
      return this.num <= 0;
    }
  },
  methods: {
    addNum(item) {
      this.num++;
      // console.log(this);
      this.isBallShow = true;
      console.log(item);
      this.$emit('countSum', { item, num: this.num });
      // this.$store.commit('addGoods', { item, num: this.num });
    },
    minusNum(item) {
      this.num--;
      this.$emit('countSum', { item, num: this.num });
      // this.$store.commit('delGoods', { item, num: this.num });
    },
    beforeEnter(el) {
      el.style.transform = 'translate(0, 0)';
    },
    enter(el, done) {
      el.offsetWidth;
      console.log(document.querySelector('#cart'));
      let shopCart = document.querySelector('#cart');
      el.style.transform = `translate(${shopCart.offsetLeft}px, ${shopCart.offsetTop}px)`;
      // el.style.transform = `translate(${1074}px, ${shopCart.offsetTop}px)`;
      el.style.transition = 'all .8s ease-in-out';
      // el.style.transition = 'all .8s cubic-bezier(.17,-.67,.83,.67)';
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
        z-index: 100;
    }
</style>
