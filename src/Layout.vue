<template>
  <div id="layout">
    <div class="header"></div>
    <div class="nav"></div>
    <div class="showImg">
      <img src="./assets/swim.jpg" alt="">
    </div>
    <router-view />
    <div class="footer">
      <div class="inner">
        <h2>关于我们</h2>
        <p>了解我们</p>
        <p>加入我们</p>
        <p>联系我们</p>
      </div>
      <div class="inner">
        <h2>合作信息</h2>
        <p>我是场馆</p>
        <p>我是供应商</p>
        <p>帮助中心</p>
      </div>
      <div class="inner">
        <h2>其他产品</h2>
        <p>商家后台</p>
        <p>微信平台</p>
      </div>
      <div class="inner">
        <h2>联系我们</h2>
        <p>地址：南通市崇川区世伦路世濠花园商铺101号3层</p>
        <p>400-081-0019</p>
      </div>
      <div class="inner">
        <img src="./assets/erweima.jpg" alt="" srcset="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
};
</script>
<style lang="scss" scoped>
#layout {
  height: 100%;
  .header {
    width: 100%;
    height: 6em;
    background: grey;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .nav {
    height: 6em;
    background: #fff;
    margin-top: 6em;
  }
  .showImg {
    height: 20em;
    overflow:hidden;
    position: relative;
    img {
      width: inherit;
      position: absolute;
      clip: rect(0, 1000px);
    }
  }
  .footer {
    width: 60%;
    padding: 6em 1em;
    margin: auto;
    display: flex;
    align-items: flex-start;
    .inner {
      flex: 1;
      min-width: 78px;
      img {
        width: 100%;
        min-width: 110px;
      }
      &:nth-child(4) {
        flex: 2;
        min-width: 150px;
      }
      p {
        margin-top: 0.5em;
        &:nth-child(2) {
          margin-top: 1em;
        }
      }
    }
  }
}
</style>
