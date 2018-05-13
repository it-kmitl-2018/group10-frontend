<template>
  <div>
    <label>ชื่ออาคาร (ผู้ซื้อ) : </label>{{postalAddressConfirm.buildingName}}<br>
    <label>บ้านเลขที่ (ผู้ซื้อ) : </label>{{postalAddressConfirm.buildingNo}}<br>
    <label>ซอย (ผู้ซื้อ) : </label>{{postalAddressConfirm.alley}}<br>
    <label>หมู่บ้าน (ผู้ซื้อ) : </label>{{postalAddressConfirm.village}}<br>
    <label>หมู่ที่ (ผู้ซื้อ) : </label>{{postalAddressConfirm.villageNo}}<br>
    <label>ถนน (ผู้ซื้อ) : </label>{{postalAddressConfirm.street}}<br>
    <label>ตำบล (ผู้ซื้อ) : </label>{{postalAddressConfirm.subDistrict}}<br>
    <label>อำเภอ (ผู้ซื้อ) : </label>{{postalAddressConfirm.district}}<br>
    <label>จังหวัด (ผู้ซื้อ) : </label>{{postalAddressConfirm.subCountry}}<br>
    <label>ประเทศ (ผู้ซื้อ) : </label>{{postalAddressConfirm.country}}<br>
    <label>รหัสไปรษณีย์ (ผู้ซื้อ) : </label>{{postalAddressConfirm.postCode}}<br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ซื้อ) : </label>{{postalAddressConfirm.addrLineOne}}<br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ซื้อ) : </label>{{postalAddressConfirm.addrLineTwo}}<br>
  </div>
</template>

<script>
export default {
  props: ['postalAddressConfirm']
}
</script>

<style>

</style>
