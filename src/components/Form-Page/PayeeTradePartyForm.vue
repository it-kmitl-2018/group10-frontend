<template>
<div class="payeetradepartyform">
  <h2>ผู้ชำรับระเงิน</h2>
  <!-- <label>รหัสผู้รับชำระเงิน : </label><input type="text" v-model="payeeID" /><br>
  <label>รหัสสากล (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeGlobalID"/><br>
  <label>ชื่อผู้รับชำระเงิน : </label><input type="text" v-model="payeeName"/><br>
  <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeTaxID"/><br>
  <label>อีเมล (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeEmail"/><br>
  <label>ชื่ออาคาร (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeBuildingName"/><br>
  <label>บ้านเลขที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeBuildingNo"/><br>
  <label>ซอย (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeAlley"/><br>
  <label>หมู่บ้าน (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeVillage"/><br>
  <label>หมู่ที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeVillageNo"/><br>
  <label>ถนน (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeStreet"/><br>
  <label>ตำบล (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeSubDistrict"/><br>
  <label>อำเภอ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeDistrict"/><br>
  <label>จังหวัด (ผูรับ้ชำระเงิน) : </label><input type="text" v-model="payeeSubCountry"/><br>
  <label>รหัสประเทศ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeCountrycode"/><br>
  <label>รหัสไปรษณีย์ (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeePostcode"/><br>
  <label>ที่อยู่บรรทัดที่ 1 (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeAddrLineOne"/><br>
  <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeAddrLineTwo"/><br> -->

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

  <!-- <button @click="testjson(payeeID,
    payeeGlobalID,
    payeeName,
    payeeTaxID,
    payeeEmail,
    payeeBuildingName,
    payeeBuildingNo,
    payeeAlley,
    payeeVillage,
    payeeVillageNo,
    payeeStreet,
    payeeSubDistrict,
    payeeDistrict,
    payeeSubCountry,
    payeeCountryCode,
    payeePostCode,
    payeeAddrLineOne,
    payeeAddrLineTwo)">check json</button> -->

</div>
</template>

<script>
// import {AXIOS} from '../http-commons'

export default{
  props: ['PayeeTradePartyFormProp']
}
</script>
