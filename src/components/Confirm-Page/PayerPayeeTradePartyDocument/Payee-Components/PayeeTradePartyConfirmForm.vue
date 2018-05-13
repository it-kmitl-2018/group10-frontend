<template>
<div class="payeetradepartyform">
  <h2>ผู้รับชำระเงิน</h2>
    <PayeeTradePartyConfirm :ConfirmPayeeTradePartyProp="ConfirmPayeeProps.payerPayeeTradeParty"></PayeeTradePartyConfirm>
    <PayeeEmailConfirm :ConfirmPayeeEmailProp="ConfirmPayeeProps.payerPayeeEmail"></PayeeEmailConfirm>
    <PayeeSpecifiedTaxRegistrationConfirm :ConfirmPayeeSpecifiedTaxRegistrationProp="ConfirmPayeeProps.payerPayeeSpecifiedTaxRegistration"></PayeeSpecifiedTaxRegistrationConfirm>
    <PayeeTradePartyAddressConfirm :ConfirmPayeeTradePartyAddressProp="ConfirmPayeeProps.payerPayeeTradePartyAddress"></PayeeTradePartyAddressConfirm>

</div>
</template>

<script>
import PayeeEmailConfirm from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeEmail.vue'
import PayeeSpecifiedTaxRegistrationConfirm from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeSpecifiedTaxRegistration.vue'
import PayeeTradePartyConfirm from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradeParty.vue'
import PayeeTradePartyAddressConfirm from '@/components/Form-Page/PayerPayeeTradePartyDocument/Payee-components/PayeeTradePartyAddress.vue'
export default{
  components: {
    PayeeEmailConfirm,
    PayeeSpecifiedTaxRegistrationConfirm,
    PayeeTradePartyConfirm,
    PayeeTradePartyAddressConfirm
  },
  props: ['ConfirmPayeeProps']
}
</script>
