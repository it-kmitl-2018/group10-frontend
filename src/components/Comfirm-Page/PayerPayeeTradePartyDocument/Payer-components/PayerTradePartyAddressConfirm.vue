<template>
  <div>
    <label>ชื่ออาคาร (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.BuildingName"/><br>
    <label>บ้านเลขที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.BuildingNo"/><br>
    <label>ซอย (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.Alley"/><br>
    <label>หมู่บ้าน (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.Village"/><br>
    <label>หมู่ที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.VillageNo"/><br>
    <label>ถนน (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.Street"/><br>
    <label>ตำบล (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.SubDistrict"/><br>
    <label>อำเภอ (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.District"/><br>
    <label>จังหวัด (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.SubCountry"/><br>
    <label>รหัสประเทศ (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.CountryCode"/><br>
    <label>รหัสไปรษณีย์ (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.PostCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.AddrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerTradePartyAddressProp.AddrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['ConfirmPayerTradePartyAddressProp']
}
</script>
