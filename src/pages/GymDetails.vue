<template>
    <div id="gymDetails">
        <!-- details {{$route.params}} -->
      <div class="inner">
        <Tabs value="ticket">
          <TabPane label="购票" name="ticket">
            <book-ticket></book-ticket>
          </TabPane>
          <TabPane label="购卡" name="card">
            <book-card></book-card>
          </TabPane>
          <TabPane label="场地预定" name="field">
            <book-field></book-field>
          </TabPane>
        </Tabs>
      </div>
      <shopping-cart></shopping-cart>
    </div >
</template>
<script>
import BookTicket from '@/components/BookTicket';
import BookCard from '@/components/BookCard';
import BookField from '@/components/BookField';
import ShoppingCart from '@/components/ShoppingCart';
export default {
  name: 'GymDetails',
  components: { BookTicket, BookCard, BookField, ShoppingCart },
  created() {
    console.log(this.$route);
    console.log(this);
  },
};
</script>
<style lang="scss">
  #gymDetails {
    padding-bottom: 6em;
    background: $g_background;
    .inner {
      height: 100%;
      width: ($g_width);
      margin: auto;
      background: #fff;
    }
  }
</style>
