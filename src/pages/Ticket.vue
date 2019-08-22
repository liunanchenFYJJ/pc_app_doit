<template>
  <div id="ticket">
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
            <div></div>
          </Col>
          <Col :sm="8" :md="8" :lg="6">
            <div></div>
            <div></div>
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
  name: 'Ticket',
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
#ticket {
  height: 100%;
  background-color: $g_background;
  .showImg {
    width: $g_width;
    margin: auto;
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
    }
    &:nth-child(2) {
      padding-top: 6em;
    }
  }
}
</style>
