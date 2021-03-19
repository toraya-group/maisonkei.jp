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
              <div class="newsDetail-date">2021.03.11</div>
              <h1 class="newsDetail-title">5月末まで満席のお知らせ</h1>
              <p>5月末までのご予約を承っている期間ではございますが、ランチ・ディナー共にご予約で満席となりました。<br>
              現在は、5月末までのキャンセル待ちをお伺いしております。<br>
              ご迷惑をお掛けいたしますことをお詫び申し上げますとともに、これからも何卒よろしくお願いいたします。<br>
              ご予約は、毎月1日に2か月後の末日までの分を承っております。<br>
              6月分のご予約は、4月1日（木）よりお電話にて承ります。</p>
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
        title: '5月末まで満席のお知らせ',
        meta: [
          { hid: 'description', name: 'description', content: '5月末まで満席のお知らせ' },
          { property: 'og:url', content: 'https://www.maisonkei.jp/news/202103/11/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Maison KEI' },
          { property: 'og:title', content: 'Maison KEI - 5月末まで満席のお知らせ' },
          { property: 'og:description', content: '5月末までのご予約を承っている期間ではございますが、ランチ・ディナー共にご予約で満席となりました。' },
          { property: 'og:image', content: 'https://www.maisonkei.jp/img/sns.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Maison KEI - 5月末まで満席のお知らせ' },
          { name: 'twitter:description', content: '5月末までのご予約を承っている期間ではございますが、ランチ・ディナー共にご予約で満席となりました。' },
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
