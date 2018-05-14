<template>
  <div class="ElectronicTaxInvoiceForm">
    <br>
    <h1>ใบเสร็จอิเล็กทรอนิกส์</h1>
    <div>
      <div style="display:inline-block;margin:2%">
        <PayeeTradePartyForm :PayeeProps="payeeTradePartyData"></PayeeTradePartyForm>
      </div>
    </div>
    <br>
    <button @click="sendData()">ส่งข้อมูล</button>
  </div>
</template>
<script>
import PayeeTradePartyForm from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradePartyForm.vue'
import payerPayeeTradePartyData from '@/Data/PayerPayeeTradeParty.data.js'
import {AXIOS} from '@/http-commons.js'
export default {
  data () {
    return {
      payeeTradePartyData: JSON.parse(JSON.stringify(payerPayeeTradePartyData.data))
    }
  },
  components: {
    PayeeTradePartyForm
  }
}
</script>
