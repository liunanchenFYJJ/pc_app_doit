<template>
  <div id="home">
    <div class="showImg"></div>
    <div class="container">
      <div class="inner">
        <h2>附近场馆</h2>
        <Row>
          <Col :sm="12" :md="12" :lg="8" v-for="(item, i) in MockData.goodLists" :key="i">
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
        <h2>超值课程</h2>
        <Row>
          <Col :sm="16" :md="16" :lg="18">
            <div></div>
          </Col>
          <Col :sm="8" :md="8" :lg="6">
            <div></div>
            <div></div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <h2>热门赛事</h2>
        <Row>
          <Col :sm="12" :md="12" :lg="6" v-for="(item, i) in MockData.hotGameLists" :key="i">
            <goods-item :imgSrc="item.img" :baseRate="10" o_height="410px" i_height="320">
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
        <h2>特惠热卖</h2>
        <Row>
          <Col :sm="12" :md="12" :lg="6">
            <div class="sale">

            </div>
          </Col>
          <Col :sm="12" :md="12" :lg="6" v-for="(item, i) in MockData.hotSaleLists" :key="i">
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
      hotGameLists: [],
      hotSaleLists: [],
      MockData: {},
    };
  },
  created() {
    setTimeout(() => {
      this.MockData = Mock.mock({
        'goodLists|6': [{
          'id|+1': 1,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
          'title': '黄焖鸡',
          'rate': 9.8,
          'address': '世伦路',
          'price': 1000,
        }],
        'hotGameLists|4': [{
          'id|+1': 1,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
          'title': '黄焖鸡',
          'rate': 9.8,
          'address': '世伦路',
          'price': 1000,
        }],
        'hotSaleLists|6': [{
          'id|+1': 1,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
          'title': '黄焖鸡',
          'rate': 9.8,
          'address': '世伦路',
          'price': 1000,
        }]
      });
    }, 2000);
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
$g_width: 60%;
$o_default_height: 290px; // GoodItem o_height 原始值
$g_background: #f7f7f7;
#home {
  height: 100%;
  .showImg {
    width: 100%;
    height: 26em;
    background: url('../assets/swim.jpg') no-repeat;
    background-size: 100%;
  }
  .container {
    padding-bottom: 6em;
    background: $g_background;
    .inner {
      height: 100%;
      width: $g_width;
      margin: auto;
      padding: 1em;
      background: #fff;
      border-radius: 4px;
      h2 {
        padding-left: 0.5em;
      }
      div.sale {
        height: $o_default_height * 2;
        background: #000;
      }
    }
    &:nth-child(2) {
      padding-top: 6em;
    }
    &:nth-child(3) {
      // padding-top: 6em;
      .ivu-row {
        height: 200px;
        .ivu-col {
          height: 100%;
          &:nth-child(1) {
            div {
              height: inherit;
              background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg') no-repeat;
            }
          }
          &:nth-child(2) {
            div {
              background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg') no-repeat;
              height: 46%;
              &:nth-child(2) {
                margin: 1em 0;
              }
            }
          }
        }
      }
    };
  }
}
</style>
