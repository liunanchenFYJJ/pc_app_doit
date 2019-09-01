<template>
    <div ref="cart" id="cart">
        shoppingCart
    </div>
</template>
<script>
export default {
  name: 'ShoppingCart',
};
</script>
<style lang="scss">
#cart {
  background: lightblue;
  width: 220px;
  height: 60px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
}
</style>
