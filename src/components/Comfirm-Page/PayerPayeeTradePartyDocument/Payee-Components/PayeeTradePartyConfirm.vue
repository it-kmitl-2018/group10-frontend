<template>
  <div>
    <label>รหัสผู้รับชำระเงิน : </label><input type="text" v-model="confirmPayeeTradePartyProp.id" /><br>
    <label>รหัสสากล (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyProp.GlobalID"/><br>
    <label>ชื่อผู้รับชำระเงิน : </label><input type="text" v-model="confirmPayeeTradePartyProp.Name"/><br>
  </div>
</template>
<script>
export default {
  props: ['confirmPayeeTradePartyProp']
}
</script>
