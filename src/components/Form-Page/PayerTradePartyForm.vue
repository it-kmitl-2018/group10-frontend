<template>
<div class="payertradepartyform">
  <h2>ผู้ชำระเงิน</h2>
  <label>รหัสผู้ชำระเงิน : </label><input type="text" v-model="payerID"/><br>
  <label>รหัสสากล (ผู้ชำระเงิน) : </label><input type="text" v-model="payerGlobalID"/><br>
  <label>ชื่อผู้ชำระเงิน : </label><input type="text" v-model="payerName"/><br>
  <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ชำระเงิน) : </label><input type="text" v-model="payerTaxID"/><br>
  <label>อีเมล (ผู้ชำระเงิน) : </label><input type="text" v-model="payerEmail"/><br>
  <label>ชื่ออาคาร (ผู้ชำระเงิน) : </label><input type="text" v-model="payerBuildingName"/><br>
  <label>บ้านเลขที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerBuildingNo"/><br>
  <label>ซอย (ผู้ชำระเงิน) : </label><input type="text" v-model="payerAlley"/><br>
  <label>หมู่บ้าน (ผู้ชำระเงิน) : </label><input type="text" v-model="payerVillage"/><br>
  <label>หมู่ที่ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerVillageNo"/><br>
  <label>ถนน (ผู้ชำระเงิน) : </label><input type="text" v-model="payerStreet"/><br>
  <label>ตำบล (ผู้ชำระเงิน) : </label><input type="text" v-model="payerSubDistrict"/><br>
  <label>อำเภอ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerDistrict"/><br>
  <label>จังหวัด (ผู้ชำระเงิน) : </label><input type="text" v-model="payerSubCountry"/><br>
  <label>รหัสประเทศ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerCountryCode"/><br>
  <label>รหัสไปรษณีย์ (ผู้ชำระเงิน) : </label><input type="text" v-model="payerPostCode"/><br>
  <label>ที่อยู่บรรทัดที่ 1 (ผู้ชำระเงิน) : </label><input type="text" v-model="payerAddrLineOne"/><br>
  <label>ที่อยู่บรรทัดที่ 2 (ผู้ชำระเงิน) : </label><input type="text" v-model="payerAddrLineTwo"/><br>
  <button @click="testjson(payerID,
    payerGlobalID,
    payerName,
    payerTaxID,
    payerEmail,
    payerBuildingName,
    payerBuildingNo,
    payerAlley,
    payerVillage,
    payerVillageNo,
    payerStreet,
    payerSubDistrict,
    payerDistrict,
    payerSubCountry,
    payerCountryCode,
    payerPostCode,
    payerAddrLineOne,
    payerAddrLineTwo)">check json</button>
</div>
</template>
<script>
import {AXIOS} from '../http-commons'

export default{
  name: 'payertradepartyform',
  data () {
    return {
      payertradeparty: {
        payerID: '',
        payerGlobalID: '',
        payerName: '',
        payerTaxID: '',
        payerEmail: '',
        payerBuildingName: '',
        payerBuildingNo: '',
        payerAlley: '',
        payerVillage: '',
        payerVillageNo: '',
        payerStreet: '',
        payerSubDistrict: '',
        payerDistrict: '',
        payerSubCountry: '',
        payerCountryCode: '',
        payerPostCode: '',
        payerAddrLineOne: '',
        payeraddrLineTwo: ''
      }
    }
  },
  methods: {
    testjson (payerID,
      payerGlobalID,
      payerName,
      payerTaxID,
      payerEmail,
      payerBuildingName,
      payerBuildingNo,
      payerAlley,
      payerVillage,
      payerVillageNo,
      payerStreet,
      payerSubDistrict,
      payerDistrict,
      payerSubCountry,
      payerCountrycode,
      payerPostCode,
      payerAddrLineOne,
      payerAddrLineTwo) {
      this.payertradeparty.payerID = payerID
      this.payertradeparty.payerGlobalID = payerGlobalID
      this.payertradeparty.payerName = payerName
      this.payertradeparty.payerTaxID = payerTaxID
      this.payertradeparty.payerEmail = payerEmail
      this.payertradeparty.payerBuildingName = payerBuildingName
      this.payertradeparty.payerBuildingNo = payerBuildingNo
      this.payertradeparty.payerAlley = payerAlley
      this.payertradeparty.payerVillage = payerVillage
      this.payertradeparty.payerVillageNo = payerVillageNo
      this.payertradeparty.payerStreet = payerStreet
      this.payertradeparty.payerSubDistrict = payerSubDistrict
      this.payertradeparty.payerDistrict = payerDistrict
      this.payertradeparty.payerSubCountry = payerSubCountry
      this.payertradeparty.payerCountrycode = payerCountrycode
      this.payertradeparty.payerPostCode = payerPostCode
      this.payertradeparty.payerAddrLineOne = payerAddrLineOne
      this.payertradeparty.payerAddrLineTwo = payerAddrLineTwo
      var params = new URLSearchParams()
      params.append('payerID', this.payertradeparty.payerID)
      params.append('payerGlobalID', this.payertradeparty.payerGlobalID)
      params.append('payerName', this.payertradeparty.payerName)
      params.append('payerTaxID', this.payertradeparty.payerTaxID)
      params.append('payerEmail', this.payertradeparty.payerEmail)
      params.append('payerBuildingName', this.payertradeparty.payerBuildingName)
      params.append('payerBuildingNo', this.payertradeparty.payerBuildingNo)
      params.append('payerAlley', this.payertradeparty.payerAlley)
      params.append('payerVillage', this.payertradeparty.payerVillage)
      params.append('payerVillageNo', this.payertradeparty.payerVillageNo)
      params.append('payerStreet', this.payertradeparty.payerStreet)
      params.append('payerSubDistrict', this.payertradeparty.payerSubDistrict)
      params.append('payerDistrict', this.payertradeparty.payerDistrict)
      params.append('payerSubCountry', this.payertradeparty.payerSubCountry)
      params.append('payerCountryCode', this.payertradeparty.payerCountrycode)
      params.append('payerPostCode', this.payertradeparty.payerPostCode)
      params.append('payerAddrLineOne', this.payertradeparty.payerAddrLineOne)
      params.append('payerAddrLineTwo', this.payertradeparty.payerAddrLineTwo)
      alert(JSON.stringify(this.payertradeparty))
      AXIOS.post(`/infopayer`, params)
        .then(response => {
          this.payertradeparty = response.data
          console.log(response.data)
        }).catch(e => {
          this.error.push(e)
        })
    }
  }
}
</script>
