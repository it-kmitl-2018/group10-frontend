<template>
<div class="payertradepartyform">
  <h2>ผู้ชำระเงิน</h2>
  <PayerTradeParty :PayerTradePartyProp="PayerProps.payerPayeeTradeParty"></PayerTradeParty>
  <PayerEmail :PayerEmailProp="PayerProps.payerPayeeEmail"></PayerEmail>
  <PayerSpecifiedTaxRegistration :PayerSpecifiedTaxRegistrationProp="PayerProps.payerPayeeSpecifiedTaxRegistration"></PayerSpecifiedTaxRegistration>
  <PayerTradePartyAddress :PayerTradePartyAddressProp="PayerProps.payerPayeeTradePartyAddress"></PayerTradePartyAddress>
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
  props: ['PayerProps']
}

</script>
