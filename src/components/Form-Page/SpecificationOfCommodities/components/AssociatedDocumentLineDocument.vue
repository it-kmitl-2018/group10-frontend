<template>
  <div>
    ลำดับรายการ : <input v-model="associatedDocumentLineDocumentProp.lineID"/><br>
  </div>
</template>

<script>
export default {
  props: ['associatedDocumentLineDocumentProp']
}
</script>
