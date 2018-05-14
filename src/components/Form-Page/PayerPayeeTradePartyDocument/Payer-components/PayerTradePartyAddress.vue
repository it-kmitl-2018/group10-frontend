<template>
  <div>
    <label>ชื่ออาคาร (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.buildingName"/><br>
    <label>บ้านเลขที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.buildingNo"/><br>
    <label>ซอย (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.alley"/><br>
    <label>หมู่บ้าน (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.village"/><br>
    <label>หมู่ที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.villageNo"/><br>
    <label>ถนน (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.street"/><br>
    <label>ตำบล (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.subDistrict"/><br>
    <label>อำเภอ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.district"/><br>
    <label>จังหวัด (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.subCountry"/><br>
    <label>รหัสประเทศ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.countryCode"/><br>
    <label>รหัสไปรษณีย์ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.postCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.addrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.addrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['payerTradePartyAddressProp']
}
</script>
