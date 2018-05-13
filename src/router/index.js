import Vue from 'vue'
import Router from 'vue-router'
import ElectronicTaxInvoiceForm from '@/components/Form-Page/PayerPayeeTradePartyDocument/electronicTaxInvoiceForm.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/ElectronicTaxInvoiceForm',
      name: 'ElectronicTaxInvoiceForm',
      component: ElectronicTaxInvoiceForm
    }
  ]
})
