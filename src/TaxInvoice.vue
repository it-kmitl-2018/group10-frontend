<template>
  <div class="taxinvoice">
    <seller-form></seller-form>
    <buyer-form></buyer-form>
    <router-link to="/taxconfirm">
      <button>ตกลง</button>
    </router-link>
  </div>
</template>

<script>
import SellerForm from './components/SellerForm'
import BuyerForm from './components/BuyerForm'
export default {
  name: 'TaxInvoice',
  components: {
    SellerForm,
    BuyerForm
  },
  data () {
    return {
      seller: SellerForm.data,
      buyer: BuyerForm.data
    }
  }
}
</script>

<style>

</style>
