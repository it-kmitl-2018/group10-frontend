<template>
  <div>
    อีเมล: <input v-model="emailAndPhoneProp.email"/><br>
    เบอร์โทรศัพท์: <input v-model="emailAndPhoneProp.phoneNumber"/><br>
  </div>
</template>
<script>
export default {
  props: ['emailAndPhoneProp']
}
</script>
