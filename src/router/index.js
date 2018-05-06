import Vue from 'vue'
import Router from 'vue-router'
import ElecttronicReceiptForm from '@/components/ElectronicReceiptForm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ElecttronicReceiptForm',
      component: ElecttronicReceiptForm
    }
  ]
})
