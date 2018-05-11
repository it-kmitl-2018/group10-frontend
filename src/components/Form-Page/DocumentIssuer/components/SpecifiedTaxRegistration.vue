<template>
  <div>
    เลขประจำตัวผู้เสียภาษีอากร : <input v-model="documentIssuerFormProp.taxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentIssuerFormProp']
}
</script>
