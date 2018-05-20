<template>
  <div>
    <label>ชื่ออาคาร (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.BuildingName"/><br>
    <label>บ้านเลขที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.BuildingNo"/><br>
    <label>ซอย (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.Alley"/><br>
    <label>หมู่บ้าน (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.Village"/><br>
    <label>หมู่ที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.VillageNo"/><br>
    <label>ถนน (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.Street"/><br>
    <label>ตำบล (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.SubDistrict"/><br>
    <label>อำเภอ (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.District"/><br>
    <label>จังหวัด (ผูรับ้ชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.SubCountry"/><br>
    <label>รหัสประเทศ (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.CountryCode"/><br>
    <label>รหัสไปรษณีย์ (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.PostCode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.AddrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayeeTradePartyAddressProp.AddrLineTwo"/><br>
  </div>
</template>
<script>
export default {
  props: ['confirmPayeeTradePartyAddressProp']
}
</script>
