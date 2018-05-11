<template>
  <div>
    รหัสผู้รับเอกสาร : <input v-model="invoiceeTradePartyProp.id"/><br>
    รหัสสากล : <input v-model="invoiceeTradePartyProp.globalID"/><br>
    ชื่อผู้รับเอกสาร : <input v-model="invoiceeTradePartyProp.name"/><br>
  </div>
</template>
<script>
export default {
  props: ['invoiceeTradePartyProp']
}
</script>
