<template>
  <div>
    <label>ชื่ออาคาร (ผู้ขาย) : </label><input type="text" v-model="postalAddress.buildingName"/><br>
    <label>บ้านเลขที่ (ผู้ขาย) : </label><input type="text" v-model="postalAddress.buildingNo"/><br>
    <label>ซอย (ผู้ขาย) : </label><input type="text" v-model="postalAddress.alley"/><br>
    <label>หมู่บ้าน (ผู้ขาย) : </label><input type="text" v-model="postalAddress.village"/><br>
    <label>หมู่ที่ (ผู้ขาย) : </label><input type="text" v-model="postalAddress.villageNo"/><br>
    <label>ถนน (ผู้ขาย) : </label><input type="text" v-model="postalAddress.street"/><br>
    <label>ตำบล (ผู้ขาย) : </label><input type="text" v-model="postalAddress.subDistrict"/><br>
    <label>อำเภอ (ผู้ขาย) : </label><input type="text" v-model="postalAddress.district"/><br>
    <label>จังหวัด (ผู้ขาย) : </label><input type="text" v-model="postalAddress.subCountry"/><br>
    <label>ประเทศ (ผู้ขาย) : </label><input type="text" v-model="postalAddress.country"/><br>
    <label>รหัสไปรษณีย์ (ผู้ขาย) : </label><input type="text" v-model="postalAddress.postCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ขาย) : </label><input type="text" v-model="postalAddress.addrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ขาย) : </label><input type="text" v-model="postalAddress.addrLineTwo"/><br>
  </div>
</template>

<script>
export default {
  props: ['postalAddress']
}
</script>

<style>

</style>
