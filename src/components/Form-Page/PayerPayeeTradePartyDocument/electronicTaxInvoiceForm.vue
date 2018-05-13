<template>
  <div class="ElectronicTaxInvoiceForm">
    <br>
    <h1>ใบเสร็จอิเล็กทรอนิกส์</h1>
    <div>
      <div style="display:inline-block;margin:2%">
        <PayerTradePartyForm :PayerProps="payerPayeeTradePartyData"></PayerTradePartyForm>
      </div>
      <div style="display:inline-block;margin:2%">
        <PayeeTradePartyForm :PayeeProps="payerPayeeTradePartyData"></PayeeTradePartyForm>
      </div>
    </div>
    <br>
    <button @click="sendData()">ส่งข้อมูล</button>
  </div>
</template>
<script>
import PayeeTradePartyForm from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradePartyForm.vue'
import PayerTradePartyForm from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payer-components/PayerTradePartyForm.vue'
import payerPayeeTradePartyData from '@/Data/PayerPayeeTradeParty.data.js'
import {AXIOS} from '@/http-commons.js'
export default {
  data () {
    return {
      payerPayeeTradePartyData: payerPayeeTradePartyData.data
    }
  },
  components: {
    PayeeTradePartyForm,
    PayerTradePartyForm
  },
  methods: {
    sendData () {
      console.log(JSON.stringify(PayerProps))
      AXIOS.post('/ElectronicReceipt', payerPayeeTradePartyData.data)
        .then(response => {
          console.log(response.data)
        }).catch(e => {
          this.error.push(e)
        })
    }
  }
}
</script>
