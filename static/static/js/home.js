$(function() {
  $windowWidth = window.innerWidth;
  $breakPointA = 1150;
  isMobileSize = ($windowWidth < $breakPointA);
  isPcSize = ($windowWidth > $breakPointA);



  $header = $('.header'),
  headerHeight = $header.outerHeight(),
  startPos = 0;

  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop(); // スクロール上部の位置
    let areaTop = $("#lead").offset().top; // 対象エリアの上部の位置
    let areaBottom = areaTop + $("#lead").innerHeight(); // 対象エリアの下部の位置

    if (scrollTop > areaTop) {
      $('.header').fadeIn();
      if (isMobileSize) {
        $('.contents-header').fadeIn();
      }
    } else {
      $('.header').fadeOut();
      if (isMobileSize) {
        $('.contents-header').fadeOut();
      }
    }

    //ブラウザの表示域に表示されたときに実行する処理
    if(isPcSize){
      movie_play_area_pc($('.movie-pc'));
    } else if(isMobileSize){
      movie_play_area_sp($('.movie-sp'));
    }

  });

  // food movie pc
  function movie_play_area_pc(target) {
    // スクロール位置を取得
    var scrollTop = $(window).scrollTop();
    var scrollBtm = scrollTop + $(window).height();

    // 対象要素の位置を取得
    var targetTop = target.offset().top;
    var targetBtm = targetTop + target.height();

    // 画面内にある場合
    if(scrollBtm > targetTop && scrollTop < targetBtm) {
      $('.movie_pc').get(0).play();
    } else {
      $('.movie_pc').get(0).pause();
    }
  }

  // food movie sp
  function movie_play_area_sp(target) {
    // スクロール位置を取得
    var scrollTop = $(window).scrollTop();
    var scrollBtm = scrollTop + $(window).height();

    // 対象要素の位置を取得
    var targetTop = target.offset().top;
    var targetBtm = targetTop + target.height();

    // 画面内にある場合
    if(scrollBtm > targetTop && scrollTop < targetBtm) {
      $('.movie-sp').get(0).play();
    } else {
      $('.movie-sp').get(0).pause();
    }
  }


});


