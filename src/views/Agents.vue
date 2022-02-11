<template>
    <div>
      <div v-for="item in items" :key="item.message">
            <div style="" class="Card">
               <div class="card-img">
                <a :href="item.link">
                    <img :src="item.img"  class="img" alt="">
                </a>
            </div>
              <div class="text">
                <h2>{{item.message}}</h2>
                <div class="des">
                    <p>{{item.description}}</p>
                </div>
              </div>
             
            </div>
            <div class="CardLengt">
                 <div v-for="(t,i) in item.abilities" :key="i">
                    <div class="ability">
                        <div class="ability-img">
                            <img width="100px" v-if="t.displayIcon" :src="t.displayIcon"  > 
                             <h5 style="color:red;" v-if="!t.displayIcon"> Resim Bulunamadi </h5>
                        </div>
                        <div class="ability-text">
                            <h3 style="  display: flex;justify-content: center;align-items: center;">{{t.displayName}}</h3>
                            <p style="width: 400px;text-align: center; font-size:13px" > {{t.description }}</p>
                        </div>
                    </div>
                  
              </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ability-img{
    display: flex;
    justify-content: center;
    align-items: center;
    
}


.abilities-des{
    font-size: 15px
}

.ability{
    display: block;
    justify-content: center;
    align-items: center;
}

.CardLengt{
  background-color: #0f0f0f;
  width: 82%;
  padding: 2rem;
  border-radius: 8px;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}


.text,
.des {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.des p {
  font-size: 13px;
  width: 90%;
}

.Cards {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.Card {
  background-color: #0f0f0f;
  width: 450px;
  padding: 2rem;
  border-radius: 8px;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}



.card-img img {
  max-width: 100px;
  border-radius: 50%;
  background-color: #313131;
}
</style>


<script>
export default {
  name: "Agents",
  data() {
    return {
      items: []
    };
  },
  computed: {
    AgentsLinks() {
      return `/agents/${this.$route.params.uuid}`;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(
          "https://valorantwikibackend.herokuapp.com/api/uuid/" + this.$route.params.uuid
        );
        const json = await response.json();
        this.items.push({
          message: json.displayName,
          img: json.Image,
          description: json.description,
          abilities: json.abilities
        });
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>