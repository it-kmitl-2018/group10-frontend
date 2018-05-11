<template>
  <div>
    อีเมล: <input v-model="documentRecipientFormProp.email"/><br>
    เบอร์โทรศัพท์: <input v-model="documentRecipientFormProp.phoneNumber"/><br>
  </div>
</template>
<script>
export default {
  props: ['documentRecipientFormProp']
}
</script>
