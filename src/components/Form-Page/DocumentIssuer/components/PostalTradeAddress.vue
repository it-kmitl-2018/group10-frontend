<template>
  <div>
    รหัสไปรษณีย์: <input v-model="postalTradeAddressProp.postalCode"/><br>
    ชื่ออาคาร: <input v-model="postalTradeAddressProp.building"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="postalTradeAddressProp.addressLineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="postalTradeAddressProp.addressLineTwo"/><br>
    ซอย: <input v-model="postalTradeAddressProp.addressLineThree"/><br>
    หมู่บ้าน: <input v-model="postalTradeAddressProp.addressLineFour"/><br>
    หมู่ที่: <input v-model="postalTradeAddressProp.addressLineFive"/><br>
    ถนน: <input v-model="postalTradeAddressProp.street"/><br>
    ชื่ออำเภอ: <input v-model="postalTradeAddressProp.district"/><br>
    ชื่อตำบล: <input v-model="postalTradeAddressProp.subDistrict"/><br>
    รหัสประเทศ: <input v-model="postalTradeAddressProp.countryID"/><br>
    รหัสจังหวัด: <input v-model="postalTradeAddressProp.provinceID"/><br>
    บ้านเลขที่: <input v-model="postalTradeAddressProp.houseNumber"/><br>
  </div>
</template>
<script>
export default {
  props: ['postalTradeAddressProp']
}
</script>
