<template>
  <div>
    อีเมล: <input v-model="emailProp.email"/><br>
  </div>
</template>
<script>
export default {
  props: ['emailProp']
}
</script>
