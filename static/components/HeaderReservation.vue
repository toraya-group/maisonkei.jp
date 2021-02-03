<template>
  <div class="__inner">
    <div class="headerReservationHide-title">ご予約はこちら</div>
    <dl class="headerReservationHide-tel">
      <dt>TEL</dt>
      <dd><a href="tel:0550-81-2231">0550-81-2231</a></dd>
    </dl>
    <div class="headerReservationHide-caution">
      <dl>
        <dd>10:00～11:30、15:00～17:30にお電話ください<br>お電話でのみ、{{ month }}月末までのご予約を承っております</dd>
      </dl>
      <dl>
        <dt>＊</dt>
        <dd>スマートカジュアルを推奨しております<br>男性の半ズボンやサンダルなど、極度にカジュアルな服装はご遠慮ください</dd>
      </dl>
      <dl>
        <dt>＊</dt>
        <dd>お子様同伴の場合は、個室のみのご予約とさせていただきます</dd>
      </dl>
      <dl>
        <dt>＊</dt>
        <dd>当日キャンセルの場合は、お料理代金×人数分を請求させていただきます</dd>
      </dl>
    </div>
  </div>
</template>

<script>
  // 翌々月取得
  export default {
    data: () => {
      return {
        month: ''
      };
    },
    created() {
      const d = new Date()
      this.month = d.getMonth() + 3
    }
  }
</script>