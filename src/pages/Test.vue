<template>
    <div>
        <Button v-if="hasPermission('sys:role:add')" type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
    </div>
</template>
<script>
export default {
  created() {
    console.log(this);
    this.atest();
  },
  methods: {
    atest() {
      console.log(this);
    },
  },
};
</script>
