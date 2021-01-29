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
              <div class="newsDetail-date">2021.01.30</div>
              <h1 class="newsDetail-title">臨時休業のお知らせ</h1>
              <p>2月1日（月）は、臨時休業いたします。<br>
              【定休日　毎週火曜日・水曜日】</p>
            </div>
            <!-- <div class="page-nav">
              <div class="pageNav-next"><a href="">2021年1月営業時間のご案内</a></div>
              <div class="pageNav-prev"><a href="">ご予約方法のご案内</a></div>
            </div> -->
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
        title: '臨時休業のお知らせ',
        meta: [
          { hid: 'description', name: 'description', content: '2月1日（月）は、臨時休業いたします。' },
          { property: 'og:url', content: 'https://www.maisonkei.jp/news/202101/30/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Maison KEI' },
          { property: 'og:title', content: 'Maison KEI - 臨時休業のお知らせ' },
          { property: 'og:description', content: '2月1日（月）は、臨時休業いたします。' },
          { property: 'og:image', content: 'https://www.maisonkei.jp/img/sns.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Maison KEI - 臨時休業のお知らせ' },
          { name: 'twitter:description', content: '2月1日（月）は、臨時休業いたします。' },
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
