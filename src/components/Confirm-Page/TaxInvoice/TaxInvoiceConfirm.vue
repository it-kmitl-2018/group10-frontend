<template>
  <div>
    <h2>ข้อมูลภาษี</h2>
    รหัสประเภทภาษี : <span>{{taxInvoiceConfirm.taxCode}}</span><br>
    อัตราภาษี : <span>{{taxInvoiceConfirm.taxInvoiceRate}}</span><br>
    มูลค่าสินค้าบริการ (ไม่รวมภาษี) : <span>{{taxInvoiceConfirm.valueAmount}}</span><br>
    มูลต่าภาษีมูลค่าเพิ่ม: <span>{{taxInvoiceConfirm.vatAmount}}</span><br>
  </div>
</template>

<script>
export default {
  props: ['taxInvoiceConfirm']
}
</script>
