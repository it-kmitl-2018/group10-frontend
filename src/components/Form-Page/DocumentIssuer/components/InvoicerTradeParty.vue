<template>
  <div>
    รหัสผู้ค้า(ผู้ออกเอกสารแทน) : <input v-model="documentIssuerFormProp.id"/><br>
    รหัสผู้ค้าสากล(ผู้ออกเอกสารแทน) : <input v-model="documentIssuerFormProp.globalID"/><br>
    ชื่อผู้ขาย : <input v-model="documentIssuerFormProp.name"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentIssuerFormProp']
}
</script>
