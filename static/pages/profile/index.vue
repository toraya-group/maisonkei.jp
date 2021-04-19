<template>
  <article>

    <section>
      <div class="inner">
        <dl class="grid2">
          <dt class="grid2-side">
            <h1 class="contents-title">プロフィール</h1>
          </dt>
          <dd class="grid2-main">
            <figure class="profile-cover side-margin">
              <img src="/img/profile/mk-profile.jpg" alt="画像：ポートレイト">
            </figure>
            <div class="section-profile">
              <div class="profile-label">（写真左）</div>
              <div class="profile-position">Chef</div>
              <h3 class="profile-title"><span class="profileTitle-jp">小林 圭</span><span class="profileTitle-en">Kei Kobayashi</span></h3>
              <p class="al-justify mt-non">長野県生まれ。長野、東京、フランスと料理人としての研鑽を積む。フランスでは南仏やアルザス地方などの有名レストランにて地方の豊かさを学び、そしてパリへ。パリでは世界的なシェフ、アラン・デュカス氏のレストラン「アラン・デュカス・オ・プラザ・アテネ」に職を得て7年間働く。この間最後の5年はスーシェフを務めた。2011年3月にオーナーシェフとしてパリに「Restaurant KEI」をオープン。2020年1月にフランス版ミシュランガイドにて三ツ星を獲得。</p>
            </div>
            <div class="section-profile">
              <div class="profile-label">（写真右）</div>
              <div class="profile-position">Maison KEI Chef</div>
              <h3 class="profile-title"><span class="profileTitle-jp">佐藤充宜</span><span class="profileTitle-en">Mitsuyoshi Sato</span></h3>
              <p class="al-justify mt-non">三重県生まれ。2006年エコール 辻 大阪にて学び、2007年から「ヌキテパ」(東京)、2010年から「エディションコウジシモムラ」(東京)にて勤務。2011年に24歳で渡仏、地方のレストランなどを経て、2015年から「Restaurant KEI」にて勤務。このたび「Maison KEI」シェフに就任。 </p>
            </div>
          </dd>
        </dl>
      </div>
    </section>

  </article>
</template>

<script>
  import ContentsHeader from '~/components/ContentsHeader.vue'

  export default {
    head() {
      return {
        title: 'プロフィール',
        meta: [
          { hid: 'description', name: 'description', content: 'Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。' },
          { property: 'og:url', content: 'https://www.maisonkei.jp/profile/' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Maison KEI' },
          { property: 'og:title', content: 'Maison KEI - プロフィール' },
          { property: 'og:description', content: 'Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。' },
          { property: 'og:image', content: 'https://www.maisonkei.jp/img/profile/mk-profile.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Maison KEI - プロフィール' },
          { name: 'twitter:description', content: 'Maison KEIは、パリのフレンチレストラン「Restaurant KEI」と和菓子屋「とらや」がはじめるフレンチレストランです。' },
          { name: 'twitter:image:src', content: 'https://www.maisonkei.jp/img/profile/mk-profile.jpg' },
        ]
      }
    },
    components: {
      ContentsHeader
    }
  }
</script>
