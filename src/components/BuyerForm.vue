<template>
  <div class="buyerform">
    <h2>ผู้ซื้อ</h2>
    <label>รหัสผู้ค้า (ผู้ซื้อ) : </label><input type="text" v-model="buyer.id"/><br>
    <label>รหัสผู้ค้าสากล (ผู้ซื้อ) : </label><input type="text" v-model="buyer.globalID"/><br>
    <label>ชื่อผู้ซื้อ : </label><input type="text" v-model="buyer.name"/><br>
    <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ซื้อ) : </label><input type="text" v-model="buyer.taxID"/><br>
    <label>รหัสสาขา (ผู้ซื้อ) : </label><input type="text" v-model="buyer.branchNo"/><br>
    <label>อีเมล (ผู้ซื้อ) : </label><input type="text" v-model="buyer.email"/><br>
    <label>ชื่ออาคาร (ผู้ซื้อ) : </label><input type="text" v-model="buyer.buildingName"/><br>
    <label>บ้านเลขที่ (ผู้ซื้อ) : </label><input type="text" v-model="buyer.buildingNo"/><br>
    <label>ซอย (ผู้ซื้อ) : </label><input type="text" v-model="buyer.lineThree"/><br>
    <label>หมู่บ้าน (ผู้ซื้อ) : </label><input type="text" v-model="buyer.village"/><br>
    <label>หมู่ที่ (ผู้ซื้อ) : </label><input type="text" v-model="buyer.villageNo"/><br>
    <label>ถนน (ผู้ซื้อ) : </label><input type="text" v-model="buyer.street"/><br>
    <label>ตำบล (ผู้ซื้อ) : </label><input type="text" v-model="buyer.subDistrict"/><br>
    <label>อำเภอ (ผู้ซื้อ) : </label><input type="text" v-model="buyer.district"/><br>
    <label>จังหวัด (ผู้ซื้อ) : </label><input type="text" v-model="buyer.subCountry"/><br>
    <label>ประเทศ (ผู้ซื้อ) : </label><input type="text" v-model="buyer.country"/><br>
    <label>รหัสไปรษณีย์ (ผู้ซื้อ) : </label><input type="text" v-model="buyer.postcode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ซื้อ) : </label><input type="text" v-model="buyer.addrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ซื้อ) : </label><input type="text" v-model="buyer.addrLineTwo"/><br>
  </div>
</template>

<script>
export default {
  name: 'buyerform',
  data () {
    return {
      buyer: {
        id: '',
        globalID: '',
        name: '',
        taxID: '',
        branchNo: '',
        email: '',
        buildingName: '',
        buildingNo: '',
        lineThree: '',
        alley: '',
        village: '',
        villageNo: '',
        street: '',
        subDistrict: '',
        district: '',
        subCountry: '',
        country: '',
        postcode: '',
        addrLineOne: '',
        addrLineTwo: ''
      }
    }
  }
}
</script>

<style>

</style>
