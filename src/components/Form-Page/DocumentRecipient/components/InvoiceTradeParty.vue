<template>
  <div>
    รหัสผู้ค้า(ผู้รับเอกสาร) : <input v-model="documentRecipientFormProp.id"/><br>
    รหัสผู้ค้าสากล(ผู้รับเอกสาร) : <input v-model="documentRecipientFormProp.globalID"/><br>
    ชื่อผู้ขาย : <input v-model="documentRecipientFormProp.name"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentRecipientFormProp']
}
</script>
