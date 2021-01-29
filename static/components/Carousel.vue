<template>
  <div>
    <!-- Slider main container -->
    <div class="pc">
      <div class="swiper-container slider-pc">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider1-pc.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider2-pc.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider3-pc.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider4-pc.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider5-pc.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider6-pc.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider7-pc.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sp">
      <div class="swiper-container slider-sp">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider1-sp.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider2-sp.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider3-sp.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider4-sp.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider5-sp.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider6-sp.jpg" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiperSlider-inner">
              <img src="/img/home/slider7-sp.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    mounted() {
      //slider
      new Swiper('.slider-pc', {
        autoplay: {
          delay: 4000,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 1000,
        loop: true,
        preloadImages: false
      });
      new Swiper('.slider-sp', {
        autoplay: {
          delay: 4000,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 1000,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        preloadImages: false
      });
    }
  }
</script>
