<template>
  <div>
    <label>รหัสผู้ชำระเงิน : </label><input type="text" v-model="ConfirmPayerTradePartyProp.id"/><br>
    <label>รหัสสากล (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyProp.GlobalID"/><br>
    <label>ชื่อผู้ชำระเงิน : </label><input type="text" v-model="ConfirmPayerTradePartyProp.Name"/><br>
  </div>
</template>
<script>
export default {
  props: ['ConfirmPayerTradePartyProp']
}
</script>
