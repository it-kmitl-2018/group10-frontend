<template>
  <div>
    รหัสเงื่อนไขการซื้อขาย: <input v-model="applicableTradeDeliveryTermsProp.deliveryTypeCode"/><br>
  </div>
</template>

<script>
export default {
  props: ['applicableTradeDeliveryTermsProp']
}
</script>
