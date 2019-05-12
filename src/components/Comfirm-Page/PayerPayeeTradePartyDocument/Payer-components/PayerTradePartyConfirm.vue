<template>
  <div>
    <label>รหัสผู้ชำระเงิน : </label><input type="text" v-model="confirmPayerTradePartyProp.id"/><br>
    <label>รหัสสากล (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyProp.GlobalID"/><br>
    <label>ชื่อผู้ชำระเงิน : </label><input type="text" v-model="confirmPayerTradePartyProp.Name"/><br>
  </div>
</template>
<script>
export default {
  props: ['confirmPayerTradePartyProp']
}
</script>
