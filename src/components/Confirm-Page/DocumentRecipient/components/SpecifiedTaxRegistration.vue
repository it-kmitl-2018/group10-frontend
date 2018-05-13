<template>
  <div>
    เลขประจำตัวผู้เสียภาษีอากร : <span>{{specifiedTaxRegistrationConfirm.taxID}}</span><br>
  </div>
</template>
<script>
export default {
  props: ['specifiedTaxRegistrationConfirm']
}
</script>
