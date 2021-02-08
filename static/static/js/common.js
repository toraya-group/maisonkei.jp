$(function(){
  $('.footer').append('<div class="pagetop-wrap"><div class="pagetop-mod"><div class="pagetopMod-inner"><a href="javascript.void(0);" class="pagetopModInner-link"><span class="pagetopModInnerLink-arrow"></span><span class="pagetopModInnerLink-txt">Page Top</span></a></div></div></div>');
  $(".pagetop-mod").hide();

  $windowWidth = window.innerWidth;
  $breakPointA = 1150;
  
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
      footHeight = $(".footer").innerHeight(); //footerの高さ（＝止めたい位置）
      if ( scrollHeight - scrollPosition  <= footHeight ) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
          if(isPcSize){
              $(".pagetop-mod").css({
                  "position":"fixed", //pisitionをabsolute（親：wrapperからの絶対値）に変更
                  "bottom": "43px"  //下からfooterの高さ + 40px上げた位置に配置
              });
          } else if(isMobileSize){
              $(".pagetop-mod").css({
                  "position":"fixed", //pisitionをabsolute（親：wrapperからの絶対値）に変更
                  "bottom": "80px" //下からfooterの高さ + 40px上げた位置に配置
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

// ** ご予約はこちらボタン 
  function noScroll(event) {
    event.preventDefault();
  }
  // mobile
  if(isMobileSize){
    $('.headerReservation-btn').on('click', function () {
      $('.headerNav-main').fadeOut(300);
      $(this).toggleClass('__active');
      $('.headerReservation-hide.__sp').toggleClass('__active');
      
      if ($('.headerReservation-hide.__sp').hasClass('__active')) {
        const browseHieght = window.innerHeight - 98;
        $('.headerReservation-hide.__sp .__inner').height(browseHieght);
      }
      $('.headerReservation-hide.__sp').fadeToggle(300);
    });

    $('.headerReservationHide-close').on('click', function() {
      $('.headerReservation-btn').toggleClass('__active');
      $('.headerReservation-hide.__sp').toggleClass('__active');
      $('.headerReservation-hide.__sp').fadeToggle(300);
    });
  }

  // pc
  if(isPcSize){
    $('.headerReservation-btn').on('click', function () {
      $(this).toggleClass('__active');
      $('.headerNav-inner').toggleClass('__active');
      $('.headerReservation-hide.__pc').toggleClass('__active');
      $('.headerReservation-hide.__pc').slideToggle(300);
    });
  }

  
// ** ハンバーガーメニュー
  function noScroll(event) {
    event.preventDefault();
  }
  // mobile
  if(isMobileSize){
    $('.headerNavMenu-btn').on('click', function() {
      $('.headerReservation-hide.__sp').fadeOut(300);
      $('.headerNav-main').toggleClass('__active');
      if ($('.headerNav-main').hasClass('__active')) {
        const browseHieght = window.innerHeight;
        $('.headerNav-main').height(browseHieght);
      }
      $('.headerNav-main').fadeToggle(300);
    });

    $('.headerNavMain-close').on('click', function() {
      $('.headerNav-main').toggleClass('__active');
      $('.headerNav-main').fadeToggle(300);
    });

    $('.header .header-nav .headerNav-main .headerNavMain-menu li a').on('click', function() {
      $('.headerNav-main').toggleClass('__active');
      $('.headerNav-main').fadeToggle(300);
    });

  }

  
});


