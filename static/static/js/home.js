$(function() {
  $windowWidth = window.innerWidth;
  $breakPointA = 1150;
  isMobileSize = ($windowWidth < $breakPointA);
  isPcSize = ($windowWidth > $breakPointA);

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
  });
});


