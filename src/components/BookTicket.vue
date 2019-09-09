<template>
    <div id="bookTicket">
      <div class="container">
        <div class="inner">
          <Row :gutter="16">
            <Col :sm="4" :md="4" :lg="4">
              <div>票类别：</div>
            </Col>
            <Col :sm="18" :md="18" :lg="18">
              <div></div>
            </Col>
          </Row>
        </div>
        <Divider />
        <div class="inner">
          <Row :gutter="16">
            <Col v-for="(item, index) in MockData.ticketLists" :key="index" :sm="24" :md="24" :lg="24">
              <div class="item_ticket">
                <div class="ticket">
                  <div class="piece">
                    <div class="spot spot_left"></div>
                    <div>
                      <Icon color="#fff" size="36" type="md-headset" />
                      <div>{{item.title}}</div>
                    </div>
                  </div>
                  <div class="piece">
                    <div class="spot spot_right"></div>
                    <div>
                      ￥{{item.price}}<br>
                      {{item.time}}
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
  name: 'BookTicket',
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
      'ticketLists|6': [{
        'id|+1': 1,
        'icon': '#icon-youyong',
        'title': Random.paragraph(1, 10),
        'rate': Random.integer(0, 10),
        'price': Random.integer(60, 100),
        'time': Random.datetime(),
        'num': 0,
      }],
    });
    this.$store.state.shoppingCartList = [...this.MockData.ticketLists];
  },
};
</script>
<style lang="scss" scoped>
  // .spot {
  //   width: 16px;
  //   height: 16px;
  //   background: #fff;
  //   border-radius: 50%;
  // }
  #bookTicket {
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
          .item_ticket {
            width: 100%;
            height: inherit;
            // background: lightblue;
            padding: 2em;
            margin-bottom: 1em;
            display: flex;
            &:hover {
              background: #e8eaec;
            }
            .ticket {
              width: 300px;
              height: 140px;
              background: $g_default_color;
              display: flex;
              & > div.piece{ // 票 左右两块
                width: 50%;
                height: inherit;
                background: $g_default_color;
                position: relative;
                &:nth-child(1) {
                  border-right: 1px dashed #fff;
                }
                & > div.spot {
                  // @import "spot";
                  width: 16px;
                  height: 16px;
                  background: #fff;
                  border-radius: 50%;
                  position: absolute;
                  top: calc( 50% - (16px/2) );
                }
                .spot_left {
                  left: -8px;
                }
                .spot_right {
                  right: -8px;
                }
                & > div:nth-child(2) { // 票内容样式
                  // background: lightgreen;
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
