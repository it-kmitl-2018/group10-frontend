<template>
  <div>
    ประเภทภาษี : <input v-model="applicableTradeTaxProp.typeCode"/><br>
    อัตราภาษี : <input v-model="applicableTradeTaxProp.calculatedRate"/><br>
    มูลค่าสินค้า/บริการที่นำมาคิดภาษี : <input v-model="applicableTradeTaxProp.basisAmount"/><br>
    มูลค่าภาษี : <input v-model="applicableTradeTaxProp.calculatedAmount"/><br>
  </div>
</template>

<script>
export default {
  props: ['applicableTradeTaxProp']
}
</script>
