import Vue from 'vue'
import Router from 'vue-router'
import ElectronicReceiptForm from '@/components/ElectronicReceiptForm'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/ElectronicReceiptForm',
      name: 'ElectronicReceiptForm',
      component: ElectronicReceiptForm
    }
  ]
})
