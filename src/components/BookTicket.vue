<template>
  <div id="bookTicket">
    <div class="container">
      <div class="inner">
        <Row :gutter="16">
          <Col :sm="4" :md="4" :lg="4">
            <div>票类别：</div>
          </Col>
          <Col :sm="18" :md="18" :lg="18">
            <RadioGroup v-model="default_button" type="button">
              <Radio label="所有"></Radio>
              <Radio v-for="(item, i) in ticketOrCardTypeList" :key="i" :label="item"></Radio>
            </RadioGroup>
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
  name: 'BookTicket',
  components: {
    ButtonGroups,
  },
  data() {
    return {
      MockData: {},
      ticketOrCardTypeList: [],
      default_button: '所有',
    };
  },
  methods: {
    // 获取票卡所有的类别
    getCardOrTicketTypes() {
      let data = {
        operator_id: 'c4fb984777d111e986f98cec4bb1848c',
        operator_role: 'admin',
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        type: 'pw',
      };
      this.$axios({
        method: 'POST',
        url: 'getCardOrTicketTypes.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          this.ticketOrCardTypeList = res.data.data;
        } else {
          this.$Message.warning(res.code);
        }
      }).catch(error => {
        console.log(error);
      });
    },
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
    },
    delFromCart(item) {},
  },
  created() {
    this.MockData = Mock.mock({
      'ticketLists|6': [{
        'id|+1': 1,
        'icon': '#icon-youyong',
        'title': '游泳票',
        'rate': Random.integer(0, 10),
        'price': Random.integer(60, 100),
        'time': '2019-09-14',
        'num': 0,
      }],
    });
    this.$store.state.shoppingCartList = [...this.MockData.ticketLists];
    this.getCardOrTicketTypes(); // 获取票卡类别
  },
};
</script>
<style lang="scss" scoped>
  @mixin div_commen {
    padding: 0.5em 1em 0.5em 1em;
    margin: 1em 1em 0 0;
    cursor: pointer;
  }
  #bookTicket {
    .container {
      .inner {
        padding: 0 1em;
        &:nth-child(3) {
          min-height: 500px;
          .item_ticket {
            width: 100%;
            height: inherit;
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
  .ivu-radio-default {
    margin: 0 0 1em 1em;
  }
  .ivu-radio-wrapper {
    border-radius: 4px !important;
    border: 1px solid #dcdee2 !important;
    &::before {
      content: none;
    }
    &::after {
      content: none;
    }
  }
</style>
