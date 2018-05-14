<template>
  <div class="sellerform">
    <h2>ผู้ขาย</h2>
    <information :information='sellerForm.information'></information>
    <postal-address :postalAddress='sellerForm.postalAddress'></postal-address>
  </div>
</template>

<script>
import Information from '@/components/Form-Page/SellerForm/components/Information.vue'
import PostalAddress from '@/components/Form-Page/SellerForm/components/PostalAddress.vue'

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
