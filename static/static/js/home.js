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
      movie_play_area($('.movie-pc'));
    } else if(isMobileSize){
      movie_play_area($('.movie-sp'));
    }

  });

  // food movie
  function movie_play_area(target) {
    // スクロール位置を取得
    var scrollTop = $(window).scrollTop();
    var scrollBtm = scrollTop + $(window).height();

    // 対象要素の位置を取得
    var targetTop = target.offset().top;
    var targetBtm = targetTop + target.height();
    var movieBtm = targetBtm - 100;

    // 対象要素のパララックス
    var offset_movie = movieBtm - $(window).scrollTop();
    var moviePosition = offset_movie / 3; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
    target.css('top', '-' + moviePosition + 'px');

    // 画面内にある場合
    if(scrollBtm > targetTop && scrollTop < targetBtm) {
      target.get(0).play();
    } else {
      target.get(0).pause();
    }
  }


});


