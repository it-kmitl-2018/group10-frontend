<template>
<div class="payertradepartyform">
  <h2>ผู้ชำระเงิน</h2>
  <PayerTradeParty :payerTradePartyProp="payerProps.payerPayeeTradeParty"></PayerTradeParty>
  <PayerEmail :payerEmailProp="payerProps.payerPayeeEmail"></PayerEmail>
  <PayerSpecifiedTaxRegistration :payerSpecifiedTaxRegistrationProp="payerProps.payerPayeeSpecifiedTaxRegistration"></PayerSpecifiedTaxRegistration>
  <PayerTradePartyAddress :payerTradePartyAddressProp="payerProps.payerPayeeTradePartyAddress"></PayerTradePartyAddress>
</div>
</template>
<script>
import PayerEmail from '@/components/Form-Page//PayerPayeeTradePartyDocument/Payer-components/PayerEmail.vue'
import PayerSpecifiedTaxRegistration from '@/components/Form-Page//PayerPayeeTradePartyDocument/Payer-components/PayerSpecifiedTaxRegistration.vue'
import PayerTradeParty from '@/components/Form-Page//PayerPayeeTradePartyDocument/Payer-components/PayerTradeParty.vue'
import PayerTradePartyAddress from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payer-components/PayerTradePartyAddress.vue'

export default{
  components: {
    PayerEmail,
    PayerSpecifiedTaxRegistration,
    PayerTradeParty,
    PayerTradePartyAddress
  },
  props: ['payerProps']
}

</script>
