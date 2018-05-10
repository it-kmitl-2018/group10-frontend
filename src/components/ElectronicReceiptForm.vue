<template>
  <div class="ElectronicReceiptForm">
    <br>
    <h1>ใบเสร็จอิเล็กทรอนิกส์</h1>
    <div>
      <PayeeTradePartyForm :PayeeTradePartyFormProp="payee"></PayeeTradePartyForm>
      <PayerTradePartyForm :PayerTradePartyFormProp="payer"></PayerTradePartyForm>
    </div>
    <button @click="sendData()">check json all</button>
  </div>
</template>
<script>
import PayeeTradePartyForm from '@/components/Form-Page/payeeTradePartyForm'
import PayerTradePartyForm from '@/components/Form-Page/payerTradePartyForm'
import PayeeTradePartyData from '@/Data/payeeTradeParty.data.js'
import PayerTradePartyData from '@/Data/payerTradeParty.data.js'
import {AXIOS} from '@/components/http-commons.js'
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
    sendData () {
      console.log(JSON.stringify(PayeeTradePartyData.data))
      AXIOS.post('/ElectronicReceipt', [PayeeTradePartyData.data, PayerTradePartyData.data])
        .then(response => {

        }).catch(e => {
          this.error.push(e)
        })
    }
  }
}
</script>
