<template>
   <div class="ETaxInvoiceForm">
      <br>
      <h1>ใบเสร็จอิเล็กทรอนิกส์</h1>
      <div>
          <!-- <div>
            <SellerForm :sellerFormProp="seller"></SellerForm>
          </div> -->
          <!-- <div>
            <RecipientForm :recipientFormProp="recipient"></RecipientForm>
          </div> -->
          <div>
            <TaxInvoiceForm :taxInvoiceFormProp="taxInvoice"></TaxInvoiceForm>
          </div>
          <div>
            <DocumentRecipientForm :documentRecipientFormProp="documentRecipient"></DocumentRecipientForm>
          </div>
          <!-- <div>
            <PayeeForm :payeeFormProp="payee"></PayeeForm>
          </div> -->
      </div>
      <router-link :to="{name: 'ERecieptConfirm'}">
        <b-button variant="success">ยืนยัน</b-button>
      </router-link>
   </div>
</template>
<script>

// import RecipientForm from '@/components/Form-Page/Recipient/RecipientForm.vue'
// import RecipientData from '@/Data/Recipient.data.js'
import TaxInvoiceForm from '@/components/Form-Page/TaxInvoice/TaxInvoiceForm.vue'
import TaxInvoiceData from '@/Data/TaxInvoice.data.js'
import DocumentRecipientForm from '@/components/Form-Page/DocumentRecipient/DocumentRecipientForm.vue'
import DocumentRecipientData from '@/Data/DocumentRecipient.data.js'
// import SellerForm from '@/components/Form_Page/SellerForm/SellerForm.vue'
// import SellerData from '@/Data/Seller.data.js'
// import PayeeForm from '@/components/form_pages/PayeeForm.vue'
// import PayeeData from '@/Data/Payee.data.js'
export default {
  data () {
    return {
      // recipient: RecipientData.data,
      taxInvoice: TaxInvoiceData.data,
      documentRecipient: DocumentRecipientData.data
      // seller: SellerData.data,
      // payee: PayeeData.data
    }
  },
  components: {
    // RecipientForm,
    TaxInvoiceForm,
    DocumentRecipientForm
    // SellerForm,
    // PayeeForm
  }
}
</script>
