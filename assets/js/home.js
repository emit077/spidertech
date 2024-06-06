$(document).ready(function () {
  // const myCarouselElement = document.querySelector("#testimonialCarousel");
  // const carousel = new bootstrap.Carousel(myCarouselElement, {
  //   interval: 200,
  //   touch: false,
  // });

  /* counter effect*/
  let isVisited = false;
  window.addEventListener("scroll", (event) => {
    if (!isVisited && isOnScreen(document.getElementById("feature-stats"))) {
      isVisited = true;
      let data = [5, 10, 1000000];
      $(".counting").each(function (i) {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: data[i],
            },
            {
              duration: 1200,
              easing: "swing",
              step: function (now) {
                now = Number(Math.ceil(now)).toLocaleString("inr");
                $(this).text(now);
              },
            }
          );
      });
    } else if (!isOnScreen(document.getElementById("feature-stats")))
      isVisited = false;
  });
});

function isOnScreen(element) {
  let y = element.offsetTop;
  let h = element.offsetHeight;
  let sh = $(window).height();
  let st = $(window).scrollTop();
  return y < sh + st && y > st - h;
}

//
$(document).ready(function () {
  let domain_list = [
    {
      title: "Education",
      img_url: "../../assets/icons/domain/book.svg",
    },
    {
      title: "Fintech",
      img_url: "../../assets/icons/domain/calculator.svg",
    },
    {
      title: "E-Commerce",
      img_url: "../../assets/icons/domain/shop.svg",
    },
    {
      title: "Delivery",
      img_url: "../../assets/icons/domain/truck.svg",
    },
    {
      title: "Hospitality",
      img_url: "../../assets/icons/domain/building.svg",
    },
    {
      title: "Social Media",
      img_url: "../../assets/icons/domain/social.svg",
    },
  ];
  setTimeout(function () {
    domain_list.forEach((item) => {
      $("#DomainItemContainer").append(
        `<div class="col-md-2 col-6 py-0 py-md-4">
      <div class="text-center">
          <img class="user-profile-img drop-shadow" src="${item.img_url}" alt="" height="90px" />
          <h4 class="mt-3 text-gray">${item.title}</h4>
      </div>
  </div>`
      );
    });
  }, 200);

  // testimonial

  testimonial_List = [
    {
      name: "Suyash Sharma",
      company: "Tutors Factory",
      img_url: "../../assets/images/testimonial/user-testimonial.png",
      text: `Spider Tech truly revolutionized our operations. Their tailored software solutions not only met but surpassed our needs, enhancing productivity and scalability. Exceptional service, highly recommended for any business seeking cutting-edge technology!`,
    },
    //  {
    //   name: "Amitesh Singh",
    //   img_url: "../../assets/images/testimonial/user-testimonial.png",
    //   text: `There are many variations of
    //   passages of Lorem Ipsum
    //   available, but the majority have suffered alteration in some form, by injected humour,
    //   or randomised words which don't look even slightly believable. If you are going to use a
    //   passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
    //   the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
    //   predefined chunks as necessary.`,
    // },
  ];
  setTimeout(function () {
    testimonial_List.forEach((item, i) => {
      $("#testimonialContainer").append(
        ` <div class="carousel-item  px-md-5 px-0 ${
          i == 0 ? "active" : ""
        }" data-bs-interval="2000">
      <div class="row">
          <div class="col-md-3">
              <img class="user-profile-img" src="${item.img_url}"
                  alt="" />
          </div>
          <div class="col-md-9">
              <img class="quote-icon px-2 py-3 mb-2" src="../../assets/icons/quotes.svg" alt="" />
              <h4 class="d-flex align-items-center"
                  style="font-weight: 400;color: rgb(var(--secondary));"> 
                  ${item.text}
              </h4>
              <hr>
              <div>
                  <h5 class="mb-0" style="color: rgb(var(--secondary));"> ${
                    item.name
                  }</h5>
                  <p class="small text-muted"> ${item.company}</p>
              </div>
          </div>
      </div>
  </div>`
      );
    });
  }, 200);
});
