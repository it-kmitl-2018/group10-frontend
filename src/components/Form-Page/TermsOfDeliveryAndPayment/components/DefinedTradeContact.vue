<template>
  <div>
    ชื่อผู้ติดต่อ : <input v-model="definedTradeContactProp.personName"/><br>
    ชื่อแผนก : <input v-model="definedTradeContactProp.departmentName"/><br>
  </div>
</template>

<script>
export default {
  props: ['definedTradeContactProp']
}
</script>
