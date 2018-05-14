<template>
  <div>
    <h2>ข้อมูลผู้รับ</h2>
    <actual-delivery-supply-chain-event :actualDeliverySupplyChainEventProp="termsOfDeliveryAndPaymentFormProp.actualDeliverySupplyChainEvent"></actual-delivery-supply-chain-event>
    <ship-to-trade-party :shipToTradePartyProp="termsOfDeliveryAndPaymentFormProp.shipToTradeParty"></ship-to-trade-party>
    <defined-trade-contact :definedTradeContactProp="termsOfDeliveryAndPaymentFormProp.definedTradeContact"></defined-trade-contact>
    <telephone-universal-communication :telephoneUniversalCommunicationProp="termsOfDeliveryAndPaymentFormProp.telephoneUniversalCommunication"></telephone-universal-communication>
    <postal-trade-address :postalTradeAddressProp="termsOfDeliveryAndPaymentFormProp.postalTradeAddress"></postal-trade-address>
    <applicable-trade-delivery-terms :applicableTradeDeliveryTermsProp="termsOfDeliveryAndPaymentFormProp.applicableTradeDeliveryTerms"></applicable-trade-delivery-terms>
  </div>
</template>

<script>
import ActualDeliverySupplyChainEvent from '@/components/Form-Page/TermsOfDeliveryAndPayment/components/ActualDeliverySupplyChainEvent.vue'
import ShipToTradeParty from '@/components/Form-Page/TermsOfDeliveryAndPayment/components/ShipToTradeParty.vue'
import DefinedTradeContact from '@/components/Form-Page/TermsOfDeliveryAndPayment/components/DefinedTradeContact.vue'
import TelephoneUniversalCommunication from '@/components/Form-Page/TermsOfDeliveryAndPayment/components/TelephoneUniversalCommunication.vue'
import PostalTradeAddress from '@/components/Form-Page/TermsOfDeliveryAndPayment/components/PostalTradeAddress.vue'
import ApplicableTradeDeliveryTerms from '@/components/Form-Page/TermsOfDeliveryAndPayment/components/ApplicableTradeDeliveryTerms.vue'

export default {
  components: {
    ActualDeliverySupplyChainEvent,
    ShipToTradeParty,
    DefinedTradeContact,
    TelephoneUniversalCommunication,
    PostalTradeAddress,
    ApplicableTradeDeliveryTerms
  },
  props: ['termsOfDeliveryAndPaymentFormProp']
}
</script>
