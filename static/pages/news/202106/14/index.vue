<template>
  <article>

    <section>
      <div class="inner">
        <dl class="grid2">
          <dt class="grid2-side">
            <h1 class="contents-title">お知らせ</h1>
            <div class="pc">
              <news-archive-nav />
              <news-category-nav />
            </div>
          </dt>
          <dd class="grid2-main">
            <div class="news-detail">
              <div class="newsDetail-date">2021.06.14</div>
              <h1 class="newsDetail-title">9月のご予約開始について</h1>
              <p>誠に勝手ながら、Maison KEIでは6月28日（月）～7月7日（水）の期間、梅雨休みを予定しております。<br>
9月のご予約につきましては、7月8日（木）より受付開始いたします。<br>
みなさまにはご不便をおかけいたしますが、何卒よろしくお願いいたします。</p>
            </div>
            <div class="page-nav">
              <!-- <div class="pageNav-next"><a href="">2021年1月営業時間のご案内</a></div> -->
              <div class="pageNav-prev"><a href="/news/202103/30/">梅雨休みのお知らせ</a></div>
            </div>
            <div class="sp">
              <news-archive-nav />
              <news-category-nav />
            </div>
          </dd>
        </dl>
      </div>
    </section>

  </article>
</template>

<script>
  import NewsArchiveNav from '~/components/NewsArchiveNav.vue'
  import NewsCategoryNav from '~/components/NewsCategoryNav.vue'
  import NewsLoadBtn from '~/components/NewsLoadBtn.vue'
  import ContentsHeader from '~/components/ContentsHeader.vue'

  export default {
    head() {
      return {
        title: '9月のご予約開始について',
        meta: [
          { hid: 'description', name: 'description', content: '9月のご予約開始について' },
          { property: 'og:url', content: 'https://www.maisonkei.jp/news/202106/14/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Maison KEI' },
          { property: 'og:title', content: 'Maison KEI - 9月のご予約開始について' },
          { property: 'og:description', content: '誠に勝手ながら、Maison KEIでは6月28日（月）～7月7日（水）の期間、梅雨休みを予定しております。' },
          { property: 'og:image', content: 'https://www.maisonkei.jp/img/sns.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Maison KEI - 9月のご予約開始について' },
          { name: 'twitter:description', content: '誠に勝手ながら、Maison KEIでは6月28日（月）～7月7日（水）の期間、梅雨休みを予定しております。' },
          { name: 'twitter:image:src', content: 'https://www.maisonkei.jp/img/sns.jpg' },
        ]
      }
    },
    components: {
      NewsArchiveNav,
      NewsCategoryNav,
      NewsLoadBtn,
      ContentsHeader
    }
  }
</script>
