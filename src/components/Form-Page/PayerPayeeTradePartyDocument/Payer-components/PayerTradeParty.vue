<template>
  <div>
    <label>รหัสผู้ชำระเงิน : </label><input type="text" v-model="PayerTradePartyProp.id"/><br>
    <label>รหัสสากล (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyProp.GlobalID"/><br>
    <label>ชื่อผู้ชำระเงิน : </label><input type="text" v-model="PayerTradePartyProp.Name"/><br>
  </div>
</template>
<script>
export default {
  props: ['PayerTradePartyProp']
}
</script>
