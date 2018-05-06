<template>
  <div class="ElectronicReceiptForm">
    <br>
    <h1>ใบเสร็จอิเล็กทรอนิกส์</h1>
    <PayeeTradePartyForm></PayeeTradePartyForm>
  </div>
</template>
<script>
import PayeeTradePartyForm from '@/components/Form-Page/PayeeTradePartyForm'
export default {
  data () {
    return {

    }
  },
  components: {
    PayeeTradePartyForm,
    PayerTradePartyForm
  },
  methods: {

  }
}
</script>
