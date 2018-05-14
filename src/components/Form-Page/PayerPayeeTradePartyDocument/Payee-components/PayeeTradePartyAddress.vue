<template>
  <div>
    <label>ชื่ออาคาร (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.BuildingName"/><br>
    <label>บ้านเลขที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.BuildingNo"/><br>
    <label>ซอย (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.Alley"/><br>
    <label>หมู่บ้าน (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.Village"/><br>
    <label>หมู่ที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.VillageNo"/><br>
    <label>ถนน (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.Street"/><br>
    <label>ตำบล (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.SubDistrict"/><br>
    <label>อำเภอ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.District"/><br>
    <label>จังหวัด (ผูรับ้ชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.SubCountry"/><br>
    <label>รหัสประเทศ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.CountryCode"/><br>
    <label>รหัสไปรษณีย์ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.PostCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.AddrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTradePartyAddressProp.AddrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['payeeTradePartyAddressProp']
}
</script>
