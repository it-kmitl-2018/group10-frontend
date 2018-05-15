<template>
  <div>
    ชื่ออาคาร: <input v-model="postalTradeAddressProp.buildingName"/><br>
    บ้านเลขที่: <input v-model="postalTradeAddressProp.houseNumber"/><br>
    ซอย: <input v-model="postalTradeAddressProp.lineThree"/><br>
    หมู่บ้าน: <input v-model="postalTradeAddressProp.lineFour"/><br>
    หมู่ที่: <input v-model="postalTradeAddressProp.lineFive"/><br>
    ถนน: <input v-model="postalTradeAddressProp.streetName"/><br>
    ชื่อตำบล: <input v-model="postalTradeAddressProp.citySubDivisionName"/><br>
    ชื่ออำเภอ: <input v-model="postalTradeAddressProp.cityName"/><br>
    รหัสจังหวัด: <input v-model="postalTradeAddressProp.countrySubDivisionID"/><br>
    รหัสประเทศ: <input v-model="postalTradeAddressProp.countryID"/><br>
    รหัสไปรษณีย์: <input v-model="postalTradeAddressProp.postcodeCode"/><br>
    ที่อยู่บรรทัดที่ 1: <input v-model="postalTradeAddressProp.lineOne"/><br>
    ที่อยู่บรรทัดที่ 2: <input v-model="postalTradeAddressProp.lineTwo"/><br>
  </div>
</template>

<script>
export default {
  props: ['postalTradeAddressProp']
}
</script>
