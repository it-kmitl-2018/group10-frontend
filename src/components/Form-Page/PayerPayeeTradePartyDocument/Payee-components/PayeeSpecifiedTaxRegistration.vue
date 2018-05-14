<template>
  <div>
      <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeSpecifiedTaxRegistrationProp.TaxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['PayeeSpecifiedTaxRegistrationProp']
}
</script>
