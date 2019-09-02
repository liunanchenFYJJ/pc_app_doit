<template>
    <div ref="cart" id="cart">
      <!-- <transition-group> -->
        <div v-for="(item, i) in shoppingCartList" :key="i" :style="{ top: `${-(i+1)*50}px` }" class="item">{{item.id}}-{{item.title}}</div>
      <!-- </transition-group> -->
      <div class="item">shoppingCart</div>
    </div>
</template>
<script>
export default {
  name: 'ShoppingCart',
  computed: {
    shoppingCartList() {
      return this.$store.state.shoppingCartList;
    },
    // itemNum() {
    //   return this.$store.state.num;
    // },
  },
};
</script>
<style lang="scss">
$box_shadow: inset 2px 2px 8px #eee;
#cart {
  background: lightblue;
  width: 280px;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  box-shadow: $box_shadow;
  .item {
    height: inherit;
    width: inherit;
    position: absolute;
    background: #f7f7f7;
    box-shadow: $box_shadow;
  }
}
</style>
