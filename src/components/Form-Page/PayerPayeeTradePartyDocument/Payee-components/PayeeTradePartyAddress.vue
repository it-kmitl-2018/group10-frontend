<template>
  <div>
    <label>ชื่ออาคาร (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.BuildingName"/><br>
    <label>บ้านเลขที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.BuildingNo"/><br>
    <label>ซอย (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.Alley"/><br>
    <label>หมู่บ้าน (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.Village"/><br>
    <label>หมู่ที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.VillageNo"/><br>
    <label>ถนน (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.Street"/><br>
    <label>ตำบล (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.SubDistrict"/><br>
    <label>อำเภอ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.District"/><br>
    <label>จังหวัด (ผูรับ้ชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.SubCountry"/><br>
    <label>รหัสประเทศ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.Countrycode"/><br>
    <label>รหัสไปรษณีย์ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.PostCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.AddrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyAddressProp.AddrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['PayeeTradePartyAddressProp']
}
</script>
