<template>
  <div class="ElectronicReceiptForm">
    <br>
    <h1>ใบเสร็จอิเล็กทรอนิกส์</h1>
    <PayeeTradePartyForm :PayeeTradePartyFormProp="payee"></PayeeTradePartyForm>
    <PayerTradePartyForm :PayerTradePartyFormProp="payer"></PayerTradePartyForm>
    <button @click="testjson()">check json all</button>
  </div>
</template>
<script>
import PayeeTradePartyForm from '@/components/Form-Page/PayeeTradePartyForm'
import PayerTradePartyForm from '@/components/Form-Page/PayerTradePartyForm'
import PayeeTradePartyData from '@/Data/PayeeTradeParty.data.js'
import PayerTradePartyData from '@/Data/PayerTradeParty.data.js'
import {AXIOS} from '@/Components/http-commons.js'
export default {
  data () {
    return {
      payee: PayeeTradePartyData.data,
      payer: PayerTradePartyData.data
    }
  },
  components: {
    PayeeTradePartyForm,
    PayerTradePartyForm
  },
  methods: {
    testjson () {
      alert(JSON.stringify(PayeeTradePartyData))
      var params = new URLSearchParams()
      params.append('PayeeTradePartyData', PayeeTradePartyData)
      AXIOS.post('/infopayee', params)
        .then(response => {
          console.log(response.data)
        }).catch(e => {
          this.error.push(e)
        })
    }
  }
}
</script>
