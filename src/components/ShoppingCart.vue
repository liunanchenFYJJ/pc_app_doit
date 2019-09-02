<template>
    <div ref="cart" id="cart">
        shoppingCart
        {{$store.state.num}}
      <div v-for="(i) in 10" :key="i" :style="{ top: `${-i*50}px` }" class="item">{{i}}</div>
      <!-- <div class="item"></div> -->
    </div>
</template>
<script>
export default {
  name: 'ShoppingCart',
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
