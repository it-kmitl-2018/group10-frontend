<template>
  <div>
    <div>
      <div style="display:inline-block;margin:2%">
        <recipient-form :recipientProp="recipient"></recipient-form>
      </div>
      <div style="display:inline-block;margin:2%">
        <tax-invoice-form :taxInvoiceFormProp="taxInvoice"></tax-invoice-form>
      </div>
      <div style="display:inline-block;margin:2%">
        <document-recipient-form :documentRecipientFormProp="documentRecipient"></document-recipient-form>
      </div>
    </div>
    <router-link :to="{ name: 'ERecieptConfirm'}">
      <button>ยืนยัน</button>
    </router-link>
  </div>
</template>
<script>
import RecipientForm from '@/components/Form-Page/Recipient/RecipientForm.vue'
import RecipientData from '@/Data/Recipient.data.js'
import TaxInvoiceForm from '@/components/Form-Page/TaxInvoice/TaxInvoiceForm.vue'
import TaxInvoiceData from '@/Data/TaxInvoice.data.js'
import DocumentRecipientForm from '@/components/Form-Page/DocumentRecipient/DocumentRecipientForm.vue'
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
    RecipientForm,
    TaxInvoiceForm,
    DocumentRecipientForm
  },
  props: ['documentRecipientProp']
}
</script>
