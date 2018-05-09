<template>
  <div class="sellerpage">
    <seller-form :sellerform='seller'></seller-form>
    <button @click="callRestService()">OK</button>
  </div>
</template>

<script>
import { AXIOS } from './http-common'
import SellerForm from './components/SellerForm'
import SellerModel from './components/SellerModel'

export default {
  name: 'SellerPage',
  components: {
    SellerForm,
    SellerModel
  },
  data () {
    return {
      seller: SellerModel
    }
  },
  methods: {
    callRestService () {
      var params = new URLSearchParams()
      params.set('id', this.seller.id)
      params.set('globalID', this.seller.globalID)
      params.set('name', this.seller.name)
      params.set('taxID', this.seller.taxID)
      params.set('branchNo', this.seller.branchNo)
      params.set('email', this.seller.email)
      params.set('buildingName', this.seller.buildingName)
      params.set('buildingNo', this.seller.buildingNo)
      params.set('alley', this.seller.alley)
      params.set('village', this.seller.village)
      params.set('villageNo', this.seller.villageNo)
      params.set('street', this.seller.street)
      params.set('subDistrict', this.seller.subDistrict)
      params.set('district', this.seller.district)
      params.set('subCountry', this.seller.subCountry)
      params.set('country', this.seller.country)
      params.set('postcode', this.seller.postcode)
      params.set('addrLineOne', this.seller.addrLineOne)
      params.set('addrLineTwo', this.seller.addrLineTwo)
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
