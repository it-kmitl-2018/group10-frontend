<template>
<div class="payeetradepartyform">
  <h2>ผู้รับชำระเงิน</h2>
    <PayeeTradeParty :payeeTradePartyProp="payeeProps.payerPayeeTradeParty"></PayeeTradeParty>
    <PayeeEmail :payeeEmailProp="payeeProps.payerPayeeEmail"></PayeeEmail>
    <PayeeSpecifiedTaxRegistration :PayeeSpecifiedTaxRegistrationProp="payeeProps.payerPayeeSpecifiedTaxRegistration"></PayeeSpecifiedTaxRegistration>
    <PayeeTradePartyAddress :payeeTradePartyAddressProp="payeeProps.payerPayeeTradePartyAddress"></PayeeTradePartyAddress>

</div>
</template>

<script>
import PayeeEmail from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeEmail.vue'
import PayeeSpecifiedTaxRegistration from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeSpecifiedTaxRegistration.vue'
import PayeeTradeParty from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradeParty.vue'
import PayeeTradePartyAddress from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradePartyAddress.vue'
export default{
  components: {
    PayeeEmail,
    PayeeSpecifiedTaxRegistration,
    PayeeTradeParty,
    PayeeTradePartyAddress
  },
  props: ['payeeProps']
}
</script>
