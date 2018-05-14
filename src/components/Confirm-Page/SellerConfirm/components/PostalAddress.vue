<template>
  <div>
    <label>ชื่ออาคาร (ผู้ขาย) : </label>{{postalAddressConfirm.buildingName}}<br>
    <label>บ้านเลขที่ (ผู้ขาย) : </label>{{postalAddressConfirm.buildingNo}}<br>
    <label>ซอย (ผู้ขาย) : </label>{{postalAddressConfirm.alley}}<br>
    <label>หมู่บ้าน (ผู้ขาย) : </label>{{postalAddressConfirm.village}}<br>
    <label>หมู่ที่ (ผู้ขาย) : </label>{{postalAddressConfirm.villageNo}}<br>
    <label>ถนน (ผู้ขาย) : </label>{{postalAddressConfirm.street}}<br>
    <label>ตำบล (ผู้ขาย) : </label>{{postalAddressConfirm.subDistrict}}<br>
    <label>อำเภอ (ผู้ขาย) : </label>{{postalAddressConfirm.district}}<br>
    <label>จังหวัด (ผู้ขาย) : </label>{{postalAddressConfirm.subCountry}}<br>
    <label>ประเทศ (ผู้ขาย) : </label>{{postalAddressConfirm.country}}<br>
    <label>รหัสไปรษณีย์ (ผู้ขาย) : </label>{{postalAddressConfirm.postCode}}<br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ขาย) : </label>{{postalAddressConfirm.addrLineOne}}<br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ขาย) : </label>{{postalAddressConfirm.addrLineTwo}}<br>
  </div>
</template>

<script>
export default {
  props: ['postalAddressConfirm']
}
</script>

<style>

</style>
