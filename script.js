window.addEventListener("scroll", function (e) {
  const target = document.querySelector("#sign");
  //   const size = target.getBoundingClientRect();
  var scrolled = window.pageYOffset;
  var rate = 100 - scrolled * 0.1;

  console.log(rate);

  target.style.transform = "scale(" + rate + "%)";
});
