<template>
  <div class="sellerform">
    <h2>ผู้ขาย</h2>
    <information :information='sellerform.information'></information>
    <postal-address :address='sellerform.postalAddress'></postal-address>
  </div>
</template>

<script>
import Information from '@/components/SellerForm/components/SellerInformation.vue'
import PostalAddress from '@/components/SellerForm/components/PostalAddress.vue'

export default {
  name: 'sellerform',
  props: ['sellerform'],
  components: {
    Information,
    PostalAddress
  }
}
</script>

<style>

</style>
