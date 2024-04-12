<template>
  <div class="movieCarousel">
    <carousel>
      <carousel-slide v-for="(slide, index) in slides" :key="slide" :index="index">
        <img :src="slide" alt="slide" style="width: 100%">
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Carousel from '@/components/Carousel.vue'
import CarouselSlide from '@/components/CarouselSlide.vue'



export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Carousel,
    CarouselSlide
  },
  data() {
    return {
      slides: [
        'https://picsum.photos/id/237/600/350',
        'https://picsum.photos/id/236/600/350',
        'https://picsum.photos/id/235/600/350',
        'https://picsum.photos/id/234/600/350',
        'https://picsum.photos/id/233/600/350',
        'https://picsum.photos/id/232/600/350',
        'https://picsum.photos/id/231/600/350'
      ],
      visibleSlide: 0
    }
  }
}
</script>
