//Script for accordion
  $("div.accordion").hide();
  $("h4[class*=accordion-]").click(function(){
    var target = this;
    $(target).toggleClass("active");
    $(target).next("div.accordion").slideToggle(400, function(){
      if ($(target).offset().top < $(window).scrollTop()) {
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 500);
      };
    });
    $("h4[class*=accordion-]").not(target).removeClass("active");
    $("h4[class*=accordion-]").not(target).next("div.accordion").slideUp();
  });

  //Open if URL anchor
  $(document).ready(function() {
    if (window.location.hash != null) {
      var target = $(window.location.hash);
      $(target).toggleClass("active");
      $(target).next("div.accordion").slideToggle(400, function(){
        if ($(target).offset().top < $(window).scrollTop()) {
          $('html, body').animate({
            scrollTop: $(target).offset().top
          }, 500);
        };
      });
      $("h4[class*=accordion-]").not(target).removeClass("active");
      $("h4[class*=accordion-]").not(target).next("div.accordion").slideUp();
    };
  });

