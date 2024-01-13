$(document).ready(function () {
  // loader
  // setTimeout(function () {
  //   $(window).attr("location", "main.html");
  // }, 1000);
  // logo
  $("#logo").click(function (e) {
    e.preventDefault();
    location.reload();
  });
  // search-box
  $(".search-btn").click(function () {
    $(".wrapper").addClass("active");
    $(this).css("display", "none");
    $(".search-data").fadeIn(500);
    $(".close-btn").fadeIn(500);
    $(".search-data .line").addClass("active");
    setTimeout(function () {
      $("input").focus();
      $(".search-data label").fadeIn(500);
      $(".search-data span").fadeIn(500);
    }, 800);
  });
  $(".close-btn").click(function () {
    $(".wrapper").removeClass("active");
    $(".search-btn").fadeIn(800);
    $(".search-data").fadeOut(500);
    $(".close-btn").fadeOut(500);
    $(".search-data .line").removeClass("active");
    $("input").val("");
    $(".search-data label").fadeOut(500);
    $(".search-data span").fadeOut(500);
  });
  //carousel
  // $(".carousel").mouseenter(function () {
  //   setTimeout(function () {
  //     $(".carousel-item").fadeToggle("slow");
  //   }, 2000);
  // });
});
