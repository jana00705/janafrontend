<template>
  <div class="">
    <div class="nav1">
   <NavBar />
  </div>
<b-container  class="bv-example-row mt-5">
  
  <b-row class="text-center">
    <b-col >
      <div >
        <b-container fluid="sm" >
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Education"

    img-height="250"
  >
    <b-card-text>

     Education is the Vaccine for Violence.....
    </b-card-text>
  </b-card>
        </b-container>
</div>
    </b-col>
      </b-row>
     
      <!-- <b-row align-v="center">
        <div id="corimg" >
    <b-col >
      
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
  
  >
    <b-carousel-slide
     
     img-src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" class=" rounded img-fluid"  alt="..."
    >
    </b-carousel-slide>
    <b-carousel-slide
    
      img-src="https://images.unsplash.com/photo-1614283226124-5a2f0f23752b" class=" rounded img-fluid"  alt="..."
    ></b-carousel-slide>
    <b-carousel-slide
      
      img-src="https://images.unsplash.com/photo-1509062522246-3755977927d7" class="  rounded img-fluid"  alt="..."
    ></b-carousel-slide>
  </b-carousel>

    </b-col>
   </div>
  </b-row> -->
  
  <div class="mt-5" id="card1">
 <b-row>
   <b-col>
      <img  src="https://icon-library.com/images/graduation-icon-png/graduation-icon-png-28.jpg"
            width="60" height="60" alt="" loading="lazy" />
         <h4>NIRF</h4>
        <p> The National Institutional Ranking Framework(NIRF) is a methodology adopted by MHRD...</p>
      </b-col>

   <b-col>
     <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/NAAC_LOGO.png"
            width="60" height="60" alt="" loading="lazy" />
     <h4>NAAC</h4>
       <p>All NAAC accredited institutions need to submit yearly the Annual Quality Assurance...</p> 
     </b-col>

   <b-col> 
      <img src="https://www.paatham.in/assets/images/img/lib.png"
            width="60" height="60" alt="" loading="lazy" />
     <h4>LIBRARY</h4>
       <p> Our College librarry is a rich resort of knowledge.The College library has 28,333 books.</p>
      </b-col>
      </b-row>
</div>
<b-container>
<div class=" para">
<b-row >
  <b-col sm="6">
    <b-img  rounded src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            width="500" height="500" alt="" loading="lazy" class="img-fluid" />
  </b-col>
  <b-col class="">
    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur ut minima vitae voluptatibus. Omnis quam praesentium accusantium harum. Magni exercitationem impedit iste vero velit eligendi doloribus vitae et maxime, magnam, ipsum atque nostrum ipsam a eaque excepturi. Cumque id tempore error, dicta fugiat excepturi ducimus dolores quo doloremque doloribus, et consequuntur earum enim? Consequuntur, suscipit officiis! Natus molestiae quod quae aliquam debitis iusto sequi vitae, unde amet non atque cumque ipsum sapiente dignissimos commodi blanditiis sint facere vel. Eveniet, ipsam quod nobis, doloribus fuga mollitia ut dignissimos molestiae temporibus omnis labore debitis, suscipit illum! Totam, non. Atque, quo sequi!</p>
  </b-col>
</b-row>
</div>

<div class=" para">
<b-row >
<b-col class="">
    <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quos, ex voluptas nobis eligendi nulla explicabo tempore suscipit deleniti sit eum rerum earum tempora quas ducimus dolore eveniet alias nostrum at odio nam numquam quod consequuntur. Facilis recusandae perspiciatis accusamus velit illo! Error expedita esse dolores reprehenderit laboriosam repellendus at voluptate. Praesentium exercitationem totam ex, quibusdam, tenetur tempora voluptate beatae ullam impedit mollitia soluta iure temporibus dolore quo possimus magnam modi expedita eum, dolores doloremque in? Amet ratione autem in culpa aliquid quaerat laudantium doloribus, impedit officiis nisi illo corrupti nam dolorem, repellat adipisci beatae eaque. Molestiae sapiente earum fugiat!</p>
  </b-col>
  <b-col sm="6">
    <b-img  rounded src="https://images.unsplash.com/photo-1614283226124-5a2f0f23752b"
            width="500" height="500" alt="" loading="lazy" class="img-fluid" />
  </b-col>
  
</b-row>
</div>
</b-container>
</b-container>
<div class="footer">
   <FooTer />
  </div>

  </div>
</template>

<script>
import NavBar from './Navbar'
import FooTer from './Footer'
export default {
  name: 'Home',
 
  components:{
        
        NavBar,FooTer
  },
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card1{
  padding-left: 20%;
   padding-right: 20%;
}
.para{
  margin-top: 100px;
}
</style>
