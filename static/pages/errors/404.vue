<template>
  <article>

    <section class="errors-404">
      <div class="inner">
        <h1 class="contents-title">お探しのページは見つかりませんでした。</h1>
        <p>アクセスしようとしたページは削除、変更されたか、現在利用できない可能性があります。</p>
      </div>
    </section>

  </article>
</template>

<script>
  import ContentsHeader from '~/components/ContentsHeader.vue'

  export default {
    head() {
      return {
        titleTemplate: 'お探しのページは見つかりませんでした。',
        bodyAttrs: {
          class: 'errors',
        },
      }
    },
    components: {
      ContentsHeader
    }
  }
</script>
