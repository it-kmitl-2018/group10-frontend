<template>
<div class="payertradepartyconfirmform">
  <h2>ผู้ชำระเงิน</h2>
  <PayerTradePartyConfirm :confirmPayerTradePartyProp="confirmPayerProps.payerPayeeTradeParty"></PayerTradePartyConfirm>
  <PayerEmailConfirm :confirmPayerEmailProp="confirmPayerProps.payerPayeeEmail"></PayerEmailConfirm>
  <PayerSpecifiedTaxRegistrationConfirm :confirmPayerSpecifiedTaxRegistrationProp="confirmPayerProps.payerPayeeSpecifiedTaxRegistration"></PayerSpecifiedTaxRegistrationConfirm>
  <PayerTradePartyAddressConfirm :confirmPayerTradePartyAddressProp="confirmPayerProps.payerPayeeTradePartyAddress"></PayerTradePartyAddressConfirm>
</div>
</template>
<script>
import PayerEmailConfirm from '@/components/Confirm-Page/PayerPayeeTradePartyDocument/Payer-components/PayerEmailConfirm.vue'
import PayerSpecifiedTaxRegistrationConfirm from '@/components/Confirm-Page//PayerPayeeTradePartyDocument/Payer-components/PayerSpecifiedTaxRegistrationConfirm.vue'
import PayerTradePartyConfirm from '@/components/Confirm-Page/PayerPayeeTradePartyDocument/Payer-components/PayerTradePartyConfirm.vue'
import PayerTradePartyAddressConfirm from '@/components/Confirm-Page/PayerPayeeTradePartyDocument/Payer-components/PayerTradePartyAddressConfirm.vue'

export default{
  components: {
    PayerEmailConfirm,
    PayerSpecifiedTaxRegistrationConfirm,
    PayerTradePartyConfirm,
    PayerTradePartyAddressConfirm
  },
  props: ['confirmPayerProps']
}

</script>
