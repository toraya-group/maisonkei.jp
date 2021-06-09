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
              <div class="newsDetail-date">2021.03.30</div>
              <h1 class="newsDetail-title">梅雨休みのお知らせ</h1>
              <p>誠に勝手ながら、Maison KEIでは下記の期間、梅雨休みを予定しております。<br>
              　6月28日（月）～7月7日（水）<br>
              みなさまにはご不便をおかけいたしますが、何卒よろしくお願いいたします。</p>
            </div>
            <div class="page-nav">
              <div class="pageNav-next"><a href="/news/202106/14/">9月のご予約開始について</a></div>
              <div class="pageNav-prev"><a href="/news/202101/30/">臨時休業のお知らせ</a></div>
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
        title: '梅雨休みのお知らせ',
        meta: [
          { hid: 'description', name: 'description', content: '梅雨休みのお知らせ' },
          { property: 'og:url', content: 'https://www.maisonkei.jp/news/202103/30/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Maison KEI' },
          { property: 'og:title', content: 'Maison KEI - 梅雨休みのお知らせ' },
          { property: 'og:description', content: '誠に勝手ながら、Maison KEIでは下記の期間、梅雨休みを予定しております。' },
          { property: 'og:image', content: 'https://www.maisonkei.jp/img/sns.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Maison KEI - 梅雨休みのお知らせ' },
          { name: 'twitter:description', content: '誠に勝手ながら、Maison KEIでは下記の期間、梅雨休みを予定しております。' },
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
