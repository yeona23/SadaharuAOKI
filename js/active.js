$(".hamburger").click(function () {
  $(".nav_360").addClass("active");
  $("body").addClass(".notScroll");
  $(".shadow").show();
});
$(".shadow").click(function () {
  $("body").removeClass(".notScroll");
  $(".nav_360").removeClass("active");
  $(this).hide();
});
