<template>
  <div id="app">
    <div>
        <router-link :to="{name: 'app'}"> หน้าแรก </router-link>
        <router-link :to="{name: 'ElectronicReceiptForm'}"> ใบเสร็จ </router-link>
        <!-- <router-link :to="{name: 'EReceiptForm'}"> ใบเสร็จ </router-link>
        <router-link :to="{name: 'ETaxInvoiceForm'}"> ใบแจ้งหนี้ </router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
