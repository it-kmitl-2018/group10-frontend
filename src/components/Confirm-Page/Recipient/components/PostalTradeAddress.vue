<template>
  <div>
    รหัสไปรษณีย์: <span>{{postalTradeAddressConfirm.postalCode }}</span><br>
    ชื่ออาคาร: <span>{{postalTradeAddressConfirm.building }}</span><br>
    ที่อยู่บรรทัดที่ 1: <span>{{postalTradeAddressConfirm.addressLineOne}}</span><br>
    ที่อยู่บรรทัดที่ 2: <span>{{postalTradeAddressConfirm.addressLineTwo}}</span><br>
    ซอย: <span>{{postalTradeAddressConfirm.addressLineThree}}</span><br>
    หมู่บ้าน: <span>{{postalTradeAddressConfirm.addressLineFour}}</span><br>
    หมู่ที่: <span>{{postalTradeAddressConfirm.addressLineFive}}</span><br>
    ถนน: <span>{{postalTradeAddressConfirm.street}}</span><br>
    ชื่ออำเภอ: <span>{{postalTradeAddressConfirm.district}}</span><br>
    ชื่อตำบล: <span>{{postalTradeAddressConfirm.subDistrict}}</span><br>
    รหัสประเทศ: <span>{{postalTradeAddressConfirm.countryID}}</span><br>
    รหัสจังหวัด: <span>{{postalTradeAddressConfirm.provinceID}}</span><br>
    บ้านเลขที่: <span>{{postalTradeAddressConfirm.houseNumber}}</span><br>
  </div>
</template>
<script>
export default {
  props: ['postalTradeAddressConfirm']
}
</script>
