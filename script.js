window.addEventListener("scroll", function (e) {
  const target = document.querySelector("#sign");

  var scrolled = window.pageYOffset;
  var rate = 40 - scrolled * 0.5;

  console.log(scrolled);

  target.style.transform = "scale(" + rate + "%)";
});
