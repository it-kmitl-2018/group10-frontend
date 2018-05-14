<template>
  <div>
    <label>รหัสผู้รับชำระเงิน : </label><input type="text" v-model="payeeTradePartyProp.id" /><br>
    <label>รหัสสากล (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyProp.globalID"/><br>
    <label>ชื่อผู้รับชำระเงิน : </label><input type="text" v-model="payeeTradePartyProp.name"/><br>
  </div>
</template>
<script>
export default {
  props: ['payeeTradePartyProp']
}
</script>
