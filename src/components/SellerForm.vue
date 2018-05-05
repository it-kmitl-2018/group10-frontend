<template>
  <div class="sellerform">
    <h2>ผู้ขาย</h2>
    <label>รหัสผู้ค้า (ผู้ขาย) : </label><input type="text" v-model="seller.id"/><br>
    <label>รหัสผู้ค้าสากล (ผู้ขาย) : </label><input type="text" v-model="seller.globalID"/><br>
    <label>ชื่อผู้ขาย : </label><input type="text" v-model="seller.name"/><br>
    <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ขาย) : </label><input type="text" v-model="seller.taxID"/><br>
    <label>รหัสสาขา (ผู้ขาย) : </label><input type="text" v-model="seller.branchNo"/><br>
    <label>อีเมล (ผู้ขาย) : </label><input type="text" v-model="seller.email"/><br>
    <label>ชื่ออาคาร (ผู้ขาย) : </label><input type="text" v-model="seller.buildingName"/><br>
    <label>บ้านเลขที่ (ผู้ขาย) : </label><input type="text" v-model="seller.buildingNo"/><br>
    <label>ซอย (ผู้ขาย) : </label><input type="text" v-model="seller.alley"/><br>
    <label>หมู่บ้าน (ผู้ขาย) : </label><input type="text" v-model="seller.village"/><br>
    <label>หมู่ที่ (ผู้ขาย) : </label><input type="text" v-model="seller.villageNo"/><br>
    <label>ถนน (ผู้ขาย) : </label><input type="text" v-model="seller.street"/><br>
    <label>ตำบล (ผู้ขาย) : </label><input type="text" v-model="seller.subDistrict"/><br>
    <label>อำเภอ (ผู้ขาย) : </label><input type="text" v-model="seller.district"/><br>
    <label>จังหวัด (ผู้ขาย) : </label><input type="text" v-model="seller.subCountry"/><br>
    <label>ประเทศ (ผู้ขาย) : </label><input type="text" v-model="seller.country"/><br>
    <label>รหัสไปรษณีย์ (ผู้ขาย) : </label><input type="text" v-model="seller.postcode"/><br>
    <label>ที่อยู่บรรทัดที่ 1 (ผู้ขาย) : </label><input type="text" v-model="seller.addrLineOne"/><br>
    <label>ที่อยู่บรรทัดที่ 2 (ผู้ขาย) : </label><input type="text" v-model="seller.addrLineTwo"/><br>
    <button @click="callRestService()">OK</button>
  </div>
</template>

<script>
import { AXIOS } from './http-common'

export default {
  name: 'SellerForm',
  data () {
    return {
      seller: {
        id: '',
        globalID: '',
        name: '',
        taxID: '',
        branchNo: '',
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
        country: '',
        postcode: '',
        addrLineOne: '',
        addrLineTwo: ''
      }
    }
  },
  methods: {
    callRestService () {
      var params = new URLSearchParams()
      params.append('id', this.seller.id)
      params.append('globalID', this.seller.globalID)
      params.append('name', this.seller.name)
      params.append('taxID', this.seller.taxID)
      params.append('branchNo', this.seller.branchNo)
      params.append('email', this.seller.email)
      params.append('buildingName', this.seller.buildingName)
      params.append('buildingNo', this.seller.buildingNo)
      params.append('alley', this.seller.alley)
      params.append('village', this.seller.village)
      params.append('villageNo', this.seller.villageNo)
      params.append('street', this.seller.street)
      params.append('subDistrict', this.seller.subDistrict)
      params.append('district', this.seller.district)
      params.append('subCountry', this.seller.subCountry)
      params.append('country', this.seller.country)
      params.append('postcode', this.seller.postcode)
      params.append('addrLineOne', this.seller.addrLineOne)
      params.append('addrLineTwo', this.seller.addrLineTwo)
      AXIOS.post('/postsellerinfo', params)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
