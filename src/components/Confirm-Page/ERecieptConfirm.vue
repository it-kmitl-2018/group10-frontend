<template>
  <div>
    <div style="display:inline-block;margin:2%">
      <recipient-confirm :recipientConfirmProp="recipient"></recipient-confirm>
    </div>
    <div style="display:inline-block;margin:2%">
      <tax-invoice-confirm :taxInvoiceConfirm="taxInvoice"></tax-invoice-confirm>
    </div>
    <div style="display:inline-block;margin:2%">
      <document-recipient-confirm :documentRecipientConfirmProp="documentRecipient"></document-recipient-confirm>
    </div>
  </div>
</template>
<script>
import RecipientConfirm from '@/components/Confirm-Page/Recipient/RecipientConfirm.vue'
import RecipientData from '@/Data/Recipient.data.js'
import TaxInvoiceConfirm from '@/components/Confirm-Page/TaxInvoice/TaxInvoiceConfirm.vue'
import TaxInvoiceData from '@/Data/TaxInvoice.data.js'
import DocumentRecipientConfirm from '@/components/Confirm-Page/DocumentRecipient/DocumentRecipientConfirm.vue'
import DocumentRecipientData from '@/Data/DocumentRecipient.data.js'
export default {
  data () {
    return {
      recipient: RecipientData.data,
      taxInvoice: TaxInvoiceData.data,
      documentRecipient: DocumentRecipientData.data
    }
  },
  components: {
    RecipientConfirm,
    TaxInvoiceConfirm,
    DocumentRecipientConfirm
  }
}
</script>
