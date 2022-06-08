const skills = ["C++", "Javascript", "Python"];
$(document).ready(() => {
  $(".main").scroll((e) => {
    if ($(".main").scrollTop() < $(window).height()) {
      $(".nav-link").removeClass("active");
      $(".nav-link").addClass("navitems");
      $(".me").removeClass("navitems");
      $(".me").addClass("active");
    } else if ($(".main").scrollTop() < $(window).height() * 2) {
      $(".nav-link").removeClass("active");
      $(".nav-link").addClass("navitems");
      $(".exp").removeClass("navitems");
      $(".exp").addClass("active");
    } else if ($(".main").scrollTop() < $(window).height() * 3) {
      $(".nav-link").removeClass("active");
      $(".nav-link").addClass("navitems");
      $(".edu").removeClass("navitems");
      $(".edu").addClass("active");
    } else if ($(".main").scrollTop() < $(window).height() * 4) {
      $(".nav-link").removeClass("active");
      $(".nav-link").addClass("navitems");
      $(".proj").removeClass("navitems");
      $(".proj").addClass("active");
    } else if ($(".main").scrollTop() < $(window).height() * 5) {
      $(".nav-link").removeClass("active");
      $(".nav-link").addClass("navitems");
      $(".photo").removeClass("navitems");
      $(".photo").addClass("active");
    }
  });
  $(".me").click((e) => {
    $(".nav-link").removeClass("active");
    $(".nav-link").addClass("navitems");
    $(".me").removeClass("navitems");
    $(".me").addClass("active");
    $(".main").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
  $(".exp").click((e) => {
    $(".nav-link").removeClass("active");
    $(".nav-link").addClass("navitems");
    $(".exp").removeClass("navitems");
    $(".exp").addClass("active");
    $(".main").animate(
      {
        scrollTop: $(window).height(),
      },
      500
    );
  });
  $(".edu").click((e) => {
    $(".nav-link").removeClass("active");
    $(".nav-link").addClass("navitems");
    $(".edu").removeClass("navitems");
    $(".edu").addClass("active");
    $(".main").animate(
      {
        scrollTop: $(window).height() * 2,
      },
      500
    );
  });
  $(".proj").click((e) => {
    $(".nav-link").removeClass("active");
    $(".nav-link").addClass("navitems");
    $(".proj").removeClass("navitems");
    $(".proj").addClass("active");
    $(".main").animate(
      {
        scrollTop: $(window).height() * 3,
      },
      500
    );
  });
  $(".photo").click((e) => {
    $(".nav-link").removeClass("active");
    $(".nav-link").addClass("navitems");
    $(".photo").removeClass("navitems");
    $(".photo").addClass("active");
    $(".main").animate(
      {
        scrollTop: $(window).height() * 4,
      },
      500
    );
  });
  skills.forEach((e) => {
    $(".skills").append(`<div class="bubble">${e}</div>`);
  });
});
