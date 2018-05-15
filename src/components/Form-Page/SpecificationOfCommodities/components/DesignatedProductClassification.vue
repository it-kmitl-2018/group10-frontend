<template>
  <div>
    ชื่อหมวดหมู่สินค้า : <input v-model="designatedProductClassificationProp.className"/><br>
  </div>
</template>

<script>
export default {
  props: ['designatedProductClassificationProp']
}
</script>
