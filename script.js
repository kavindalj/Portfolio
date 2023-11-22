const target = document.querySelector("#sign");

target.style.transform =
  "scale(" + 280 + "%) translate(" + 35 + "%," + 95 + "%)";

window.addEventListener("scroll", function (e) {
  var scrolled = window.pageYOffset;
  var rate;

  if (scrolled > 430) {
    target.style.transform =
      "scale(" + 50 + "%) translate(" + -50 + "%," + -100 + "%)";
  }

  if (scrolled <= 430) {
    rate = 280 - scrolled * 0.5349;
    x = 35 - 0.1977 * scrolled;
    y = 95 - 0.4535 * scrolled;
    target.style.transform =
      "scale(" + rate + "%) translate(" + x + "%," + y + "%)";

    console.log(scrolled);
  }
});
