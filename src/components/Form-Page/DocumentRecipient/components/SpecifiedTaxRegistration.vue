<template>
  <div>
    เลขประจำตัวผู้เสียภาษีอากร : <input v-model="documentRecipientFormProp.taxID"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentRecipientFormProp']
}
</script>
