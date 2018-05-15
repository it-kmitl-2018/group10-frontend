<template>
  <div>
    รหัสประเทศกำเนิด : <input v-model="originTradeCountryProp.id"/><br>
  </div>
</template>

<script>
export default {
  props: ['originTradeCountryProp']
}
</script>
