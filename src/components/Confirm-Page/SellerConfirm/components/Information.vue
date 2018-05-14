<template>
  <div>
    <label>รหัสผู้ค้า (ผู้ขาย) : </label>{{informationConfirm.id}}<br>
    <label>รหัสผู้ค้าสากล (ผู้ขาย) : </label>{{informationConfirm.globalID}}<br>
    <label>ชื่อผู้ขาย : </label>{{informationConfirm.name}}<br>
    <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ขาย) : </label>{{informationConfirm.taxID}}<br>
    <label>อีเมล (ผู้ขาย) : </label>{{informationConfirm.email}}<br>
  </div>
</template>

<script>
export default {
  props: ['informationConfirm']
}
</script>

<style>

</style>
