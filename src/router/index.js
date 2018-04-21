import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TaxInvoice from '@/TaxInvoice'
import TaxConfirm from '@/TaxConfirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/taxinvoice',
      name: 'TaxInvoice',
      component: TaxInvoice
    },
    {
      path: '/taxconfirm',
      name: 'TaxConfirm',
      component: TaxConfirm
    }
  ]
})
