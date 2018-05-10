<template>
<div class="payertradepartyform">
  <h2>ผู้ชำระเงิน</h2>
  <label>รหัสผู้ชำระเงิน : </label><input type="text" v-model="PayerTradePartyFormProp.payerID"/><br>
  <label>รหัสสากล (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerGlobalID"/><br>
  <label>ชื่อผู้ชำระเงิน : </label><input type="text" v-model="PayerTradePartyFormProp.payerName"/><br>
  <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerTaxID"/><br>
  <label>อีเมล (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerEmail"/><br>
  <label>ชื่ออาคาร (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerBuildingName"/><br>
  <label>บ้านเลขที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerBuildingNo"/><br>
  <label>ซอย (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerAlley"/><br>
  <label>หมู่บ้าน (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerVillage"/><br>
  <label>หมู่ที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerVillageNo"/><br>
  <label>ถนน (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerStreet"/><br>
  <label>ตำบล (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerSubDistrict"/><br>
  <label>อำเภอ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerDistrict"/><br>
  <label>จังหวัด (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerSubCountry"/><br>
  <label>รหัสประเทศ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerCountryCode"/><br>
  <label>รหัสไปรษณีย์ (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerPostCode"/><br>
  <label>ที่อยู่บรรทัดที่ 1 (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerAddrLineOne"/><br>
  <label>ที่อยู่บรรทัดที่ 2 (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerTradePartyFormProp.payerAddrLineTwo"/><br>
</div>
</template>
<script>

export default{
  props: ['PayerTradePartyFormProp']
}

</script>
