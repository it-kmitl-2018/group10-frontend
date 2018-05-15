<template>
  <div>
    รหัสผู้ค้า : <input v-model="shipToTradePartyProp.id"/><br>
    รหัสผู้ค้าสากล : <input v-model="shipToTradePartyProp.globalID"/><br>
    ชื่อผู้รับ : <input v-model="shipToTradePartyProp.name"/><br>
  </div>
</template>

<script>
export default {
  props: ['shipToTradePartyProp']
}
</script>
