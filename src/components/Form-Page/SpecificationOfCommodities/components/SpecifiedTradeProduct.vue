<template>
  <div>
    รหัสสินค้า : <input v-model="specifiedTradeProductProp.id"/><br>
    รหัสสินค้าสากล : <input v-model="specifiedTradeProductProp.globalID"/><br>
    ชื่อสินค้า : <input v-model="specifiedTradeProductProp.name"/><br>
    รายละเอียดสินค้า : <input v-model="specifiedTradeProductProp.description"/><br>
  </div>
</template>

<script>
export default {
  props: ['specifiedTradeProductProp']
}
</script>
