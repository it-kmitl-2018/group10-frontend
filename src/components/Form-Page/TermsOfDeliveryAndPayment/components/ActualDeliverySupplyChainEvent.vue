<template>
  <div>
    วันเวลานัดส่งสินค้า: <input v-model="actualDeliverySupplyChainEventProp.occurrenceDateTime"/><br>
  </div>
</template>

<script>
export default {
  props: ['actualDeliverySupplyChainEventProp']
}
</script>
