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
              <div class="newsDetail-date">2021.02.21</div>
              <h1 class="newsDetail-title">4月末まで満席のお知らせ</h1>
              <p>現在、4月末までのご予約を承っている期間ではございますが、<br class="pc">
              ランチ・ディナー共にご予約で満席となりました。<br>
              キャンセル待ちのご希望は承りますが、お席確保のお約束ではございません。<br>
              ご理解のほど、よろしくお願いいたします。</p>
              <p>ご予約は、毎月1日に2か月後の末日までの分を承っております。<br>
              5月1日（土）～31日（月）のご予約は、3月1日（月）より受付開始いたします。<br>
              ご予約はお電話のみとなっております。</p>
              <p>ご予約・お問合せ<br>
              0550-81-2231<br>
              （ご予約受付時間　営業日の10:00～11:30、15:00～17:30）</p>
            </div>
            <div class="page-nav">
              <!-- <div class="pageNav-next"><a href="">2021年1月営業時間のご案内</a></div> -->
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
        title: '4月末まで満席のお知らせ',
        meta: [
          { hid: 'description', name: 'description', content: '4月末まで満席のお知らせ' },
          { property: 'og:url', content: 'https://www.maisonkei.jp/news/202101/30/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Maison KEI' },
          { property: 'og:title', content: 'Maison KEI - 4月末まで満席のお知らせ' },
          { property: 'og:description', content: '現在、4月末までのご予約を承っている期間ではございますが、ランチ・ディナー共にご予約で満席となりました。' },
          { property: 'og:image', content: 'https://www.maisonkei.jp/img/sns.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Maison KEI - 4月末まで満席のお知らせ' },
          { name: 'twitter:description', content: '現在、4月末までのご予約を承っている期間ではございますが、ランチ・ディナー共にご予約で満席となりました。' },
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
