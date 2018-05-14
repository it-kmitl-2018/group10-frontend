<template>
  <div>
      <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeSpecifiedTaxRegistrationProp.taxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['payeeSpecifiedTaxRegistrationProp']
}
</script>
