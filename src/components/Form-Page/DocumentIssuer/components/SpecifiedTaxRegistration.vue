<template>
  <div>
    เลขประจำตัวผู้เสียภาษีอากร : <input v-model="specifiedTaxRegistrationProp.taxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['specifiedTaxRegistrationProp']
}
</script>
