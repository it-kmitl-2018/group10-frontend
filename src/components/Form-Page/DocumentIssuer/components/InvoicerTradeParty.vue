<template>
  <div>
    รหัสผู้แทนออกเอกสาร : <input v-model="invoiceTradePartyProp.id"/><br>
    รหัสสากล : <input v-model="invoiceTradePartyProp.globalID"/><br>
    ชื่อผู้ออกเอกสารแทน : <input v-model="invoiceTradePartyProp.name"/><br>
  </div>
</template>
<script>
export default {
  props: ['invoiceTradePartyProp']
}
</script>
