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
            <Col :sm="4" :md="4" :lg="2">
              <div>5</div>
            </Col>
            <Col :sm="18" :md="18" :lg="22">
              <div></div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'BookTicket',
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
