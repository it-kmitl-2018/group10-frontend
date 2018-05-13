<template>
  <div class="sellerform">
    <h2>ผู้ขาย</h2>
    <information :information='seller.information'></information>
    <postal-address :address='seller.postalAddress'></postal-address>
  </div>
</template>

<script>
import Information from '@/components/SellerForm/components/SellerInformation.vue'
import PostalAddress from '@/components/SellerForm/components/PostalAddress.vue'
import SellerData from '@/Data/Seller.data.js'

export default {
  name: 'sellerform',
  props: ['sellerform'],
  components: {
    Information,
    PostalAddress
  },
  data () {
    return {
      seller: SellerData.data
    }
  }
}
</script>

<style>

</style>
