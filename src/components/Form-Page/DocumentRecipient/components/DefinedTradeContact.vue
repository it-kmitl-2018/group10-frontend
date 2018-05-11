<template>
  <div>
    ชื่อผู้ติดต่อ: <input v-model="documentRecipientFormProp.personName"/><br>
    ชื่อแผนก: <input v-model="documentRecipientFormProp.departmentName"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentRecipientFormProp']
}
</script>
