<template>
  <div>
    <label>อีเมล (ผู้รับชำระเงิน) : </label><input type="text" v-model="payeeEmailProp.eMail"/><br>
  </div>
</template>
<script>
export default {
  props: ['payeeEmailProp']
}
</script>
