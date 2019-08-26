<template>
    <div>
        <Button v-if="hasPermission('sys:role:add')" type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
    </div>
</template>
<script>
import {b} from '@/utils/test';
export default {
  created() {
    b();
  },
};
</script>
