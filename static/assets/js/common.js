$(function(){
  $('.footer').append('<div class="pagetop-wrap"><div class="pagetop-mod"><div class="pagetop-inner"><a href="#" class="pagetopInner-link"></a></div></div></div>');
  $(".pagetop-mod").hide();

  $windowWidth = window.innerWidth;
  $breakPointA = 768;
  
  isMobileSize = ($windowWidth < $breakPointA);
  isPcSize = ($windowWidth > $breakPointA);

  $(window).on("scroll", function() {
      if ($(this).scrollTop() > 200) {
          $(".pagetop-mod").fadeIn("fast");
      } else {
          $(".pagetop-mod").fadeOut("fast");
      }
      scrollHeight = $(document).height(); //ドキュメントの高さ 
      scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
      footHeight = $("#footer").innerHeight(); //footerの高さ（＝止めたい位置）
      if ( scrollHeight - scrollPosition  <= footHeight ) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
          if(isPcSize){
              $(".pagetop-mod").css({
                  "position":"absolute", //pisitionをabsolute（親：wrapperからの絶対値）に変更
                  "bottom": footHeight + 65  //下からfooterの高さ + 40px上げた位置に配置
              });
          }
          if(isMobileSize){
              $(".pagetop-mod").css({
                  "position":"fixed", //pisitionをabsolute（親：wrapperからの絶対値）に変更
                  "bottom": footHeight + 50 //下からfooterの高さ + 40px上げた位置に配置
              });
          }
      } else { //それ以外の場合は
          if(isPcSize){
              $(".pagetop-mod").css({
                  "position":"absolute", //固定表示
                  "bottom": "20px" //下から20px上げた位置に
              });
          }
          if(isMobileSize){
              $(".pagetop-mod").css({
                  "position":"fixed", //固定表示
                  "bottom": "20px" //下から20px上げた位置に
              });
          }
      }
  });
  $('.pagetop-mod').click(function () {
      $('body,html').animate({
      scrollTop: 0
      }, 400);
      return false;
  });

  $('.btn-inner').click(function () {
    $(this).parent().toggleClass('open');
    $(this).next('.btn-hide').slideToggle(300);
  });
});
