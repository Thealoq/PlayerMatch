<template>
  <div id="app">
     <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: white;
  background-color: #0c0c0c;
  padding: 0;
  margin: 0;
}

* a{
  text-decoration: none;
  color:white
}






</style>
