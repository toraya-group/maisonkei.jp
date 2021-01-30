<template>
  <div class="wrap">
    <mk-header/>
    <mk-contents/>
    <mk-footer/>
  </div>
</template>

<script>
import MkHeader from '~/components/Header.vue'
import MkFooter from '~/components/Footer.vue'
import MkContents from '~/components/Contents.vue'

export default {
  components: {
    MkHeader,
    MkFooter,
    MkContents
  }
}
</script>
