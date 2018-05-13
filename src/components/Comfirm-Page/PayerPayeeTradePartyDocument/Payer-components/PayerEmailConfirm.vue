<template>
  <div>
    <label>อีเมล (ผู้ชำระเงิน) : </label><input type="text" v-model="ConfirmPayerEmailProp.Email"/><br>
  </div>
</template>
<script>
export default {
  props: ['confirmPayerEmailProp']
}
</script>
