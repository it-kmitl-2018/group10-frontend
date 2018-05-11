<template>
  <div>
    รหัสไปรษณีย์: <input v-model="documentRecipientFormProp.postalCode"/><br>
    ชื่ออาคาร: <input v-model="documentRecipientFormProp.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="documentRecipientFormProp.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="documentRecipientFormProp.addressLineTwo"/><br>
    ซอย: <input v-model="documentRecipientFormProp.addressLineThree"/><br>
    หมู่บ้าน: <input v-model="documentRecipientFormProp.addressLineFour"/><br>
    หมู่ที่: <input v-model="documentRecipientFormProp.addressLineFive"/><br>
    ถนน: <input v-model="documentRecipientFormProp.street"/><br>
    ชื่ออำเภอ: <input v-model="documentRecipientFormProp.district"/><br>
    ชื่อตำบล: <input v-model="documentRecipientFormProp.subDistrict"/><br>
    รหัสประเทศ: <input v-model="documentRecipientFormProp.countryID"/><br>
    รหัสจังหวัด: <input v-model="documentRecipientFormProp.provinceID"/><br>
    บ้านเลขที่: <input v-model="documentRecipientFormProp.houseNumber"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentRecipientFormProp']
}
</script>
