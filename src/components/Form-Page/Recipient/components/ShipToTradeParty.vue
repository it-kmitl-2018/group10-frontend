<template>
  <div>
    รหัสผู้รับ : <input v-model="shipToTradePartyProp.id"/><br>
    รหัสสากล : <input v-model="shipToTradePartyProp.globalID"/><br>
    ชื่อผู้รับ : <input v-model="shipToTradePartyProp.name"/><br>
  </div>
</template>
<script>
export default {
  props: ['shipToTradePartyProp']
}
</script>
