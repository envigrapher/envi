// Splitting();
$(document).ready(function () {
  console.log("ready!");
  var tabView = $(".nav span").get();
  var tabViewMobile = $(".nav-mobile span").get();
  tabView.forEach((element, index) => {
    element.addEventListener("click", function () {
      $(".nav span").removeClass("active");
      element.classList.add("active");
      var contentShow = document.querySelectorAll(".contentShow > *")[index];
      let contentInActive = document.querySelector(".contentShow .active");
      contentInActive.classList.remove("active");
      contentShow.classList.add("active");
    });
  });
  tabViewMobile.forEach((element, index) => {
    element.addEventListener("click", function () {
      $(".nav-mobile span").removeClass("active");
      element.classList.add("active");
      var contentShow = document.querySelectorAll(".contentShow > *")[index];
      let contentInActive = document.querySelector(".contentShow .active");
      contentInActive.classList.remove("active");
      contentShow.classList.add("active");
      $(".hamburger-btn").removeClass("active");
      $(".hidden-nav").removeClass("active-nav ");
    });
  });
  $(".hamburger-btn").on("click", function () {
    $(".hamburger-btn").toggleClass("active");
    $(".hidden-nav").toggleClass("active-nav ");
  });
  $(".all_project-child > *").on("click", function () {
    $(".slider").addClass("activeSlider");
    $("body").addClass("removeScroll");
    var className = this.classList;
    className.contains("ascentia")
      ? $(".ascentia").addClass("showSlider")
      : $(".ascentia").removeClass("showSlider");
      className.contains("stories")
      ? $(".stories").addClass("showSlider")
      : $(".stories").removeClass("showSlider");
      className.contains("vista")
      ? $(".vista").addClass("showSlider")
      : $(".vista").removeClass("showSlider");
      className.contains("hoarient")
      ? $(".hoarient").addClass("showSlider")
      : $(".hoarient").removeClass("showSlider");
    className.contains("auguda")
      ? $(".auguda").addClass("showSlider")
      : $(".auguda").removeClass("showSlider");
    className.contains("bemind")
      ? $(".bemind").addClass("showSlider")
      : $(".bemind").removeClass("showSlider");
    className.contains("lixi")
      ? $(".lixi").addClass("showSlider")
      : $(".lixi").removeClass("showSlider");
      className.contains("zenyum")
      ? $(".zenyum").addClass("showSlider")
      : $(".zenyum").removeClass("showSlider");
    className.contains("uve")
      ? $(".uve").addClass("showSlider")
      : $(".uve").removeClass("showSlider");
    className.contains("kadon")
      ? $(".kadon").addClass("showSlider")
      : $(".kadon").removeClass("showSlider");
  });
  $(".close-mobile").on("click", function () {
    $(".slider").removeClass("activeSlider");
    $("body").removeClass("removeScroll");
  });
  $(".listImage").flickity({
    // options
    fade: true,
    initialIndex: 0,
    cellAlign: "center",
    contain: true,
    prevNextButtons: true,
    wrapAround: false,
    draggable: true,
    dragThreshold: 50,
    lazyLoad: 1,
  });
  //escape to close information
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".slider").removeClass("activeSlider");
      $("body").removeClass("removeScroll");
    }
  });
  checkLogoLoaded();
});
function checkLogoLoaded() {
  // Images loaded is zero because we're going to process a new set of images.
  var imagesLoaded = 0;
  // Total images is still the total number of <img> elements on the page.
  var totalImages = $(".typeImgLogo").length;

  // Step through each image in the DOM, clone it, attach an onload event
  // listener, then set its source to the source of the original image. When
  // that new image has loaded, fire the imageLoaded() callback.
  $(".typeImgLogo").each(function (idx, img) {
    $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
  });

  // Do exactly as we had before -- increment the loaded count and if all are
  // loaded, call the allImagesLoaded() function.
  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded == totalImages) {
      allImagesLoaded();
    }
  }

  function allImagesLoaded() {
    setTimeout(function () {
      $(".loading-content img").addClass("showContent");
    }, 3000);
    setTimeout(function () {
      $(".loading-img").addClass("moveOut");
      $(".loading-content").addClass("activeContent");
    }, 5000);
    setTimeout(function () {
      $(".loading").addClass("hideLoading");
    }, 11000);
  }
}
