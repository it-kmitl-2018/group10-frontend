<template>
<div class="payeetradepartyform">
  <h2>ผู้ชำรับระเงิน</h2>
  <label>รหัสผู้รับชำระเงิน : </label><input type="text" /><br>
  <label>รหัสสากล (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>ชื่อผู้รับชำระเงิน : </label><input type="text" /><br>
  <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>อีเมล (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>ชื่ออาคาร (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>บ้านเลขที่ (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>ซอย (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>หมู่บ้าน (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>หมู่ที่ (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>ถนน (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>ตำบล (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>อำเภอ (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>จังหวัด (ผูรับ้ชำระเงิน) : </label><input type="text" /><br>
  <label>รหัสประเทศ (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>รหัสไปรษณีย์ (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>ที่อยู่บรรทัดที่ 1 (ผู้รับชำระเงิน) : </label><input type="text" /><br>
  <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" /><br>
</div>
</template>
<script>
export default{
  name: 'payeetradepartyform',
  data () {
    return {
      payeetradeparty: {
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
        countrycode: '',
        postcode: '',
        addrLineOne: '',
        addrLineTwo: ''
      }
    }
  }
}
</script>
