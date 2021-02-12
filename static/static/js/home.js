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

    if (isPcSize) {
      var thisOffset;
      thisOffset = $('.pc-nav-scrollup').offset().top + $('.pc-nav-scrollup').outerHeight();
      if ($(window).scrollTop() + $(window).height() > thisOffset + 200) {
        var value = $(this).scrollTop();
        if (value > startPos && value > headerHeight) {
          $header.css('top', '-' + headerHeight + 'px');
        } else {
          $header.css('top', '0');
        }
        startPos = value;
      } else {
        $header.css('top', '0');
      }
    }

  });
});


