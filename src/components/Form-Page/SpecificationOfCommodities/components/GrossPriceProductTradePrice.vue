<template>
  <div>
    ราคาต่อหน่วย : <input v-model="grossPriceProductTradePriceProp.chargeAmount"/><br>
  </div>
</template>

<script>
export default {
  props: ['grossPriceProductTradePriceProp']
}
</script>
