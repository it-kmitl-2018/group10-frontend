<template>
  <div>
    <h2>ผู้รับ</h2>
    <ship-to-trade-party :shipToTradePartyProp="recipientProp.invoiceTradeParty"></ship-to-trade-party>
    <specified-tax-registration :specifiedTaxRegistrationProp="recipientProp.specifiedTaxRegistration"></specified-tax-registration>
    <email :emailProp="recipientProp.email"></email>
    <postal-trade-address :postalTradeAddressProp="recipientProp.postalTradeAddress"></postal-trade-address>
  </div>
</template>

<script>
import ShipToTradeParty from '@/components/Form-Page/Recipient/components/ShipToTradeParty.vue'
import SpecifiedTaxRegistration from '@/components/Form-Page/DocumentRecipient/components/SpecifiedTaxRegistration.vue'
import Email from '@/components/Form-Page/Recipient/components/Email.vue'
import PostalTradeAddress from '@/components/Form-Page/Recipient/components/PostalTradeAddress.vue'

export default {
  components: {
    ShipToTradeParty,
    SpecifiedTaxRegistration,
    Email,
    PostalTradeAddress
  },
  props: ['recipientProp']
}
</script>
