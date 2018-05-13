<template>
  <div>
    <h2>ผู้รับ</h2>
    <invoice-trade-party :invoiceTradePartyConfirm="recipientConfirmProp.invoiceTradeParty"></invoice-trade-party>
    <specified-tax-registration :specifiedTaxRegistrationConfirm="recipientConfirmProp.specifiedTaxRegistration"></specified-tax-registration>
    <email :emailConfirm="recipientConfirmProp.email"></email>
    <postal-trade-address :postalTradeAddressConfirm="recipientConfirmProp.postalTradeAddress"></postal-trade-address>
  </div>
</template>

<script>
import InvoiceTradeParty from '@/components/Confirm-Page/Recipient/components/InvoiceTradeParty.vue'
import SpecifiedTaxRegistration from '@/components/Confirm-Page/Recipient/components/SpecifiedTaxRegistration.vue'
import Email from '@/components/Confirm-Page/Recipient/components/Email.vue'
import PostalTradeAddress from '@/components/Confirm-Page/Recipient/components/PostalTradeAddress.vue'

export default {
  components: {
    InvoiceTradeParty,
    SpecifiedTaxRegistration,
    Email,
    PostalTradeAddress
  },
  props: ['recipientConfirmProp']
}
</script>
