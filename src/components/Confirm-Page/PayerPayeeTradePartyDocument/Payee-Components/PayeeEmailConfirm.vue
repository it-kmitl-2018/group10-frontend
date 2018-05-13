<template>
  <div>
    <label>อีเมล (ผู้รับชำระเงิน) : </label><input type="text" v-model="ConfirmPayerEmailProp.Email"/><br>
  </div>
</template>
<script>
export default {
  props: ['ConfirmPayerEmailProp']
}
</script>
