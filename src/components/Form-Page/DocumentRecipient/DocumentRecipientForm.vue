<template>
  <div>
    <h2>ผู้รับเอกสาร</h2>
    <invoice-trade-party :documentRecipientFormProp="documentRecipient"></invoice-trade-party>
    <specified-tax-registration :documentRecipientFormProp="documentRecipient"></specified-tax-registration>
    <defined-trade-contact :documentRecipientFormProp="documentRecipient"></defined-trade-contact>
    <email-and-phone :documentRecipientFormProp="documentRecipient"></email-and-phone>
    <postal-trade-address :documentRecipientFormProp="documentRecipient"></postal-trade-address>
  </div>
</template>

<script>
import InvoiceTradeParty from '@/components/Form-Page/DocumentRecipient/components/InvoiceTradeParty.vue'
import SpecifiedTaxRegistration from '@/components/Form-Page/DocumentRecipient/components/SpecifiedTaxRegistration.vue'
import DefinedTradeContact from '@/components/Form-Page/DocumentRecipient/components/DefinedTradeContact.vue'
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
    InvoiceTradeParty,
    SpecifiedTaxRegistration,
    DefinedTradeContact,
    EmailAndPhone,
    PostalTradeAddress
  },
  props: ['documentRecipientFormProp']
}
</script>
