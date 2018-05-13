<template>
  <div>
      <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerSpecifiedTaxRegistrationProp.payerTaxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['PayerSpecifiedTaxRegistrationProp']
}
</script>
