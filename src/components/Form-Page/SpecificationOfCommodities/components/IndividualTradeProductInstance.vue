<template>
  <div>
    ครั้งที่ผลิต : <input v-model="individualTradeProductInstanceProp.batchID"/><br>
    วันหมดอายุ : <input v-model="individualTradeProductInstanceProp.expiryDateTime"/><br>
  </div>
</template>

<script>
export default {
  props: ['individualTradeProductInstanceProp']
}
</script>
