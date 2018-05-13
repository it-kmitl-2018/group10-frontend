<template>
  <div>
    <label>ชื่ออาคาร (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.BuildingName"/><br>
    <label>บ้านเลขที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.BuildingNo"/><br>
    <label>ซอย (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.Alley"/><br>
    <label>หมู่บ้าน (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.Village"/><br>
    <label>หมู่ที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.VillageNo"/><br>
    <label>ถนน (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.Street"/><br>
    <label>ตำบล (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.SubDistrict"/><br>
    <label>อำเภอ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.District"/><br>
    <label>จังหวัด (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.SubCountry"/><br>
    <label>รหัสประเทศ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.CountryCode"/><br>
    <label>รหัสไปรษณีย์ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.PostCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.AddrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyAddressProp.AddrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['PayerTradePartyAddressProp']
}
</script>
