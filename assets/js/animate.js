/* observer for web page animations */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((enrty) => {
      console.log(enrty.isIntersecting);
      if (enrty.isIntersecting) enrty.target.classList.add("animate-show");
      else enrty.target.classList.remove("animate-show");
    });
  });
  const hiddenItems = document.querySelectorAll(".animate-hidden");
  hiddenItems.forEach((el) => observer.observe(el));
  
  /* end of observer*/