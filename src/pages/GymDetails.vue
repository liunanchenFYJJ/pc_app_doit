<template>
    <div id="gymDetails">
        <!-- details {{$route.params}} -->
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
    </div >
</template>
<script>
import BookTicket from '@/components/BookTicket';
import BookCard from '@/components/BookCard';
import BookField from '@/components/BookField';
export default {
  name: 'GymDetails',
  components: { BookTicket, BookCard, BookField },
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
