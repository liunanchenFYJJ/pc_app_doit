<template>
  <div id="layout">
    <div class="header"></div>
    <div class="nav" :class="{ nav_extra: isNavFixed }"></div>
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
    <div v-show="isBtnShow" @click="handleBackTop" class="backTop">
      <Icon size="16" color="#fff" type="ios-arrow-up" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data() {
    return {
      isBtnShow: false,
      isNavFixed: true,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.showBtn);
  },
  destroyed() {
    window.removeEventListener('scroll', this.showBtn);
  },
  methods: {
    showBtn() {
      console.log(window.pageYOffset);
      // 按钮
      if (window.pageYOffset >= 400) {
        this.isBtnShow = true;
      } else {
        this.isBtnShow = false;
      }
      // 页头
      if (window.pageYOffset >= 72) {
        this.isNavFixed = true;
      } else {
        this.isNavFixed = false;
      }
    },
    handleBackTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#layout {
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  .header {
    width: 100%;
    height: 6em;
    background: grey;
    z-index: 100;
    position: fixed;
    top: 0;
  }
  .nav {
    height: 6em;
    background: #fff;
    // margin-top: 6em;
  }
  .nav_extra {
    position: fixed;
    top: 0;
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
  .backTop {
    position: fixed;
    right: 2em;
    bottom: 2em;
    width: 3em;
    height: 3em;
    background: #515a6e;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
