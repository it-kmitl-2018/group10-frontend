<template>
  <div>
    <associated-document-line-document :associatedDocumentLineDocumentProp="specificationProp.associatedDocumentLineDocument"></associated-document-line-document>
    <specified-trade-product :specifiedTradeProductProp="specificationProp.specifiedTradeProduct"></specified-trade-product>
    <designated-product-classification :designatedProductClassificationProp="specificationProp.designatedProductClassification"></designated-product-classification>
    <gross-price-product-trade-price :grossPriceProductTradePriceProp="specificationProp.grossPriceProductTradePrice"></gross-price-product-trade-price>
    <origin-trade-country :originTradeCountryProp="specificationProp.originTradeCountry"></origin-trade-country>
    <individual-trade-product-instance :individualTradeProductInstanceProp="specificationProp.individualTradeProductInstance"></individual-trade-product-instance>
    <applied-trade-allowance-charge :appliedTradeAllowanceChargeProp="specificationProp.appliedTradeAllowanceCharge"></applied-trade-allowance-charge>
    <applicable-trade-tax :applicableTradeTaxProp="specificationProp.applicableTradeTax"></applicable-tradet-tax>
    <included-note :includedNoteProp="specificationProp.includedNote"></included-note>
  </div>
</template>

<script>
import AssociatedDocumentLineDocument from '@/components/Form-Page/SpecificationOfCommodities/components/AssociatedDocumentLineDocument.vue'
import SpecifiedTradeProduct from '@/components/Form-Page/SpecificationOfCommodities/components/SpecifiedTradeProduct.vue'
import IndividualTradeProductInstance from '@/components/Form-Page/SpecificationOfCommodities/components/IndividualTradeProductInstance.vue'
import DesignatedProductClassification from '@/components/Form-Page/SpecificationOfCommodities/components/DesignatedProductClassification.vue'
import OriginTradeCountry from '@/components/Form-Page/SpecificationOfCommodities/components/OriginTradeCountry.vue'
import IncludedNote from '@/components/Form-Page/SpecificationOfCommodities/components/IncludedNote.vue'
import GrossPriceProductTradePrice from '@/components/Form-Page/SpecificationOfCommodities/components/GrossPriceProductTradePrice.vue'
import AppliedTradeAllowanceCharge from '@/components/Form-Page/SpecificationOfCommodities/components/AppliedTradeAllowanceCharge.vue'
import ApplicableTradeTax from '@/components/Form-Page/SpecificationOfCommodities/components/ApplicableTradeTax.vue'

export default {
  components: {
    AssociatedDocumentLineDocument,
    SpecifiedTradeProduct,
    IndividualTradeProductInstance,
    DesignatedProductClassification,
    OriginTradeCountry,
    IncludedNote,
    GrossPriceProductTradePrice,
    AppliedTradeAllowanceCharge,
    ApplicableTradeTax
  },
  props: ['specificationProp']
}
</script>
