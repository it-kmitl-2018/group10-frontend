<template>
<div class="payeetradepartyform">
  <h2>ผู้รับชำระเงิน</h2>
    <PayeeTradePartyConfirm :confirmPayeeTradePartyProp="confirmPayeeProps.payerPayeeTradeParty"></PayeeTradePartyConfirm>
    <PayeeEmailConfirm :confirmPayeeEmailProp="confirmPayeeProps.payerPayeeEmail"></PayeeEmailConfirm>
    <PayeeSpecifiedTaxRegistrationConfirm :confirmPayeeSpecifiedTaxRegistrationProp="confirmPayeeProps.payerPayeeSpecifiedTaxRegistration"></PayeeSpecifiedTaxRegistrationConfirm>
    <PayeeTradePartyAddressConfirm :confirmPayeeTradePartyAddressProp="confirmPayeeProps.payerPayeeTradePartyAddress"></PayeeTradePartyAddressConfirm>

</div>
</template>

<script>
import PayeeEmailConfirm from '@/components/Confirm-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeEmailConfirm.vue'
import PayeeSpecifiedTaxRegistrationConfirm from '@/components/Confirm-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeSpecifiedTaxRegistrationConfirm.vue'
import PayeeTradePartyConfirm from '@/components/Confirm-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradePartyConfirm.vue'
import PayeeTradePartyAddressConfirm from '@/components/Confirm-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradePartyAddressConfirm.vue'
export default{
  components: {
    PayeeEmailConfirm,
    PayeeSpecifiedTaxRegistrationConfirm,
    PayeeTradePartyConfirm,
    PayeeTradePartyAddressConfirm
  },
  props: ['confirmPayeeProps']
}
</script>
