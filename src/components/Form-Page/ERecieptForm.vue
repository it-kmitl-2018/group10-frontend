<template>
  <div>
    <div>
      <div style="display:inline-block;margin:2%">
        <seller-form :sellerForm="seller"></seller-form>
      </div>
      <div style="display:inline-block;margin:2%">
        <recipient-form :recipientProp="recipient"></recipient-form>
      </div>
      <div style="display:inline-block;margin:2%">
        <tax-invoice-form :taxInvoiceFormProp="taxInvoice"></tax-invoice-form>
      </div>
      <div style="display:inline-block;margin:2%">
        <document-recipient-form :documentRecipientFormProp="documentRecipient"></document-recipient-form>
      </div>
      <div style="display:inline-block;margin:2%">
        <payee-form :PayeeProps="payee"></payee-form>
      </div>
    </div>
    <router-link :to="{ name: 'ERecieptConfirm'}">
      <button>ยืนยัน</button>
    </router-link>
  </div>
</template>
<script>
import SellerForm from '@/components/Form-Page/SellerForm/SellerForm.vue'
import SellerData from '@/Data/Seller.data.js'
import RecipientForm from '@/components/Form-Page/Recipient/RecipientForm.vue'
import RecipientData from '@/Data/Recipient.data.js'
import TaxInvoiceForm from '@/components/Form-Page/TaxInvoice/TaxInvoiceForm.vue'
import TaxInvoiceData from '@/Data/TaxInvoice.data.js'
import DocumentRecipientForm from '@/components/Form-Page/DocumentRecipient/DocumentRecipientForm.vue'
import DocumentRecipientData from '@/Data/DocumentRecipient.data.js'
import PayeeForm from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradePartyForm.vue'
import PayeeData from '@/Data/PayerPayeeTradeParty.data.js'
export default {
  data () {
    return {
      seller: SellerData.data,
      recipient: RecipientData.data,
      taxInvoice: TaxInvoiceData.data,
      documentRecipient: DocumentRecipientData.data,
      payee: PayeeData.data
    }
  },
  components: {
    SellerForm
    RecipientForm,
    TaxInvoiceForm,
    DocumentRecipientForm,
    PayeeForm
  },
  props: ['documentRecipientProp']
}
</script>
