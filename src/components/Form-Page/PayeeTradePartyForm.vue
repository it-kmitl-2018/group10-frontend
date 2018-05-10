<template>
<div class="payeetradepartyform">
  <h2>ผู้รับชำระเงิน</h2>

  <label>รหัสผู้รับชำระเงิน : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeID" /><br>
  <label>รหัสสากล (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeGlobalID"/><br>
  <label>ชื่อผู้รับชำระเงิน : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeName"/><br>
  <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeTaxID"/><br>
  <label>อีเมล (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeEmail"/><br>
  <label>ชื่ออาคาร (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeBuildingName"/><br>
  <label>บ้านเลขที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeBuildingNo"/><br>
  <label>ซอย (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeAlley"/><br>
  <label>หมู่บ้าน (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeVillage"/><br>
  <label>หมู่ที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeVillageNo"/><br>
  <label>ถนน (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeStreet"/><br>
  <label>ตำบล (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeSubDistrict"/><br>
  <label>อำเภอ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeDistrict"/><br>
  <label>จังหวัด (ผูรับ้ชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeSubCountry"/><br>
  <label>รหัสประเทศ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeCountrycode"/><br>
  <label>รหัสไปรษณีย์ (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeePostCode"/><br>
  <label>ที่อยู่บรรทัดที่ 1 (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeAddrLineOne"/><br>
  <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" v-model="PayeeTradePartyFormProp.payeeAddrLineTwo"/><br>

</div>
</template>

<script>
export default{
  props: ['PayeeTradePartyFormProp']
}
</script>
