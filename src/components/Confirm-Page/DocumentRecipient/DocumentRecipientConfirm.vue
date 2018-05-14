<template>
  <div>
    <h2>ผู้รับเอกสาร</h2>
    <invoice-trade-party :invoiceTradePartyConfirm="documentRecipientConfirmProp.invoiceTradeParty"></invoice-trade-party>
    <specified-tax-registration :specifiedTaxRegistrationConfirm="documentRecipientConfirmProp.specifiedTaxRegistration"></specified-tax-registration>
    <email :emailConfirm="documentRecipientConfirmProp.email"></email>
    <postal-trade-address :postalTradeAddressConfirm="documentRecipientConfirmProp.postalTradeAddress"></postal-trade-address>
  </div>
</template>

<script>
import InvoiceTradeParty from '@/components/Confirm-Page/DocumentRecipient/components/InvoiceTradeParty.vue'
import SpecifiedTaxRegistration from '@/components/Confirm-Page/DocumentRecipient/components/SpecifiedTaxRegistration.vue'
import Email from '@/components/Confirm-Page/DocumentRecipient/components/Email.vue'
import PostalTradeAddress from '@/components/Confirm-Page/DocumentRecipient/components/PostalTradeAddress.vue'

export default {
  components: {
    InvoiceTradeParty,
    SpecifiedTaxRegistration,
    Email,
    PostalTradeAddress
  },
  props: ['documentRecipientConfirmProp']
}
</script>
