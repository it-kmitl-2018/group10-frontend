<template>
  <div>
    <div style="display:inline-block;margin:2%">
      <seller-confirm :sellerConfirm="seller"></seller-confirm>
    </div>
    <div style="display:inline-block;margin:2%">
      <recipient-confirm :recipientConfirmProp="recipient"></recipient-confirm>
    </div>
    <div style="display:inline-block;margin:2%">
      <tax-invoice-confirm :taxInvoiceConfirm="taxInvoice"></tax-invoice-confirm>
    </div>
    <div style="display:inline-block;margin:2%">
      <document-recipient-confirm :documentRecipientConfirmProp="documentRecipient"></document-recipient-confirm>
    </div>
    <div style="display:inline-block;margin:2%">
      <payee-confirm :confirmPayeeProps="payee"></payee-confirm>
    </div>
  </div>
</template>
<script>
import SellerConfirm from '@/components/Confirm-Page/SellerConfirm/SellerConfirm.vue'
import SellerData from '@/Data/Seller.data.js'
import RecipientConfirm from '@/components/Confirm-Page/Recipient/RecipientConfirm.vue'
import RecipientData from '@/Data/Recipient.data.js'
import TaxInvoiceConfirm from '@/components/Confirm-Page/TaxInvoice/TaxInvoiceConfirm.vue'
import TaxInvoiceData from '@/Data/TaxInvoice.data.js'
import DocumentRecipientConfirm from '@/components/Confirm-Page/DocumentRecipient/DocumentRecipientConfirm.vue'
import DocumentRecipientData from '@/Data/DocumentRecipient.data.js'
import PayeeConfirm from '@/components/Comfirm-Page/PayerPayeeTradePartyDocument/Payee-Components/PayeeTradePartyConfirmForm.vue'
import PayeeData from '@/Data/PayerPayeeTradeParty.data.js'
export default {
  data () {
    return {
      seller: SellerData.data
      recipient: RecipientData.data,
      taxInvoice: TaxInvoiceData.data,
      documentRecipient: DocumentRecipientData.data,
      payee: PayeeData.data
    }
  },
  components: {
    SellerConfirm,
    RecipientConfirm,
    TaxInvoiceConfirm,
    DocumentRecipientConfirm,
    PayeeConfirm
  }
}
</script>
