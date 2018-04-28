import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import PayerTradePartyForm from '@/components/PayerTradePartyForm'
import PayeeTradePartyForm from '@/components/PayeeTradePartyForm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'payeetradeparty',
      component: PayeeTradePartyForm
    }
  ]
})
