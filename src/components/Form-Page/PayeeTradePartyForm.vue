<template>
<div class="payeetradepartyform">
  <h2>ผู้ชำรับระเงิน</h2>
  <label>รหัสผู้รับชำระเงิน : </label><input type="text" v-model="payeeID" /><br>
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
  <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeAddrLineTwo"/><br>

  <button @click="testjson(payeeID,
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
    payeeAddrLineTwo)">check json</button>
  <button @click="recieveText()">recieve</button>
</div>
</template>

<script>
import {AXIOS} from '../http-commons'

export default{
  name: 'payeetradepartyform',
  data () {
    return {
      payeetradeparty: {
        payeeID: '',
        payeeGlobalID: '',
        payeeName: '',
        payeeTaxID: '',
        payeeEmail: '',
        payeeBuildingName: '',
        payeeBuildingNo: '',
        payeeAlley: '',
        payeeVillage: '',
        payeeVillageNo: '',
        payeeStreet: '',
        payeeSubDistrict: '',
        payeeDistrict: '',
        payeeSubCountry: '',
        payeeCountrycode: '',
        payeePostCode: '',
        payeeAddrLineOne: '',
        payeeAddrLineTwo: ''
      }
    }
  },
  methods: {
    testjson (payeeID,
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
      payeeCountrycode,
      payeePostCode,
      payeeAddrLineOne,
      payeeAddrLineTwo) {
      this.payeetradeparty.payeeID = payeeID
      this.payeetradeparty.payeeGlobalID = payeeGlobalID
      this.payeetradeparty.payeeName = payeeName
      this.payeetradeparty.payeeTaxID = payeeTaxID
      this.payeetradeparty.payeeEmail = payeeEmail
      this.payeetradeparty.payeeBuildingName = payeeBuildingName
      this.payeetradeparty.payeeBuildingNo = payeeBuildingNo
      this.payeetradeparty.payeeAlley = payeeAlley
      this.payeetradeparty.payeeVillage = payeeVillage
      this.payeetradeparty.payeeVillageNo = payeeVillageNo
      this.payeetradeparty.payeeStreet = payeeStreet
      this.payeetradeparty.payeeSubDistrict = payeeSubDistrict
      this.payeetradeparty.payeeDistrict = payeeDistrict
      this.payeetradeparty.payeeSubCountry = payeeSubCountry
      this.payeetradeparty.payeeCountrycode = payeeCountrycode
      this.payeetradeparty.payeePostCode = payeePostCode
      this.payeetradeparty.payeeAddrLineOne = payeeAddrLineOne
      this.payeetradeparty.payeeAddrLineTwo = payeeAddrLineTwo
      var params = new URLSearchParams()
      params.append('payeeID', this.payeetradeparty.payeeID)
      params.append('payeeGlobalID', this.payeetradeparty.payeeGlobalID)
      params.append('payeeName', this.payeetradeparty.payeeName)
      params.append('payeeTaxID', this.payeetradeparty.payeeTaxID)
      params.append('payeeEmail', this.payeetradeparty.payeeEmail)
      params.append('payeeBuildingName', this.payeetradeparty.payeeBuildingName)
      params.append('payeeBuildingNo', this.payeetradeparty.payeeBuildingNo)
      params.append('payeeAlley', this.payeetradeparty.payeeAlley)
      params.append('payeeVillage', this.payeetradeparty.payeeVillage)
      params.append('payeeVillageNo', this.payeetradeparty.payeeVillageNo)
      params.append('payeeStreet', this.payeetradeparty.payeeStreet)
      params.append('payeeSubDistrict', this.payeetradeparty.payeeSubDistrict)
      params.append('payeeDistrict', this.payeetradeparty.payeeDistrict)
      params.append('payeeSubCountry', this.payeetradeparty.payeeSubCountry)
      params.append('payeeCountryCode', this.payeetradeparty.payeeCountrycode)
      params.append('payeePostCode', this.payeetradeparty.payeePostCode)
      params.append('payeeAddrLineOne', this.payeetradeparty.payeeAddrLineOne)
      params.append('payeeAddrLineTwo', this.payeetradeparty.payeeAddrLineTwo)
      alert(JSON.stringify(this.payeetradeparty))
      AXIOS.post(`/infopayee`, params)
        .then(response => {
          this.payeetradeparty = response.data
          console.log(response.data)
        }).catch(e => {
          this.error.push(e)
        })
    },
    recieveText () {
      AXIOS.get(`/hello`).then(response => {
        alert(response.data)
      })
    }
  }
}
</script>
