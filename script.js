(function makeCarousel(d) {
  "use strict";

  const parallaxEls = d.querySelectorAll(".parallax");
  var observers = "";
  let options = {
    rootMargin: "0px",
    threshold: 1
  };

  //lets add the observer element dynamically.
  parallaxEls.forEach((para) => {
    var newEl = d.createElement("div");
    newEl.classList.add("myObserver");
    para.appendChild(newEl);
  });

  observers = d.querySelectorAll(".myObserver");

  function calculateVisibleDiv(entries) {
    entries.forEach((entry) => {
      entry.target
        .closest(".parallax")
        .classList.toggle("active", entry.isIntersection);
    });
  }
  let observer = new IntersectionObserver(calculateVisibleDiv, options);

  observers.forEach((para) => {
    observer.observe(para);
  });
})(document);