<template>
  <div>
    <label>อีเมล (ผู้ชำระเงิน) : </label><input type="text" v-model="payerEmailProp.Email"/><br>
  </div>
</template>
<script>
export default {
  props: ['payerEmailProp']
}
</script>
