<template>
  <div>
    อีเมล: <input v-model="documentIssuerFormProp.email"/><br>
    เบอร์โทรศัพท์: <input v-model="documentIssuerFormProp.phoneNumber"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentRecipientFormProp']
}
</script>
