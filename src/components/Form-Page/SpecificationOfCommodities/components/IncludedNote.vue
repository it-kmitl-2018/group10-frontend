<template>
  <div>
    หัวข้อ : <input v-model="includedNoteProp.id"/><br>
    เนื้อหา : <input v-model="includedNoteProp.globalID"/><br>
  </div>
</template>

<script>
export default {
  props: ['includedNoteProp']
}
</script>
