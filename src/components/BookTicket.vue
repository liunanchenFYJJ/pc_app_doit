<template>
    <div id="bookTicket">
      <div class="container">
        <div class="inner">
          <Row :gutter="16">
            <Col :sm="4" :md="4" :lg="2">
              <div>票类别：</div>
            </Col>
            <Col :sm="18" :md="18" :lg="22">
              <div></div>
            </Col>
          </Row>
        </div>
        <Divider />
        <div class="inner">
          <Row :gutter="16">
            <Col :sm="24" :md="24" :lg="24">
              <div>5
                <button-groups></button-groups>
              </div>
            </Col>
            <Col :sm="24" :md="14" :lg="24">
              <div>6
                <button-groups></button-groups>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
</template>
<script>
import ButtonGroups from './ButtonGroups';
export default {
  name: 'BookTicket',
  components: {
    ButtonGroups,
  },
  data() {
    return {
      // num: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
  #bookTicket {
    .container {
      .inner {
        padding: 1em;
        &:nth-child(3) {
          margin-top: 1em;
          min-height: 500px;
          // height: calc( 100% -  24em);
        }
      }
    }
  }
</style>
