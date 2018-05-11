<template>
  <div>
    <h2>ผู้ออกเอกสารแทน</h2>
    <invoicer-trade-party :invoiceTradePartyProp="DocumentIssuer.invoicerTradeParty"></invoicer-trade-party>
    <specified-tax-registration :specifiedTaxRegistrationProp="DocumentIssuer.specifiedTaxRegistration"></specified-tax-registration>
    <email-and-phone :emailAndPhoneProp="DocumentIssuer.emailAndPhone"></email-and-phone>
    <postal-trade-address :postalTradeAddressProp="DocumentIssuer.postalTradeAddress"></postal-trade-address>
  </div>
</template>

<script>
import InvoicerTradeParty from '@/components/Form-Page/DocumentIssuer/components/InvoicerTradeParty.vue'
import SpecifiedTaxRegistration from '@/components/Form-Page/DocumentIssuer/components/SpecifiedTaxRegistration.vue'
import EmailAndPhone from '@/components/Form-Page/DocumentIssuer/components/EmailAndPhone.vue'
import PostalTradeAddress from '@/components/Form-Page/DocumentIssuer/components/PostalTradeAddress.vue'
import DocumentIssuerData from '@/Data/DocumentIssuer.data.js'
export default {
  data () {
    return {
      DocumentIssuer: DocumentIssuerData.data
    }
  },
  components: {
    InvoicerTradeParty,
    SpecifiedTaxRegistration,
    EmailAndPhone,
    PostalTradeAddress
  },
  props: ['DocumentIssuerFormProp']
}
</script>
