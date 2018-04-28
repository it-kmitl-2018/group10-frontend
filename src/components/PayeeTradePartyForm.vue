<template>
<div class="payeetradepartyform">
  <h2>ผู้ชำรับระเงิน</h2>
  <label>รหัสผู้รับชำระเงิน : </label><input type="text" v-model="id" /><br>
  <label>รหัสสากล (ผู้รับชำระเงิน) : </label><input type="text" v-model="payerGlobalID"/><br>
  <label>ชื่อผู้รับชำระเงิน : </label><input type="text" v-model="name"/><br>
  <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้รับชำระเงิน) : </label><input type="text" v-model="taxID"/><br>
  <label>อีเมล (ผู้รับชำระเงิน) : </label><input type="text" v-model="email"/><br>
  <label>ชื่ออาคาร (ผู้รับชำระเงิน) : </label><input type="text" v-model="buildingName"/><br>
  <label>บ้านเลขที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="buildingNo"/><br>
  <label>ซอย (ผู้รับชำระเงิน) : </label><input type="text" v-model="alley"/><br>
  <label>หมู่บ้าน (ผู้รับชำระเงิน) : </label><input type="text" v-model="village"/><br>
  <label>หมู่ที่ (ผู้รับชำระเงิน) : </label><input type="text" v-model="villageNo"/><br>
  <label>ถนน (ผู้รับชำระเงิน) : </label><input type="text" v-model="street"/><br>
  <label>ตำบล (ผู้รับชำระเงิน) : </label><input type="text" v-model="subDistrict"/><br>
  <label>อำเภอ (ผู้รับชำระเงิน) : </label><input type="text" v-model="district"/><br>
  <label>จังหวัด (ผูรับ้ชำระเงิน) : </label><input type="text" v-model="subCountry"/><br>
  <label>รหัสประเทศ (ผู้รับชำระเงิน) : </label><input type="text" v-model="countrycode"/><br>
  <label>รหัสไปรษณีย์ (ผู้รับชำระเงิน) : </label><input type="text" v-model="postcode"/><br>
  <label>ที่อยู่บรรทัดที่ 1 (ผู้รับชำระเงิน) : </label><input type="text" v-model="addrLineOne"/><br>
  <label>ที่อยู่บรรทัดที่ 2 (ผู้รับชำระเงิน) : </label><input type="text" v-model="addrLineTwo"/><br>

  <button @click="testjson(id,
    payerGlobalID,
    name,
    taxID,
    email,
    buildingName,
    buildingNo,
    alley,
    village,
    villageNo,
    street,
    subDistrict,
    district,
    subCountry,
    countrycode,
    postcode,
    addrLineOne,
    addrLineTwo)">check json</button>
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
        id: '',
        payerGlobalID: '',
        name: '',
        taxID: '',
        email: '',
        buildingName: '',
        buildingNo: '',
        alley: '',
        village: '',
        villageNo: '',
        street: '',
        subDistrict: '',
        district: '',
        subCountry: '',
        countrycode: '',
        postcode: '',
        addrLineOne: '',
        addrLineTwo: ''
      }
    }
  },
  methods: {
    testjson (id,
      payerGlobalID,
      name,
      taxID,
      email,
      buildingName,
      buildingNo,
      alley,
      village,
      villageNo,
      street,
      subDistrict,
      district,
      subCountry,
      countrycode,
      postcode,
      addrLineOne,
      addrLineTwo) {
      this.payeetradeparty.id = id
      this.payeetradeparty.payerGlobalID = payerGlobalID
      this.payeetradeparty.name = name
      this.payeetradeparty.taxID = taxID
      this.payeetradeparty.email = email
      this.payeetradeparty.buildingName = buildingName
      this.payeetradeparty.buildingNo = buildingNo
      this.payeetradeparty.alley = alley
      this.payeetradeparty.village = village
      this.payeetradeparty.villageNo = villageNo
      this.payeetradeparty.street = street
      this.payeetradeparty.subDistrict = subDistrict
      this.payeetradeparty.district = district
      this.payeetradeparty.subCountry = subCountry
      this.payeetradeparty.countrycode = countrycode
      this.payeetradeparty.postcode = postcode
      this.payeetradeparty.addrLineOne = addrLineOne
      this.payeetradeparty.addrLineTwo = addrLineTwo
      var params = new URLSearchParams()
      params.append('id', this.payeetradeparty.id)
      params.append('payerGlobalID', this.payeetradeparty.payerGlobalID)
      params.append('name', this.payeetradeparty.name)
      params.append('taxID', this.payeetradeparty.taxID)
      params.append('email', this.payeetradeparty.email)
      params.append('buildingName', this.payeetradeparty.buildingName)
      params.append('buildingNo', this.payeetradeparty.buildingNo)
      params.append('alley', this.payeetradeparty.alley)
      params.append('village', this.payeetradeparty.village)
      params.append('villageNo', this.payeetradeparty.villageNo)
      params.append('street', this.payeetradeparty.street)
      params.append('subDistrict', this.payeetradeparty.subDistrict)
      params.append('district', this.payeetradeparty.district)
      params.append('subCountry', this.payeetradeparty.subCountry)
      params.append('countrycode', this.payeetradeparty.countrycode)
      params.append('postcode', this.payeetradeparty.postcode)
      params.append('addrLineOne', this.payeetradeparty.addrLineOne)
      params.append('addrLineTwo', this.payeetradeparty.addrLineTwo)
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
