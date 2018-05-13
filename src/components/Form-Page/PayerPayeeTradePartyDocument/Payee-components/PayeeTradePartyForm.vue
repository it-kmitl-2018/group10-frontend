<template>
<div class="payeetradepartyform">
  <h2>ผู้รับชำระเงิน</h2>
    <PayeeTradeParty :PayeeTradePartyProp="payee.payerPayeeTradeParty"></PayeeTradeParty>
    <PayeeEmail :PayerEmailProp="payee.payerPayeeEmail"></PayeeEmail>
    <PayeeSpecifiedTaxRegistration :PayeeSpecifiedTaxRegistrationProp="payee.payerPayeeSpecifiedTaxRegistration"></PayeeSpecifiedTaxRegistration>
    <PayeeTradePartyAddress :PayeeTradePartyAddressProp="payee.payerPayeeTradePartyAddress"></PayeeTradePartyAddress>

</div>
</template>

<script>
import PayeeEmail from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeEmail.vue'
import PayeeSpecifiedTaxRegistration from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeSpecifiedTaxRegistration.vue'
import PayeeTradeParty from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradeParty.vue'
import PayeeTradePartyAddress from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradePartyAddress.vue'
import PayerPayeeTradePartyData from '@/Data/PayerPayeeTradeParty.data.js'

export default{
  data () {
    return {
      payee: PayerPayeeTradePartyData.data
    }
  },
  components: {
    PayeeEmail,
    PayeeSpecifiedTaxRegistration,
    PayeeTradeParty,
    PayeeTradePartyAddress
  },
  props: ['PayeeProps']
}
</script>
