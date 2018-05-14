<template>
  <div>
    <label>รหัสผู้ชำระเงิน : </label><input type="text" v-model="payerTradePartyProp.id"/><br>
    <label>รหัสสากล (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyProp.GlobalID"/><br>
    <label>ชื่อผู้ชำระเงิน : </label><input type="text" v-model="payerTradePartyProp.Name"/><br>
  </div>
</template>
<script>
export default {
  props: ['payerTradePartyProp']
}
</script>
