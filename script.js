console.log("complete");
console.log($(window).width());
console.log($(window).height());

let wWidth = $(window).width();
let wHeight = $(window).height();

console.log(wWidth);
console.log(wHeight);

console.log("complete");

$(document).on("mousemove", function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();

  $(".cat-img").css({
    left: mouseX - imgWidth + "px",
    top: mouseY - imgHeight + "px",
  });
});

$(document).on("mousemove", function (event) {
  $("#status").html(event.pageX + "," + event.pageY);
  $(".box").css("width", event.pageX);
  $(".box").css("height", event.pageY);
});
