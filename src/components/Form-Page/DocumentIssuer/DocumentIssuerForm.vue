<template>
  <div>
    <h2>ผู้ออกเอกสารแทน</h2>
    <invoicer-trade-party :invoiceTradePartyProp="DocumentIssuerFormProp.invoiceTradeParty"></invoicer-trade-party>
    <specified-tax-registration :specifiedTaxRegistrationProp="DocumentIssuerFormProp.specifiedTaxRegistration"></specified-tax-registration>
    <email :emailProp="DocumentIssuerFormProp.email"></email>
    <postal-trade-address :postalTradeAddressProp="DocumentIssuerFormProp.postalTradeAddress"></postal-trade-address>
  </div>
</template>

<script>
import InvoicerTradeParty from '@/components/Form-Page/DocumentIssuer/components/InvoicerTradeParty.vue'
import SpecifiedTaxRegistration from '@/components/Form-Page/DocumentIssuer/components/SpecifiedTaxRegistration.vue'
import Email from '@/components/Form-Page/DocumentIssuer/components/Email.vue'
import PostalTradeAddress from '@/components/Form-Page/DocumentIssuer/components/PostalTradeAddress.vue'

export default {
  components: {
    InvoicerTradeParty,
    SpecifiedTaxRegistration,
    Email,
    PostalTradeAddress
  },
  props: ['DocumentIssuerFormProp']
}
</script>
