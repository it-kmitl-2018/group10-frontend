<template>
  <div class="buyerconfirm">
    <h2>ผู้ซื้อ</h2>
    <information :informationConfirm='buyerConfirm.information'></information>
    <postal-address :postalAddressConfirm='buyerConfirm.postalAddress'></postal-address>
  </div>
</template>

<script>
import Information from '@/components/Confirm-Page/ConsigneeForm/components/Information.vue'
import PostalAddress from '@/components/Confirm-Page/ConsigneeForm/components/PostalAddress.vue'

export default {
  name: 'buyerConfirm',
  props: ['buyerConfirm'],
  components: {
    Information,
    PostalAddress
  }
}
</script>

<style>

</style>
