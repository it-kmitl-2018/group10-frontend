<template>
  <div class="buyerform">
    <h2>ผู้ซื้อ</h2>
    <information :information='buyerForm.information'></information>
    <postal-address :postalAddress='buyerForm.postalAddress'></postal-address>
  </div>
</template>

<script>
import Information from '@/components/Form-Page/BuyerForm/components/Information.vue'
import PostalAddress from '@/components/Form-Page/BuyerForm/components/PostalAddress.vue'

export default {
  props: ['buyerForm'],
  components: {
    Information,
    PostalAddress
  }
}
</script>

<style>

</style>
