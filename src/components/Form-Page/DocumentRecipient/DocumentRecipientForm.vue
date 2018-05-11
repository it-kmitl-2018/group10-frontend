<template>
  <div>
    <h2>ผู้รับเอกสาร</h2>
    <invoicee-trade-party :invoiceeTradePartyProp="documentRecipient.invoiceeTradeParty"></invoicee-trade-party>
    <specified-tax-registration :specifiedTaxRegistrationProp="documentRecipient.specifiedTaxRegistration"></specified-tax-registration>
    <email-and-phone :emailAndPhoneProp="documentRecipient.emailAndPhone"></email-and-phone>
    <postal-trade-address :postalTradeAddressProp="documentRecipient.postalTradeAddress"></postal-trade-address>
  </div>
</template>

<script>
import InvoiceeTradeParty from '@/components/Form-Page/DocumentRecipient/components/InvoiceeTradeParty.vue'
import SpecifiedTaxRegistration from '@/components/Form-Page/DocumentRecipient/components/SpecifiedTaxRegistration.vue'
import EmailAndPhone from '@/components/Form-Page/DocumentRecipient/components/EmailAndPhone.vue'
import PostalTradeAddress from '@/components/Form-Page/DocumentRecipient/components/PostalTradeAddress.vue'
import DocumentRecipientData from '@/Data/DocumentRecipient.data.js'
export default {
  data () {
    return {
      documentRecipient: DocumentRecipientData.data
    }
  },
  components: {
    InvoiceeTradeParty,
    SpecifiedTaxRegistration,
    EmailAndPhone,
    PostalTradeAddress
  },
  props: ['documentRecipientFormProp']
}
</script>
