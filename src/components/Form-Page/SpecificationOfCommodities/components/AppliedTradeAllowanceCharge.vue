<template>
  <div>
    มูลค่าส่วนลด และค่าธรรมเนียม(ต่อหน่วย) : <input v-model="appliedTradeAllowanceChargeProp.actualAmount"/><br>
    ประเภทค่าธรรมเนียม(ต่อหน่วย) : <input v-model="appliedTradeAllowanceChargeProp.reasonCode"/><br>
    เหตุผลในการคิดค่าธรรมเนียมหรือส่วนลด : <input v-model="appliedTradeAllowanceChargeProp.reason"/><br>
  </div>
</template>

<script>
export default {
  props: ['appliedTradeAllowanceChargeProp']
}
</script>
