<template>
  <div>
    <label>รหัสผู้ชำระเงิน : </label><input type="text" v-model="payerTradePartyProp.id"/><br>
    <label>รหัสสากล (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyProp.globalID"/><br>
    <label>ชื่อผู้ชำระเงิน : </label><input type="text" v-model="payerTradePartyProp.name"/><br>
  </div>
</template>
<script>
export default {
  props: ['payerTradePartyProp']
}
</script>
