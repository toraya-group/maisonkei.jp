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
              <h1 class="newsDetail-title">Maison Kei における新型コロナウイルス感染拡大防止の取り組みについて</h1>
              <figure>
                <img src="/img/news/dummy1.jpg" alt="">
              </figure>
              <p>ダミーテキストです。ここにお知らせ本文テキストが入ります。Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。パリや東京の喧騒から離れ、気軽に、少しゆったりと、私たちの料理や菓子をお召し上がりいただきたいとの想いから、食材と水の豊かな御殿場市東山に店を構えます。富士山を望むこの地で、小林 圭氏が創造する料理をお楽しみください。</p>
              <p>ダミーテキストです。ここにお知らせ本文テキストが入ります。Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。パリや東京の喧騒から離れ、気軽に、少しゆったりと、私たちの料理や菓子をお召し上がりいただきたいとの想いから、食材と水の豊かな御殿場市東山に店を構えます。富士山を望むこの地で、小林 圭氏が創造する料理をお楽しみください。</p>
              <p>ダミーテキストです。ここにお知らせ本文テキストが入ります。Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。パリや東京の喧騒から離れ、気軽に、少しゆったりと、私たちの料理や菓子をお召し上がりいただきたいとの想いから、食材と水の豊かな御殿場市東山に店を構えます。富士山を望むこの地で、小林 圭氏が創造する料理をお楽しみください。</p>
            </div>
            <div class="page-nav">
              <div class="pageNav-next"><a href="">2021年1月営業時間のご案内</a></div>
              <div class="pageNav-prev"><a href="">ご予約方法のご案内</a></div>
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
        title: 'Maison Kei における新型コロナウイルス感染拡大防止の取り組みについて',
        meta: [
          { hid: 'description', name: 'description', content: 'Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。' },
          { property: 'og:url', content: 'https://www.maisonkei.jp/news/202101/30/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Maison KEI' },
          { property: 'og:title', content: 'Maison KEI - Maison Kei における新型コロナウイルス感染拡大防止の取り組みについて' },
          { property: 'og:description', content: 'ダミーテキストです。ここにお知らせ本文テキストが入ります。' },
          { property: 'og:image', content: 'https://www.maisonkei.jp/img/sns.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Maison KEI - Maison Kei における新型コロナウイルス感染拡大防止の取り組みについて' },
          { name: 'twitter:description', content: 'ダミーテキストです。ここにお知らせ本文テキストが入ります。' },
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
