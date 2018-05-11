<template>
  <div>
    รหัสไปรษณีย์: <input v-model="documentIssuerFormProp.postalCode"/><br>
    ชื่ออาคาร: <input v-model="documentIssuerFormProp.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="documentIssuerFormProp.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="documentIssuerFormProp.addressLineTwo"/><br>
    ซอย: <input v-model="documentIssuerFormProp.addressLineThree"/><br>
    หมู่บ้าน: <input v-model="documentIssuerFormProp.addressLineFour"/><br>
    หมู่ที่: <input v-model="documentIssuerFormProp.addressLineFive"/><br>
    ถนน: <input v-model="documentIssuerFormProp.street"/><br>
    ชื่ออำเภอ: <input v-model="documentIssuerFormProp.district"/><br>
    ชื่อตำบล: <input v-model="documentIssuerFormProp.subDistrict"/><br>
    รหัสประเทศ: <input v-model="documentIssuerFormProp.countryID"/><br>
    รหัสจังหวัด: <input v-model="documentIssuerFormProp.provinceID"/><br>
    บ้านเลขที่: <input v-model="documentIssuerFormProp.houseNumber"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentIssuerFormProp']
}
</script>
