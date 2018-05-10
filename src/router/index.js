import Vue from 'vue'
import Router from 'vue-router'
import ElectronicTaxInvoiceForm from '@/components/electronicTaxInvoiceForm'
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
