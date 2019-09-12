<template>
  <div id="gym">
    <div class="showImg"></div>
    <div class="container">
      <div class="inner">
        <Row :gutter="16">
          <Col :sm="4" :md="4" :lg="2">
            <div>体育项目</div>
          </Col>
          <Col :sm="18" :md="18" :lg="22">
            <div></div>
          </Col>
        </Row>
        <Divider />
        <Row :gutter="16">
          <Col :sm="2" :md="2" :lg="2">
            <div>区域</div>
          </Col>
          <Col :sm="2" :md="22" :lg="22">
            <div></div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="container">
      <div class="inner">
        <Row>
          <Col :sm="16" :md="16" :lg="18">
           <Row v-for="(item, i) in MockData.goodLists" :key="i">
             <Col span="24">
              <goods-item @goodItemDetails="toGoodDetails(item)" mode="horizontal" :i_width="i_width" :imgSrc="item.img" :baseRate="10">
                <span slot="title">{{item.title}}</span>
                <span slot="rate">{{item.rate}}条评价</span>
                <span slot="address">{{item.address}}</span>
                <span slot="price">人均消费￥{{item.price}}</span>
              </goods-item>
             </Col>
           </Row>
          </Col>
          <Col :sm="8" :md="8" :lg="6">
            <Row v-for="(item, i) in MockData.goodLists" :key="i">
              <Col span="24">
                <goods-item :imgSrc="item.img" :baseRate="10">
                  <span slot="title">{{item.title}}</span>
                  <span slot="rate">{{item.rate}}条评价</span>
                  <span slot="address">{{item.address}}</span>
                  <span slot="price">人均消费￥{{item.price}}</span>
                </goods-item>
              </Col>
            </Row>
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
  name: 'Gym',
  components: { GoodsItem },
  data() {
    return {
      goodLists: [],
      hotGameLists: [],
      hotSaleLists: [],
      MockData: {},
      i_width: 320,
    };
  },
  created() {
    setTimeout(() => {
      this.MockData = Mock.mock({
        'goodLists|6': [{
          'id|+1': 1,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
          'title': '点拓体育中心',
          'rate': 9.8,
          'address': '世伦路',
          'price': 1000,
        }],
        'hotGameLists|4': [{
          'id|+1': 1,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
          'title': '点拓体育中心',
          'rate': 9.8,
          'address': '世伦路',
          'price': 1000,
        }],
        'hotSaleLists|6': [{
          'id|+1': 1,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
          'title': '点拓体育中心',
          'rate': 9.8,
          'address': '世伦路',
          'price': 1000,
        }]
      });
    }, 1000);
  },
  methods: {
    toGoodDetails(item) {
      console.log(item);
      this.$router.push({
        path: `gym/${item.id}`,
        // query: {
        //   item,
        // },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#gym {
  height: 100%;
  background-color: $g_background;
  .showImg {
    width: $g_width;
    margin: auto;
    height: 26em;
    background: url('../assets/swim.jpg') no-repeat;
    background-size: cover;
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
    }
    &:nth-child(2) {
      padding-top: 6em;
    }
  }
}
</style>
