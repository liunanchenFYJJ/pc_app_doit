<template>
    <div id="BookField">
        <!-- <Table border :columns="column" :data="tableFieldData"></Table> -->
        <div class="signs">场地类别：台球</div>
        <template>
          <div v-for="(item, index) in tableFieldData" :key="index" class="container">
            <div class="title">
              {{item.place}}
            </div>
            <div v-for="(itemIn, indexIn) in item.data" :key="indexIn" class="content"
            :style="{'background': itemIn.status === 0 ? 'lightblue' : itemIn.status === 2 ? '#ff9000': itemIn.status === 88 ? '#acce22': 'red',
            'cursor': itemIn.status === 0 ? 'pointer' : 'not-allowed'}"
            :class="content_style" @click="handleCellClick($event, itemIn)">
              <Tooltip placement="top" :delay="500">
                {{itemIn.money}}
                <div slot="content">
                  <p>{{itemIn.status}}</p>
                  <p>{{itemIn.time}}</p>
                </div>
              </Tooltip>
            </div>
          </div>
          <div class="line" ref="line"></div>
        </template>
    </div>
</template>
<script>
import moment from 'moment';
export default {
  name: 'BookField',
  data() {
    return {
      tableFieldData: [],
      column: [
        {
          title: 'place',
          key: 'place',
        },
        {
          title: 'test',
          key: 'test',
        },
      ],
      isActive: false,
      line_timer: null,
    };
  },
  computed: {
    content_style: function() {
      return {
        active: this.isActive,
      };
    },
  },
  created() {
    this.getFieldTableData();
  },
  mounted() {
    // 每60s调用一次
    this.line_timer = setInterval(() => {
      console.log('open timer...');
      this.draw_line();
    }, 1000 * 60);
  },
  beforeDestroy() {
    console.log('close timer...');
    this.line_timer && clearInterval(this.line_timer);
  },
  methods: {
    getFieldTableData() {
      let data = {
        fieldSaleId: '3d67c980cb9111e984598866394de9ee',
        operator_id: '2014011166',
        operator_role: 'admin',
        orgId: 'c4f67f3177d111e986f98cec4bb1848c',
        today: '2019-09-17',
        week: '星期二',
      };
      this.$axios({
        method: 'POST',
        url: 'localApis/fieldSale/listFieldSale.do',
        data: data,
      }).then(res => {
        if (res.data.code === 200) {
          if (res.data.data.length) {
            this.tableFieldData = res.data.data;
          } else {
            // todo 无数据页面展示
          }
        } else {
          this.$Message.warning(res.code);
        }
      }).then(() => {
        this.draw_line();
      }).catch(error => {
        console.log(error);
      });
    },
    draw_line() {
      console.log(moment().format('HH:mm'));
      if (this.tableFieldData.length) {
        const SINGAL_CELL_HEIGHT = 40; // 表格单元格的高度
        // 场地开始时间，结束时间
        let startTime = this.tableFieldData[0].data[0].time.split('-')[0];
        let endTime = this.tableFieldData[0].data[this.tableFieldData[0].data.length - 1].time.split('-')[1];
        let total_count = this.tableFieldData[0].data.length;
        // 现在时间
        let now = moment().format('HH:mm');
        // 总分钟数-已过分钟数
        let total_mins = parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]) - (parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]));
        let past_mins = parseInt(now.split(':')[0]) * 60 + parseInt(now.split(':')[1]) - (parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]));
        // 计算高度
        // 1320 / 40 * 22 = 1173 / x
        let line_top = (total_count * SINGAL_CELL_HEIGHT * past_mins / total_mins).toFixed(2);
        this.$refs['line'].style.top = `${130 + parseFloat(line_top)}px`;
        this.$refs['line'].style.borderTop = '1px solid red';
      }
    },
    /**
     * 根据状态判断是否可以点击
     * 0-空
     * 2-已经预定
     * 88-上课
     */
    handleCellClick(event, itemIn) {
      if (parseInt(itemIn.status)) {
        event.preventDefault();
        return;
      }
      event.target.classList.toggle('active');
      this.isActive = !this.isActive;
    },
  }
};
</script>
<style lang="scss">
  $border: 1px solid #fff;
  #BookField {
    width: 1000px;
    position: relative;
    .signs {
      width: 100%;
      height: 50px;
      // background: #187;
      padding: 0 0 1em 1em;
    }
    .container {
      border: $border;
      display: inline-block;
      width: 100px;
      color: #fff;
      .title {
        height: 80px;
        background: $g_default_color;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        line-height: 80px;
      }
      .content {
        height: 40px;
        width: (100px - 2px);
        border-top: $border;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        // background: lightblue;
        &:hover {
          cursor: pointer;
          background: #ff6600;
        }
        .ivu-tooltip { // tooltip和单元格大小相等
          width: inherit;
          height: inherit;
          div > p {
            white-space: normal;
          }
        }
      }
    }
    .line {
      border-top: 1px solid #fff;
      position: absolute;
      top: 130px;
      width: 100%;
    }
    .ivu-table .demo-table-info-cell-name {
      background-color: #2db7f5;
      color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
      background-color: #ff6600;
      color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
      background-color: #187;
      color: #fff;
    }
  }
  .active {
    background: #ff6600;
  }
</style>
