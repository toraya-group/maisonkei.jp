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
            <div class="news-index">
              <ul class="newsIndex-ul">
                <li>
                  <a href="/news/202101/30/" class="newsIndex-block">
                    <span class="newsIndexBlock-txt">
                      <span class="newsIndexBlockTxt-date">2021.01.30</span>
                      <h2 class="newsIndexBlockTxt-title">2021年1月営業時間のご案内</h2>
                    </span>
                    <span class="newsIndexBlock-img">
                      <figure>
                        <img src="/img/news/dummy1.jpg" alt="">
                      </figure>
                    </span>
                  </a>
                </li>
              </ul>
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
        title: '202101 - お知らせ',
        meta: [
          { hid: 'description', name: 'description', content: 'Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。' },
          { property: 'og:url', content: 'https://www.maisonkei.jp/news/202101/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Maison KEI' },
          { property: 'og:title', content: 'Maison KEI - 202101 - お知らせ' },
          { property: 'og:description', content: 'Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。' },
          { property: 'og:image', content: 'https://www.maisonkei.jp/img/sns.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Maison KEI - 202101 - お知らせ' },
          { name: 'twitter:description', content: 'Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。' },
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
