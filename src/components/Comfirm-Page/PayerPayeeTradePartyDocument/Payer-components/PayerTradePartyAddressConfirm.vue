<template>
  <div>
    <label>ชื่ออาคาร (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.BuildingName"/><br>
    <label>บ้านเลขที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.BuildingNo"/><br>
    <label>ซอย (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.Alley"/><br>
    <label>หมู่บ้าน (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.Village"/><br>
    <label>หมู่ที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.VillageNo"/><br>
    <label>ถนน (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.Street"/><br>
    <label>ตำบล (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.SubDistrict"/><br>
    <label>อำเภอ (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.District"/><br>
    <label>จังหวัด (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.SubCountry"/><br>
    <label>รหัสประเทศ (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.CountryCode"/><br>
    <label>รหัสไปรษณีย์ (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.PostCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.AddrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ชำระเงิน) : </label><input type="text" v-model="confirmPayerTradePartyAddressProp.AddrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['confirmPayerTradePartyAddressProp']
}
</script>
