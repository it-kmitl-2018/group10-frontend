<template>
  <div>
      <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ชำระเงิน) : </label><input type="text" v-model="payerSpecifiedTaxRegistrationProp.taxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['payerSpecifiedTaxRegistrationProp']
}
</script>
