<template>
  <div id="city">
    <div class="container">
      <Row>
        <!-- <Col span="24">
          按省份选择：
          直接搜索：
        </Col> -->
        <Col span="24">
          热门城市：
          <span class="letter" v-for="(item, i) in hotCityList" :key="i" @click="chooseCity(item, 'hot')">{{item}}</span>
        </Col>
        <Col v-if="recentCityList.length" span="24">
          最近访问：
          <span class="letter" v-for="(item, i) in recentCityList" :key="i" @click="chooseCity(item, 'hot')">{{item}}</span>
        </Col>
        <Col span="24">
          按拼音首字母选择：
          <span class="letter" v-for="(item, i) in letterList" :key="i" @click="scrollToTarget(item)">{{item}}</span>
        </Col>
        <Col span="24" v-for="(item, i) in letterList" :key="i">
          <Row>
            <Col span="2">
              <div class="label" :id="item" :ref="item">{{item}}</div>
            </Col>
            <Col span="20">
              <span class="content" v-for="(itemIn, indexIn) in listData[item]" :key="indexIn" @click="chooseCity(itemIn, 'default')">{{itemIn.name}}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <back-to-top :isBtnShow="isBtnShow"></back-to-top>
  </div>
</template>
<script>
import BackToTop from '@/components/BackToTop';
export default {
  name: 'City',
  components: { BackToTop },
  data() {
    return {
      letterList: [],
      listData: {},
      hotCityList: ['北京', '上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都'],
      isBtnShow: false,
    };
  },
  computed: {
    recentCityList: function() {
      let arr = localStorage['recentCity'] ? JSON.parse(localStorage['recentCity']) : [];
      return arr;
    },
  },
  created() {
    this.getCityList();
  },
  mounted() {
    window.addEventListener('scroll', this.fixHeader);
  },
  destroyed() {
    window.removeEventListener('scroll', this.fixHeader);
  },
  methods: {
    getCityList() {
      this.$axios({
        method: 'GET',
        url: '3rdApis',
        data: {},
      }).then(res => {
        this.listData = res.data;
        this.letterList = [...Object.keys(res.data)];
      }).catch(error => {
        console.log(error);
      });
    },
    chooseCity(itemIn, sign) {
      let arr = localStorage['recentCity'] ? JSON.parse(localStorage['recentCity']) : [];
      switch (sign) {
        case 'hot':
          localStorage['currentCity'] = itemIn;
          if (arr.indexOf(itemIn) === -1) { // 只存localstorage里面不存在的
            arr.push(itemIn);
          }
          this.$router.push({
            name: 'Home',
            params: {
              location: itemIn,
            },
          });
          break;
        default:
          localStorage['currentCity'] = itemIn.name;
          if (arr.indexOf(itemIn.name) === -1) { // 只存localstorage里面不存在的
            arr.push(itemIn.name);
          }
          this.$router.push({
            name: 'Home', // Route with name 'home' does not exist Route名字有大小写之区分
            params: {
              location: itemIn.name,
            },
          });
          break;
      }
      localStorage['recentCity'] = JSON.stringify(arr);
    },
    scrollToTarget(id) {
      this.$refs[id][0].scrollIntoView(); // 利用scrollToView()回到视野中
      // document.getElementById(id).scrollIntoView();
    },
    fixHeader() {
      // 按钮
      if (window.pageYOffset >= 400) {
        this.isBtnShow = true;
      } else {
        this.isBtnShow = false;
      }
    },
  },
};
</script>
<style lang="scss">
  #city {
    height: auto;
    background: $g_background;
    font-size: 16px;
    .container {
      width: $g_width;
      height: inherit;
      background: #fff;
      margin: 0 auto;
      & > .ivu-row {
        & > .ivu-col {
          // height: 200px;
          border-bottom: 1px solid rgb(199, 198, 198);
          padding: 2em;
          // &:nth-child(4) {
            .letter {
              display: inline-block;
              // background: #000;
              // margin: 0 0.5em;
              padding: 0.3em 0.6em;
              border-radius: 4px;
              &:hover {
                cursor: pointer;
                background: $g_default_color;
                color: #fff;
              }
            }
            .label {
              width: 40px;
              height: 40px;
              line-height: 40px;
              background: $g_default_color;
              border-radius: 50%;
              text-align: center;
              color: #fff;
            }
            .content {
              display: inline-block;
              // background: #000;
              margin: 0 1.5em;
              padding: 0.5em;
              border-radius: 10px;
              &:hover {
                cursor: pointer;
                background: $g_default_color;
                color: #fff;
              }
            }
          // }
        }
      }
    }
  }
</style>
