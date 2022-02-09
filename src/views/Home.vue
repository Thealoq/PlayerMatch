<template>
  <div class="home">
    <Card/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Card
  },
};
</script>
