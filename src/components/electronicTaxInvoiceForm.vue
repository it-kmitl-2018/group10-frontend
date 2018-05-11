<template>
  <div class="ElectronicTaxInvoiceForm">
    <br>
    <h1>ใบเสร็จอิเล็กทรอนิกส์</h1>
    <div>
      <div>
        <PayerTradePartyForm :PayerTradePartyFormProp="payer"></PayerTradePartyForm>
      </div>
      <div>
        <PayeeTradePartyForm :PayeeTradePartyFormProp="payee"></PayeeTradePartyForm>
      </div>
    </div>
    <button @click="sendData()">ส่งข้อมูล</button>
  </div>
</template>
<script>
import PayeeTradePartyForm from '@/components/Form-Page/PayeeTradePartyForm'
import PayerTradePartyForm from '@/components/Form-Page/PayerTradePartyForm'
import PayeeTradePartyData from '@/Data/PayeeTradeParty.data.js'
import PayerTradePartyData from '@/Data/PayerTradeParty.data.js'
import {AXIOS} from '@/http-commons.js'
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
          console.log(response.data)
        }).catch(e => {
          this.error.push(e)
        })
    }
  }
}
</script>
