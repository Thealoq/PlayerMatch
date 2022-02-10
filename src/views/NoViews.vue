<template>
    <div class="text">
        <h3>Sonuç Bulunamadi AnaSayfaya Yönlendiriyorum</h3>
        <img src="https://cdn.discordapp.com/attachments/938087455662440519/941257568163102770/x.png">
    </div>
</template>



<script>
export default {
  created() {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  },
};
</script>

<style scoped>
 .text{
    display: block;
    justify-content: space-between;
    text-align: center;
    padding: 1rem;
  }

  h3{
      color: red
  }

</style>
