<template>
  <div class="sellerform">
    <h2>ผู้ขาย</h2>
    <information :information='sellerForm.information'></information>
    <postal-address :address='sellerForm.postalAddress'></postal-address>
  </div>
</template>

<script>
import Information from '@/components/SellerForm/components/SellerInformation.vue'
import PostalAddress from '@/components/SellerForm/components/PostalAddress.vue'

export default {
  name: 'sellerForm',
  props: ['sellerForm'],
  components: {
    Information,
    PostalAddress
  }
}
</script>

<style>

</style>
