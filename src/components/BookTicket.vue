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
                  <div>
                    <div class="spot_left"></div>
                    {{item.title}}
                  </div>
                  <div>
                    <div class="spot_right"></div>
                    {{item.price}}
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
        'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566215007264&di=2795f9a4d030891b83edeb928048237f&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F61c712f4a4da4e7b13e22de8a1a6a652348ee102.jpg', // 加载的动画 && 加载完没有图片的，给个默认图片
        'title': '黄焖鸡',
        'rate': 9.8,
        'address': '世伦路',
        'price': 1000,
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
    .container {
      .inner {
        padding: 1em;
        &:nth-child(3) {
          // margin-top: 1em;
          min-height: 500px;
          // height: calc( 100% -  24em);
          .item_ticket {
            width: 100%;
            height: 200px;
            // background: lightblue;
            padding: 2em;
            margin-bottom: 1em;
            display: flex;
            .ticket {
              width: 300px;
              height: 140px;
              background: $g_default_color;
              display: flex;
              & > div{
                width: 50%;
                height: inherit;
                background: $g_default_color;
                position: relative;
                &:nth-child(1) {
                  border-right: 1px dashed #fff;
                }
                & > div {
                  // @import "spot";
                  width: 16px;
                  height: 16px;
                  background: #fff;
                  border-radius: 50%;
                  position: absolute;
                  top: 50%;
                }
                .spot_left {
                  left: -8px;
                }
                .spot_right {
                  right: -8px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
