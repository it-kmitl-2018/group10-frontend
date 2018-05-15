<template>
  <div>
    รหัสผู้ค้า(ผู้รับ) : <span>{{invoiceTradePartyConfirm.id}}</span><br>
    รหัสผู้ค้าสากล(ผู้รับ) : <span>{{invoiceTradePartyConfirm.globalID}}</span><br>
    ชื่อผู้รับ : <span>{{invoiceTradePartyConfirm.name}}</span><br>
  </div>
</template>
<script>
export default {
  props: ['invoiceTradePartyConfirm']
}
</script>
