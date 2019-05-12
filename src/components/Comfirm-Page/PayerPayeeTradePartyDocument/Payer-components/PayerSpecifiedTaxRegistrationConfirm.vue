<template>
  <div>
      <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerSpecifiedTaxRegistrationProp.TaxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['confirmPayerSpecifiedTaxRegistrationProp']
}
</script>
