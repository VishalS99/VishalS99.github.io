import { exp, skills, projects, bio, resume_url, photo_body } from "./data.js";

function populateExperience(data) {
  $(".exp-1").html(data["role"]);
  let text =
      data["company"] +
      " <span>&#8728;</span> " +
      data["type"] +
      " <span>&#8728;</span> " +
      data["location"] +
      " <span>&#8728;</span> " +
      data["duration"];
  $(".exp-2").html(text);
  $(".exp-logo").attr("src", data["logo"]);
  $(".exp-desc").empty();
  $(".exp-tech").empty();
  data["desc"].forEach((d) => {
    $(".exp-desc").append(
      `
      <li class="list-group-item">
        <span>&#8594;</span> ${d}
      </li>
      `
    );
  });
  $(".exp-desc").append(`<li class="list-group-item exp-tech"></li>`);
  data["tech"].forEach((d) => {
    $(".exp-tech").append(
      `
          <div class="bubble">${d}</div>
        `
    );
  });
}

$(document).ready(() => {
  $("#bio").html(bio);
  populateExperience(exp[0])
  $(".resume").attr("href", resume_url);
  $(".hobby").html(photo_body)
  if($(window).width() > 767) {
    $('.top-nav').removeClass('fixed-top');
  }else{
    $('.top-nav').addClass('fixed-top');
  }
  $(window).on('resize', function() {
    if($(window).width() > 767) {
      $('.top-nav').removeClass('fixed-top');
    }else{
      $('.top-nav').addClass('fixed-top');
    }
  })
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

  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });

  exp.map((e, index) => {
    $(".exp-nav").append(
      `
      <li class="nav-item m-auto text-center exp-link" data-exp="${index}">
        <a class="nav-link" href="#">${index + 1}.</a>
      </li>
      `
    );
    if (index == 0) {
      $(".exp-link a").addClass("exp-active");
    }
  });

  $(".exp-link").on("click", function () {
    let data_id = $(this).attr("data-exp");
    populateExperience(exp[data_id])
    $(".exp-link a").removeClass("exp-active");
    $(".exp-link a").css("color", "#2680c5");
    $(this).children().addClass("exp-active");
  });

  projects.forEach((d, ind) => {
    let button =
      d["link"] != ""
        ? `<a class="btn btn-outline-info" target="_blank" href='${d["link"]}'>Code</a></div></div>`
        : `</div></div>`;
    $(".projects-div .row").append(
      `
      <div class="col-4">
        <div class="proj-card">
          <h5>
            ${d["title"]}
          </h5>
          <p>
            ${d["desc"]}
          </p>
          ${button}
      `
    );
    $(".mobile-proj").append(
      `<li class="list-group-item"><span>${
        ind + 1
      }.</span> <a class="proj-list" ${!d["link"]? `style="text-decoration: none; pointer-events: none"`: `target="_blank"`}
       href=${d["link"] ? d["link"] : "#"}>${d["title"]}</li>`
    );
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
