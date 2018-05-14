<template>
  <div>
    <label>รหัสผู้ค้า (ผู้ขาย) : </label><input type="text" v-model="information.id"/><br>
    <label>รหัสผู้ค้าสากล (ผู้ขาย) : </label><input type="text" v-model="information.globalID"/><br>
    <label>ชื่อผู้ขาย : </label><input type="text" v-model="information.name"/><br>
    <label>เลขประจำตัวผู้เสียภาษีอากร (ผู้ขาย) : </label><input type="text" v-model="information.taxID"/><br>
    <label>อีเมล (ผู้ขาย) : </label><input type="text" v-model="information.email"/><br>
  </div>
</template>

<script>
export default {
  props: ['information']
}
</script>

<style>

</style>
