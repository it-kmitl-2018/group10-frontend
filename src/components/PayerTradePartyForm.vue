<template>
<div class="payertradepartyform">
  <h2>ผู้ชำระเงิน</h2>
  <label>รหัสผู้ชำระเงิน : </label><input type="text" /><br>
  <label>รหัสสากล (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>ชื่อผู้ชำระเงิน : </label><input type="text" /><br>
  <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>อีเมล (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>ชื่ออาคาร (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>บ้านเลขที่ (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>ซอย (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>หมู่บ้าน (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>หมู่ที่ (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>ถนน (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>ตำบล (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>อำเภอ (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>จังหวัด (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>รหัสประเทศ (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>รหัสไปรษณีย์ (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>ที่อยู่บรรทัดที่ 1 (ผู้ชำระเงิน) : </label><input type="text" /><br>
  <label>ที่อยู่บรรทัดที่ 2 (ผู้ชำระเงิน) : </label><input type="text" /><br>
</div>
</template>
<script>
export default{
  name: 'payertradepartyform',
  data () {
    return {
      payertradeparty: {
        id: '',
        payerGlobalID: '',
        name: '',
        taxID: '',
        email: '',
        buildingName: '',
        buildingNo: '',
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
