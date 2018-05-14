<template>
  <div>
    <label>ชื่ออาคาร (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.BuildingName"/><br>
    <label>บ้านเลขที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.BuildingNo"/><br>
    <label>ซอย (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.Alley"/><br>
    <label>หมู่บ้าน (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.Village"/><br>
    <label>หมู่ที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.VillageNo"/><br>
    <label>ถนน (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.Street"/><br>
    <label>ตำบล (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.SubDistrict"/><br>
    <label>อำเภอ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.District"/><br>
    <label>จังหวัด (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.SubCountry"/><br>
    <label>รหัสประเทศ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.CountryCode"/><br>
    <label>รหัสไปรษณีย์ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.PostCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.AddrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTradePartyAddressProp.AddrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['payerTradePartyAddressProp']
}
</script>
