$(document).ready(function () {
  $(".accordian-link").click(function (e) {
    e.preventDefault();

    if (!$(this).hasClass("active")) {
      $(".accordian p").slideUp();
      $(this).next("p").slideToggle();
      $(".accordian-link").removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).next("p").slideToggle();
      $(this).removeClass("active");
    }
  });

  $(".tab-link").click(function (e) {
    e.preventDefault();
    const id = $(this).parent().index() + 1;

    $(".tab-link").removeClass("active");
    $(this).addClass("active");
    $(".tab-body .tab").fadeOut(0);
    $(`.tab-body .tab:nth-child(${id})`).fadeIn();
  });
});
