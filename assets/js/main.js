(function () {
  "use strict";

  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    var header_navbar = document.getElementById("header_navbar");
    var logo = document.querySelector("img#logo");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.setAttribute("src", "assets/images/logo-2.svg");
    } else {
      header_navbar.classList.remove("sticky");
      logo.setAttribute("src", "assets/images/logo.svg");
    }

    // show or hide the back-top-top button
    var backToTo = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "block";
    } else {
      backToTo.style.display = "none";
    }
  };

  // Get the navbar

  // for menu scroll
  var pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    var sections = document.querySelectorAll(".page-scroll");
    var scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (var i = 0; i < sections.length; i++) {
      var currLink = sections[i];
      var val = currLink.getAttribute("href");
      var refElement = document.querySelector(val);
      var scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("active");
  });

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );

  //===== glide tiny for testimonial

  // tns({
  //   container: ".testimonial_active",
  //   items: 1,
  //   slideBy: "page",
  //   autoplay: false,
  //   mouseDrag: true,
  //   gutter: 0,
  //   nav: true,
  //   controls: false,
  // });

  //WOW Scroll Spy
  var wow = new WOW({
    //disabled for mobile
    mobile: false,
  });
  wow.init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 1000) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = function () {
    scrollTo(document.documentElement);
  };
})();

// Title
let titleName = document.querySelector("title").outerText;
let menuHome = document.querySelector("#menu-home");
let menuAbout = document.querySelector("#menu-about");
let menuGallery = document.querySelector("#menu-gallery");
let menuContact = document.querySelector("#menu-contact");
let yearExperience = document.querySelector("#year-experience");
const currentYear = new Date();

if (titleName === "Home | In Motion Interiors") {
  menuHome.classList.add("active");
} else if (titleName === "About Us | In Motion Interiors") {
  menuAbout.classList.add("active");
} else if (titleName === "Gallery | In Motion Interiors") {
  menuGallery.classList.add("active");
} else if (titleName === "Contact | In Motion Interiors") {
  menuContact.classList.add("active");
}
console.log(titleName);

//Years of Experience

//Copyright
let copyrightFooter = document.querySelector("#copyright");
copyrightFooter.innerHTML = `&copy; Copyright In Motion Interiors ${currentYear.getFullYear()}. All Rights Reserved`;
//Owl Course
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

//Animsation

$(document).ready(function () {
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    touchSupport: true,
    loading: true,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "animsition-loading",
    unSupportCss: [
      "animation-duration",
      "-webkit-animation-duration",
      "-o-animation-duration",
    ],
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
  });
});
yearExperience.innerHTML = `<span>${
  currentYear.getFullYear() - 2013
}</span> Years Creating Beautiful Space`;