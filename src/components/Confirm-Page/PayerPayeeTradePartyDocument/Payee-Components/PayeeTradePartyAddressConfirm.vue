<template>
  <div>
    <label>ชื่ออาคาร (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.BuildingName"/><br>
    <label>บ้านเลขที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.BuildingNo"/><br>
    <label>ซอย (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.Alley"/><br>
    <label>หมู่บ้าน (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.Village"/><br>
    <label>หมู่ที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.VillageNo"/><br>
    <label>ถนน (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.Street"/><br>
    <label>ตำบล (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.SubDistrict"/><br>
    <label>อำเภอ (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.District"/><br>
    <label>จังหวัด (ผูรับ้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.SubCountry"/><br>
    <label>รหัสประเทศ (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.CountryCode"/><br>
    <label>รหัสไปรษณีย์ (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.PostCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.AddrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayeeTradePartyAddressProp.AddrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['ConfirmPayeeTradePartyAddressProp']
}
</script>
