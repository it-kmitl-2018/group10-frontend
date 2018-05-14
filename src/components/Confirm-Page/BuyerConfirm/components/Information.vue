<template>
  <div>
    <label>รหัสผู้ค้า (ผู้ซื้อ) : </label>{{informationConfirm.id}}<br>
    <label>รหัสผู้ค้าสากล (ผู้ซื้อ) : </label>{{informationConfirm.globalID}}<br>
    <label>ชื่อผู้ซื้อ : </label>{{informationConfirm.name}}<br>
    <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ซื้อ) : </label>{{informationConfirm.taxID}}<br>
    <label>อีเมล (ผู้ซื้อ) : </label>{{informationConfirm.email}}<br>
  </div>
</template>

<script>
export default {
  props: ['informationConfirm']
}
</script>

<style>

</style>
