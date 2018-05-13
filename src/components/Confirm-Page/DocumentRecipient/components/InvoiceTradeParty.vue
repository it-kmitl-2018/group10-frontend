<template>
  <div>
    รหัสผู้ค้า(ผู้รับเอกสาร) : <span>{{invoiceTradePartyConfirm.id}}</span><br>
    รหัสผู้ค้าสากล(ผู้รับเอกสาร) : <span>{{invoiceTradePartyConfirm.globalID}}</span><br>
    ชื่อผู้ขาย : <span>{{invoiceTradePartyConfirm.name}}</span><br>
  </div>
</template>
<script>
export default {
  props: ['invoiceTradePartyConfirm']
}
</script>
