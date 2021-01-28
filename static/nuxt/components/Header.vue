<template>
  <header class="header">
    <div class="header-logo" title="Maison KEI"><a href="/"><span>Maison KEI</span></a></div>
    <div class="header-nav">
      <div class="__inner">
        <nav class="headerNav-main">
          <div class="__inner">
            <div class="headerNavMain-close"></div>
            <div class="headerNavMain-logo"></div>
            <header-nav />
            <div class="headerNavMain-copy">&copy;&nbsp;Maison KEI</div>
          </div>
        </nav>
        <div class="headerReservation-hide __sp">
          <header-reservation />
        </div>
        <div class="headerNav-inner">
          <div class="headerNavInner-reservation">
            <div href="javascript:void(0)" class="headerReservation-btn">
              <span class="headerReservation-inner">
                ご予約はこちら
              </span>
            </div>
          </div>
          <div class="headerReservation-hide __pc">
            <header-reservation />
          </div>
          <div class="headerNavMenu-btn">
            <span class="headerNavMenuBtn-line"></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import HeaderNav from '~/components/HeaderNav.vue'
  import HeaderReservation from '~/components/HeaderReservation.vue'

  export default {
    components: {
      HeaderNav,
      HeaderReservation
    }
  }
</script>
