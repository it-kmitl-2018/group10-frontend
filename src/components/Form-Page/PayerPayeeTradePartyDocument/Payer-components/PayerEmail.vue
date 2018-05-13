<template>
  <div>
    <label>อีเมล (ผู้ชำระเงิน) : </label><input type="text" v-model="PayerEmailProp.Email"/><br>
  </div>
</template>
<script>
export default {
  props: ['PayerEmailProp']
}
</script>
