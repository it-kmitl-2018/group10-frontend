<template>
  <div>
      <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeSpecifiedTaxRegistrationProp.TaxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['ConfirmPayeeSpecifiedTaxRegistrationProp']
}
</script>
