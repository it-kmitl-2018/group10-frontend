<template>
  <div>
    <h2>ผู้รับเอกสาร</h2>
    <invoicee-trade-party :invoiceeTradePartyProp="documentRecipientFormProp.invoiceTradeParty"></invoicee-trade-party>
    <specified-tax-registration :specifiedTaxRegistrationProp="documentRecipientFormProp.specifiedTaxRegistration"></specified-tax-registration>
    <email :emailProp="documentRecipientFormProp.email"></email>
    <postal-trade-address :postalTradeAddressProp="documentRecipientFormProp.postalTradeAddress"></postal-trade-address>
  </div>
</template>

<script>
import InvoiceeTradeParty from '@/components/Form-Page/DocumentRecipient/components/InvoiceeTradeParty.vue'
import SpecifiedTaxRegistration from '@/components/Form-Page/DocumentRecipient/components/SpecifiedTaxRegistration.vue'
import Email from '@/components/Form-Page/DocumentRecipient/components/Email.vue'
import PostalTradeAddress from '@/components/Form-Page/DocumentRecipient/components/PostalTradeAddress.vue'

export default {
  components: {
    InvoiceeTradeParty,
    SpecifiedTaxRegistration,
    Email,
    PostalTradeAddress
  },
  props: ['documentRecipientFormProp']
}
</script>
