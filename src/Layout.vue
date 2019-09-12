<template>
  <div id="layout" v-cloak>
    <div class="header">
      <div class="header_inner">
        <div class="left"></div>
        <div class="right">
            <div class="signIn">
              <router-link tag="span" to="/login" v-if="!isSignIn">
                登录
              </router-link>
              <span v-else>欢迎你:{{isSignIn}}</span>
            </div>
        </div>
      </div>
    </div>
    <div class="nav_container" :class="{ 'nav_fixed': is_nav_fixed }">
      <div class="nav">
          <router-link tag="div" to="/home">首页</router-link>
          <router-link tag="div" to="/gym">票务</router-link>
          <router-link tag="div" to="/train">培训</router-link>
          <router-link tag="div" to="/games">赛事</router-link>
          <router-link tag="div" to="/mall">商城</router-link>
          <router-link tag="div" to="/community">社区</router-link>
          <input type="text" /><Icon size="24" type="ios-search-outline" />
      </div>
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
import Login from '@/pages/Login';
export default {
  name: 'Layout',
  components: { Login },
  data() {
    return {
      isBtnShow: false,
      is_nav_fixed: false,
    };
  },
  computed: {
    isSignIn: function() {
      return sessionStorage['username'];
    },
  },
  mounted() {
    window.addEventListener('scroll', this.showBtn);
  },
  destroyed() {
    window.removeEventListener('scroll', this.showBtn);
  },
  methods: {
    showBtn() {
      // 按钮
      if (window.pageYOffset >= 400) {
        this.isBtnShow = true;
      } else {
        this.isBtnShow = false;
      }
      if (window.pageYOffset >= 100) {
        this.is_nav_fixed = true;
      } else {
        this.is_nav_fixed = false;
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
$g_border_radius: 20px;
#layout {
  [v-cloak] {
    display: none;
  }
  min-width: 960px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  .header {
    width: 100%;
    height: 6em;
    background: #bdbdbd;
    .header_inner {
      height: inherit;
      width: $g_width;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .left {
        height: inherit;
        width: 200px;
        background-image: url('http://img.doit10019.com/15a43798-8ec3-46bf-bf85-e0c1f9d97c57');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 0 10px;
      }
      .right {
        height: inherit;
        width: 200px;
        .signIn {
          padding: 0.6em;
          color: #fff;
          cursor: pointer;
          text-align: center;
          margin-top: 1em;
          font-size: 16px;
        }
      }
    }
  }
  .nav_container {
    background: $g_background;
    transition: all .3s ease;
    .nav {
      height: 6em;
      margin: auto;
      // margin-top: 6em;
      width: $g_width;
      position: relative;
      div {
        display: inline-block;
        width: 4em;
        height: 2em;
        color: #000;
        font-weight: 500;
        font-size: 18px;
        margin: 1em auto;
        padding: 6px 16px 0 18px;
        border-radius: $g_border_radius;
        cursor: pointer;
        &:hover {
          background: #00a1e9;
          color: #fff;
        }
      }
      .router-link-active {
          background: #00a1e9;
          color: #fff;
      }
      input {
        position: absolute;
        top: 2em;
        right: 0;
        padding: 6px 30px 6px 8px;
        height: 2.2em;
        width: 120px;
        border-radius: $g_border_radius;
        border: 1px solid #d0d0d0;
        background: #fff;
        outline: none;
      }
      i {
        position: absolute;
        top: 1em;
        right: 4px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .nav_fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background: $g_background;
    box-shadow: 0 5px 14px #ccc;
  }
  .footer {
    // position: absolute;
    // bottom: 0;
    // left: calc( (100% - 1000px)/2 );
    width: $g_width;
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
        &:hover {
          cursor: pointer;
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
