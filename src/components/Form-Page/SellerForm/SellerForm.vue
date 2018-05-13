<template>
  <div class="sellerform">
    <h2>ผู้ขาย</h2>
    <label>รหัสผู้ค้า (ผู้ขาย) : </label><input type="text" v-model="sellerform.id"/><br>
    <label>รหัสผู้ค้าสากล (ผู้ขาย) : </label><input type="text" v-model="sellerform.globalID"/><br>
    <label>ชื่อผู้ขาย : </label><input type="text" v-model="sellerform.name"/><br>
    <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ขาย) : </label><input type="text" v-model="sellerform.taxID"/><br>
    <label>อีเมล (ผู้ขาย) : </label><input type="text" v-model="sellerform.email"/><br>
    <label>ชื่ออาคาร (ผู้ขาย) : </label><input type="text" v-model="sellerform.buildingName"/><br>
    <label>บ้านเลขที่ (ผู้ขาย) : </label><input type="text" v-model="sellerform.buildingNo"/><br>
    <label>ซอย (ผู้ขาย) : </label><input type="text" v-model="sellerform.alley"/><br>
    <label>หมู่บ้าน (ผู้ขาย) : </label><input type="text" v-model="sellerform.village"/><br>
    <label>หมู่ที่ (ผู้ขาย) : </label><input type="text" v-model="sellerform.villageNo"/><br>
    <label>ถนน (ผู้ขาย) : </label><input type="text" v-model="sellerform.street"/><br>
    <label>ตำบล (ผู้ขาย) : </label><input type="text" v-model="sellerform.subDistrict"/><br>
    <label>อำเภอ (ผู้ขาย) : </label><input type="text" v-model="sellerform.district"/><br>
    <label>จังหวัด (ผู้ขาย) : </label><input type="text" v-model="sellerform.subCountry"/><br>
    <label>ประเทศ (ผู้ขาย) : </label><input type="text" v-model="sellerform.country"/><br>
    <label>รหัสไปรษณีย์ (ผู้ขาย) : </label><input type="text" v-model="sellerform.postCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ขาย) : </label><input type="text" v-model="sellerform.addrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ขาย) : </label><input type="text" v-model="sellerform.addrLineTwo"/><br>
  </div>
</template>

<script>
export default {
  name: 'sellerform',
  props: ['sellerform']
}
</script>

<style>

</style>
