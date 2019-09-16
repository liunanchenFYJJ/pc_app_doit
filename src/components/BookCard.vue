<template>
    <div id="bookCard">
      <div class="container">
        <div class="inner">
          <Row :gutter="16">
            <Col :sm="4" :md="4" :lg="4">
              <div style="width: 100%;">卡类别：</div>
            </Col>
            <Col :sm="18" :md="18" :lg="18">
              <div>时间卡 &nbsp; 计次卡</div>
            </Col>
          </Row>
        </div>
        <Divider />
        <div class="inner">
          <Row :gutter="16">
            <Col v-for="(item, index) in MockData.cardLists" :key="index" :sm="24" :md="24" :lg="24">
              <div class="item_card">
                <div class="card">
                  <div class="piece">
                    <div>
                      <Icon color="#fff" size="36" type="md-headset" />
                      <div>{{item.title}}</div>
                    </div>
                  </div>
                  <div class="piece">
                    <div>
                      ￥{{item.price}}<br>
                      <div style="font-size: 16px;">
                        有效期至：{{item.time}}
                      </div>
                    </div>
                  </div>
                </div>
                <button-groups @countSum="countPriz" :item="item"></button-groups>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
</template>
<script>
import ButtonGroups from './ButtonGroups';
import Mock from 'mockjs';
const Random = Mock.Random;
export default {
  name: 'BookCard',
  components: {
    ButtonGroups,
  },
  data() {
    return {
      MockData: {},
    };
  },
  methods: {
    countPriz({ item, sign }) {
      if (sign === 'ADD') {
        this.setToCart(item); // 把item存入shoppingCartList
      } else {
        this.delFromCart(item);
      }
    },
    setToCart(item) {
      console.log(item);
      console.log(this.$store.state.shoppingCartList);
      // let inList = false;
      // if (!this.$store.state.shoppingCartList.length) {
      //   this.$store.state.shoppingCartList.push(item);
      // } else {
      //   for (let i = 0; i < this.$store.state.shoppingCartList.length; i++) {
      //     const element = this.$store.state.shoppingCartList[i];
      //     if (element.id === item.id) {
      //       element.num++;
      //       inList = true;
      //       return;
      //     };
      //   }
      //   if (!inList) {
      //     this.$store.state.shoppingCartList.push(item);
      //   }
      // };
    },
    delFromCart(item) {
      // for (let i = 0; i < this.$store.state.shoppingCartList.length; i++) {
      //   const element = this.$store.state.shoppingCartList[i];
      //   let num = element.num;
      //   if (element.id === item.id) {
      //     if (num >= 2) {
      //       element.num--;
      //     } else {
      //       this.$store.state.shoppingCartList.splice(i, 1);
      //     }
      //   }
      // }
    },
  },
  created() {
    this.MockData = Mock.mock({
      'cardLists|6': [{
        'id|+1': 1,
        'icon': '#icon-youyong',
        'title': '羽毛球年卡',
        'rate': Random.integer(0, 10),
        'price': Random.integer(60, 100),
        'time': '2022-09-08',
        'num': 0,
      }],
    });
    this.$store.state.shoppingCartList = [...this.MockData.cardLists];
  },
};
</script>
<style lang="scss" scoped>
  #bookCard {
    // .ivu-col {
    //   border-bottom: 1px solid #e8eaec;
    // }
    .container {
      .inner {
        padding: 1em;
        &:nth-child(3) {
          // margin-top: 1em;
          min-height: 500px;
          // height: calc( 100% -  24em);
          .item_card {
            width: 100%;
            height: inherit;
            // background: lightblue;
            padding: 2em;
            margin-bottom: 1em;
            display: flex;
            &:hover {
              background: #e8eaec;
            }
            .card {
              width: 300px;
              height: 140px;
              background: $g_default_color;
              display: flex;
              border-radius: 10px;
              & > div.piece{ // 票 左右两块
                width: 50%;
                // height: inherit;
                // background: $g_default_color;
                position: relative;
                & > div:nth-child(1) { // 票内容样式
                  width: 100%;
                  height: inherit;
                  padding: 1.2em;
                  text-align: center;
                  font-size: 20px;
                  color: #fff;
                }
              }
            }
            .ivu-btn-group {
              margin: auto;
            }
          }
        }
      }
    }
  }
</style>
