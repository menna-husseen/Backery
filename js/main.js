let y = $("#about").offset().top;
$(window).scroll(function () {
  let x = $(window).scrollTop();
  if (x > y) {
    $(".navbar").css("backgroundColor", "gray");
    $("#btnUp").fadeIn();
  } else {
    $(".navbar").css("backgroundColor", "transparent");
    $("#btnUp").fadeOut();
  }
});

$("#btnUp").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
});


$(document).ready(function () {
  $(".spinner").fadeOut(1500, function () {
    $("#loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
    });
  });
});

let colorboxes = $(".color-box");
colorboxes.eq(0).css("background-color", "lightgreen");
colorboxes.eq(1).css("background-color", "teal");
colorboxes.eq(2).css("background-color", "#888");
colorboxes.eq(3).css("background-color", "orange");


$("#slideBar").css('left', '-147.969px');

$("#slideBar i").click(function () {
  let sideBarInnerWidth = $(".slide-inner").innerWidth();

  if (  $("#slideBar").css('left')=='0px') {
    $("#slideBar").animate({ left:-sideBarInnerWidth }, 1000);

  } else {
    $("#slideBar").animate({ left:0}, 1000);
  }
});
colorboxes.click(function(eventInfo){
 let bgColor= $(eventInfo.target).css('backgroundColor');

 $('h1,h2,h3,h4,h5').css('color',bgColor)
})

