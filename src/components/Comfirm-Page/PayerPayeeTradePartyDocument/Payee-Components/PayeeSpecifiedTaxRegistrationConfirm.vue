<template>
  <div>
      <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeSpecifiedTaxRegistrationProp.TaxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['confirmPayeeSpecifiedTaxRegistrationProp']
}
</script>
