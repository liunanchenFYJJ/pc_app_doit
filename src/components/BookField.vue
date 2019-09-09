<template>
    <div id="BookField">
        BookField
    </div>
</template>
<script>
export default {
  name: 'BookField',
  created() {
    this.getFieldTableData();
  },
  methods: {
    getFieldTableData() {
      this.$axios({
        method: 'POST',
        url: 'fieldSale/listFieldSale.do',
        params: {
          fieldSaleId: '3d67c980cb9111e984598866394de9ee',
          operator_id: '2014011166',
          operator_role: 'admin',
          orgId: 'c4f67f3177d111e986f98cec4bb1848c',
          today: '2019-09-09',
          week: '星期一',
        },
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss">
  #BookField {}
</style>
