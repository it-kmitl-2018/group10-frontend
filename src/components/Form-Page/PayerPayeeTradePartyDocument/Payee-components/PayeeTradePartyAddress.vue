<template>
  <div>
    <label>ชื่ออาคาร (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.buildingName"/><br>
    <label>บ้านเลขที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.buildingNo"/><br>
    <label>ซอย (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.alley"/><br>
    <label>หมู่บ้าน (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.village"/><br>
    <label>หมู่ที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.villageNo"/><br>
    <label>ถนน (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.street"/><br>
    <label>ตำบล (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.subDistrict"/><br>
    <label>อำเภอ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.district"/><br>
    <label>จังหวัด (ผูรับ้ชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.subCountry"/><br>
    <label>รหัสประเทศ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.countryCode"/><br>
    <label>รหัสไปรษณีย์ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.postCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.addrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.addrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['payeeTradePartyAddressProp']
}
</script>
