<template>
    <div id="gymDetails">
        details {{$route.params}}
      <Tabs value="ticket">
        <TabPane label="购票" name="ticket">
          <div slot="ticket"></div>
        </TabPane>
        <TabPane label="购卡" name="card">
          <div slot="card"></div>
        </TabPane>
        <TabPane label="场地预定" name="field">
          <div slot="field"></div>
        </TabPane>
      </Tabs>
    </div >
</template>
<script>
export default {
  name: 'GymDetails',
  created() {
    console.log(this.$route);
    console.log(this);
  },
};
</script>
<style lang="scss">
  #gymDetails {
    width: 60%;
    margin: auto;
  }
</style>
