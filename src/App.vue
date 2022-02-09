0<template>
  <div id="app">
    <div id="nav">
     <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'Home',
  components: {
    Navbar
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
  flex-direction: column;
  text-align: center;
  align-content: center;
  background-color: #111;
  color: white;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
}

a{
  color: white;
  text-decoration: none;
}

</style>
