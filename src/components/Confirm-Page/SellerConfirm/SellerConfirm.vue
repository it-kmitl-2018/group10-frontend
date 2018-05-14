<template>
  <div class="sellerconfirm">
    <h2>ผู้ขาย</h2>
    <information :informationConfirm='sellerConfirm.information'></information>
    <postal-address :postalAddressConfirm='sellerConfirm.postalAddress'></postal-address>
  </div>
</template>

<script>
import Information from '@/components/Confirm-Page/SellerForm/components/Information.vue'
import PostalAddress from '@/components/Confirm-Page/SellerForm/components/PostalAddress.vue'

export default {
  name: 'sellerConfirm',
  props: ['sellerConfirm'],
  components: {
    Information,
    PostalAddress
  }
}
</script>

<style>

</style>
