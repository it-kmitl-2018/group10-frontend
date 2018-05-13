<template>
  <div>
    <label>ชื่ออาคาร (ผู้ขาย) : </label><input type="text" v-model="address.buildingName"/><br>
    <label>บ้านเลขที่ (ผู้ขาย) : </label><input type="text" v-model="address.buildingNo"/><br>
    <label>ซอย (ผู้ขาย) : </label><input type="text" v-model="address.alley"/><br>
    <label>หมู่บ้าน (ผู้ขาย) : </label><input type="text" v-model="address.village"/><br>
    <label>หมู่ที่ (ผู้ขาย) : </label><input type="text" v-model="address.villageNo"/><br>
    <label>ถนน (ผู้ขาย) : </label><input type="text" v-model="address.street"/><br>
    <label>ตำบล (ผู้ขาย) : </label><input type="text" v-model="address.subDistrict"/><br>
    <label>อำเภอ (ผู้ขาย) : </label><input type="text" v-model="address.district"/><br>
    <label>จังหวัด (ผู้ขาย) : </label><input type="text" v-model="address.subCountry"/><br>
    <label>ประเทศ (ผู้ขาย) : </label><input type="text" v-model="address.country"/><br>
    <label>รหัสไปรษณีย์ (ผู้ขาย) : </label><input type="text" v-model="address.postCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ขาย) : </label><input type="text" v-model="address.addrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ขาย) : </label><input type="text" v-model="address.addrLineTwo"/><br>
  </div>
</template>

<script>
export default {
  props: ['address']
}
</script>

<style>

</style>
