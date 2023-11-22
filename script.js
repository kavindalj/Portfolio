window.addEventListener("scroll", function (e) {
  const target = document.querySelector("#sign");
  var scrolled = window.pageYOffset;
  var rate;

  console.log(scrolled, rate);

  if (scrolled > 456.01) {
    target.style.transform = "scale(11%)";
  }

  if (scrolled <= 456.0) {
    rate = 100 - scrolled * 0.1974;
    target.style.transform = "scale(" + rate + "%)";
  }
});
