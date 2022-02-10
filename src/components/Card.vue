<template>
  <div class="CardBody">
     <div class="Cards">
        <div v-for="item in items" :key="item.message">
           
            <div class="Card">
               <div class="card-img">
                <a :href="item.link">
                    <img :src="item.img"  class="img" alt="">
                </a>
            </div>
              <div class="text">
                <h2>{{item.message}}</h2>
              </div>
            </div>
        </div>
     </div>
  </div>
</template>
 
 <script>

export default {
  name: "CardBody",
  data() {
    return {
      items: [],
      loading: true,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch("https://valorantwikibackend.herokuapp.com/api/all");
        const json = await response.json();
        json.map((item) => {
          this.items.push({
            message: item.displayName,
            img: item.Image,
            description: item.description,
            link: "https://valorantwikibackend.herokuapp.com/uuid/" + item.uuid,

          });
        });
      } catch (error) {
        this.error = error;
      }
   
    }
  }
};
</script>
  

 <style <style scoped>

    .card-img:hover{
        opacity: 60%;
    }
    .text:hover{
        opacity: 60%;
    }
 
    .text, .des{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .des p{
        font-size: 13px;
        width: 90%;

    }

    
   .Cards{
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    
   }

   
   .Card{
     background-color: #0f0f0f;
     width: 200px;
     padding: 2rem;
     border-radius: 8px;
     margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
   }


   .Card:hover{
      transform: scale(1.1);
      transition: 0.5s;
   }

   
   

   .card-img img{
    max-width: 100px;
    border-radius: 50%;
    background-color: #313131;
  
   }
   
</style>

 

 

