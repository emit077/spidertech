/* observer for web page animations */
setTimeout(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((enrty) => {
      console.log(enrty);
      if (enrty.isIntersecting) enrty.target.classList.add("animate-show");
      // else enrty.target.classList.remove("animate-show");
    });
  });
  const ItemsSlideRight = document.querySelectorAll(".animate-slide-right");
  ItemsSlideRight.forEach((el) => observer.observe(el));

  const ItemsSlideLeft = document.querySelectorAll(".animate-slide-left");
  ItemsSlideLeft.forEach((el) => observer.observe(el));

  const ItemsSlideUp = document.querySelectorAll(".animate-slide-up");
  ItemsSlideUp.forEach((el) => observer.observe(el));

  const ItemsFillBgRight = document.querySelectorAll(".animate-fill-bg-right");
  ItemsFillBgRight.forEach((el) => observer.observe(el));
 
}, 250);

/* end of observer*/
