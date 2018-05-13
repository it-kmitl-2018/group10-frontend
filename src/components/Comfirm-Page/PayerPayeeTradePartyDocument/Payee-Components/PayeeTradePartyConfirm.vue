<template>
  <div>
    <label>รหัสผู้รับชำระเงิน : </label><input type="text" v-model="ConfirmPayeeTradePartyProp.id" /><br>
    <label>รหัสสากล (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyProp.GlobalID"/><br>
    <label>ชื่อผู้รับชำระเงิน : </label><input type="text" v-model="ConfirmPayeeTradePartyProp.Name"/><br>
  </div>
</template>
<script>
export default {
  props: ['ConfirmPayeeTradePartyProp']
}
</script>
