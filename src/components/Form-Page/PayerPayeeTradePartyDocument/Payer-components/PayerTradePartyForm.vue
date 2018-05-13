<template>
<div class="payertradepartyform">
  <h2>ผู้ชำระเงิน</h2>
  <PayerTradeParty :PayerTradePartyProp="payer.payerPayeeTradeParty"></PayerTradeParty>
  <PayerEmail :PayerEmailProp="payer.payerPayeeEmail"></PayerEmail>
  <PayerSpecifiedTaxRegistration :PayerSpecifiedTaxRegistrationProp="payer.payerPayeeSpecifiedTaxRegistration"></PayerSpecifiedTaxRegistration>
  <PayerTradePartyAddress :PayerTradePartyAddressProp="payer.payerPayeeTradePartyAddress"></PayerTradePartyAddress>
</div>
</template>
<script>
import PayerEmail from '@/components/Form-Page//PayerPayeeTradePartyDocument/Payer-components/PayerEmail.vue'
import PayerSpecifiedTaxRegistration from '@/components/Form-Page//PayerPayeeTradePartyDocument/Payer-components/PayerSpecifiedTaxRegistration.vue'
import PayerTradeParty from '@/components/Form-Page//PayerPayeeTradePartyDocument/Payer-components/PayerTradeParty.vue'
import PayerTradePartyAddress from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payer-components/PayerTradePartyAddress.vue'
import PayerPayeeTradePartyData from '@/Data/PayerPayeeTradeParty.data.js'
export default{
  data () {
    return {
      payer: PayerPayeeTradePartyData.data
    }
  },
  components: {
    PayerEmail,
    PayerSpecifiedTaxRegistration,
    PayerTradeParty,
    PayerTradePartyAddress
  },
  props: ['PayerProps']
}

</script>
