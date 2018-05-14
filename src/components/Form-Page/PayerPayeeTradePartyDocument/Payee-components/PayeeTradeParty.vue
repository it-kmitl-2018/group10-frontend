<template>
  <div>
    <label>รหัสผู้รับชำระเงิน : </label><input type="text" v-model="PayeeTradePartyProp.id" /><br>
    <label>รหัสสากล (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyProp.GlobalID"/><br>
    <label>ชื่อผู้รับชำระเงิน : </label><input type="text" v-model="PayeeTradePartyProp.Name"/><br>
  </div>
</template>
<script>
export default {
  props: ['PayeeTradePartyProp']
}
</script>
