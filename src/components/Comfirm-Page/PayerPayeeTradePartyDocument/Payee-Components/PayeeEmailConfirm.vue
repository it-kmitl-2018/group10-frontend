<template>
  <div>
    <label>อีเมล (ผู้รับชำระเงิน) : </label><input type="text" v-model="confirmPayerEmailProp.Email"/><br>
  </div>
</template>
<script>
export default {
  props: ['confirmPayerEmailProp']
}
</script>
