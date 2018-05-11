<template>
  <div>
    ชื่อผู้ติดต่อ: <input v-model="documentIssuerFormProp.personName"/><br>
    ชื่อแผนก: <input v-model="documentIssuerFormProp.departmentName"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentRecipientFormProp']
}
</script>
