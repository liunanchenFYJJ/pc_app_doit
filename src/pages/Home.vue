<template>
  <div id="home">
    <div class="header"></div>
    <div class="nav"></div>
    <div class="showImg">
      <img src="../assets/swim.jpg" alt="">
    </div>
    <div class="container">
      <div class="inner">
        <Row :gutter="16">
          <Col :ms="12" :md="12" :lg="8" v-for="(item, i) in MockData.goodLists" :key="i">
            <goods-item :imgSrc="item.img" :baseRate="10">
              <span slot="title">{{item.title}}</span>
              <span slot="rate">{{item.rate}}条评价</span>
              <span slot="address">{{item.address}}</span>
              <span slot="price">人均消费￥{{item.price}}</span>
            </goods-item>
          </Col>
        </Row>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <Row :gutter="16">
          <Col :ms="12" :md="12" :lg="8" v-for="(item, i) in MockData.goodLists" :key="i">
            <goods-item :imgSrc="item.img" :baseRate="10">
              <span slot="title">{{item.title}}</span>
              <span slot="rate">{{item.rate}}条评价</span>
              <span slot="address">{{item.address}}</span>
              <span slot="price">人均消费￥{{item.price}}</span>
            </goods-item>
          </Col>
        </Row>
      </div>
    </div>
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
        <img src="../assets/erweima.jpg" alt="" srcset="">
      </div>
    </div>
  </div>
</template>
<script>
import GoodsItem from '@/components/GoodsItem.vue';
import Mock from 'mockjs';
export default {
  name: 'Home',
  components: { GoodsItem },
  data() {
    return {
      goodLists: [],
      MockData: {},
    };
  },
  created() {
    setTimeout(() => {
      this.MockData = Mock.mock({
        'goodLists|6': [{
          'id|+1': 1,
          'img': 'http://photo.16pic.com/00/50/67/16pic_5067342_b.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
          'title': '黄焖鸡',
          'rate': 9.8,
          'address': '世伦路',
          'price': 1000,
        }],
      });
    }, 2000);
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
#home {
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
    // background: lightcoral;
  }
  // div.showImg + div.container {
  //   padding-top: 6em;
  // }
  div.showImg + div.container {
    padding-top: 6em;
  }
  .container {
    // height: 2000px;
    padding-bottom: 6em;
    background: #f7f7f7;
    .inner {
      height: 100%;
      width: 60%;
      margin: auto;
      padding: 1em;
      // margin: 0 28em 0 26em;
      background: #fff;
    }
  }
  .footer {
    width: 60%;
    // height: 20em;
    padding: 6em 1em;
    margin: auto;
    // background: lightpink;
    display: flex;
    align-items: flex-start;
    .inner {
      flex: 1;
      min-width: 78px;
      img {
        width: 100%;
        // height: 100%;
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
