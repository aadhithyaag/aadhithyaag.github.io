(function ($jq) {
  $jq(document).ready(function () {
    // Smoothscroll script
    $jq(".smooth-scroll").click(function (e) {
      e.preventDefault();
      var dis = $jq(this),
        target = dis.attr("href"),
        offset = parseInt($jq(target).offset().top),
        header = $jq("#Top");
      dis.addClass("active").parent().siblings().find(".smooth-scroll").removeClass("active");
      $jq('html,body').stop().animate({ scrollTop: offset }, 200);
      $jq(".menu-toggle").trigger("click");
    });
    //  PROJECTS CAROUSEL HOOK
    var owl = $jq('#project-details');
    owl.owlCarousel({
      loop: false,
      center: true,
      items: 3,
      margin: 0,
      autoplay: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      },
      navigation: true,
      navigationText: true
    });
  });
})(jQuery)