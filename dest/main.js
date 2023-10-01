// Splitting();
$(document).ready(function () {
  console.log("ready!");
  // handle nav menu
  var tabView = $(".nav span").get();
  var tabViewMobile = $(".nav-mobile span").get();
  tabView.forEach((element, index) => {
    element.addEventListener("click", function () {
      if (index == 3) {
        $(".nav").addClass("activeContact");
        $(".logo").addClass("activeLogoContact");
      }
      else{
        $(".nav").removeClass("activeContact");
        $(".logo").removeClass("activeLogoContact");
      }
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
      if (index == 3) {
        $(".logo").addClass("activeLogoContact");
        $(".hamburger-btn").addClass("activeContactBtn");
      }
      else{
        $(".logo").removeClass("activeLogoContact");
        $(".hamburger-btn").removeClass("activeContactBtn");
      }
      element.classList.add("active");
      var contentShow = document.querySelectorAll(".contentShow > *")[index];
      let contentInActive = document.querySelector(".contentShow .active");
      contentInActive.classList.remove("active");
      contentShow.classList.add("active");
      $(".hamburger-btn").removeClass("active");
      $(".hidden-nav").removeClass("active-nav ");
    });
  });
  // handle click hambuger button
  $(".hamburger-btn").on("click", function () {
    $(".hamburger-btn").toggleClass("active");
    $(".hidden-nav").toggleClass("active-nav ");
  });
  // handle click project
  $(".all_project-child > *").on("click", function () {
    $(".slider").addClass("activeSlider");
    $("body").addClass("removeScroll");
    var className = this.classList;
      className.contains("ascentia")
      ? $(".ascentia").addClass("showSlider")
      : $(".ascentia").removeClass("showSlider");
      className.contains("hola")
      ? $(".hola").addClass("showSlider")
      : $(".hola").removeClass("showSlider");
      className.contains("stories")
      ? $(".stories").addClass("showSlider")
      : $(".stories").removeClass("showSlider");
      className.contains("vista")
      ? $(".vista").addClass("showSlider")
      : $(".vista").removeClass("showSlider");
      className.contains("normad")
      ? $(".normad").addClass("showSlider")
      : $(".normad").removeClass("showSlider");
      className.contains("misssaigon")
      ? $(".misssaigon").addClass("showSlider")
      : $(".misssaigon").removeClass("showSlider");
      className.contains("misssaigon2")
      ? $(".misssaigon2").addClass("showSlider")
      : $(".misssaigon2").removeClass("showSlider");
      className.contains("hoarient")
      ? $(".hoarient").addClass("showSlider")
      : $(".hoarient").removeClass("showSlider");
      className.contains("hoarient2")
      ? $(".hoarient2").addClass("showSlider")
      : $(".hoarient2").removeClass("showSlider");
      className.contains("auguda")
      ? $(".auguda").addClass("showSlider")
      : $(".auguda").removeClass("showSlider");
      className.contains("bemind")
      ? $(".bemind").addClass("showSlider")
      : $(".bemind").removeClass("showSlider");
      className.contains("diamond")
      ? $(".diamond").addClass("showSlider")
      : $(".diamond").removeClass("showSlider");
      className.contains("lixi")
      ? $(".lixi").addClass("showSlider")
      : $(".lixi").removeClass("showSlider");
      className.contains("zenyum")
      ? $(".zenyum").addClass("showSlider")
      : $(".zenyum").removeClass("showSlider");
      className.contains("uve")
      ? $(".uve").addClass("showSlider")
      : $(".uve").removeClass("showSlider");
      className.contains("dinhdoclap")
      ? $(".dinhdoclap").addClass("showSlider")
      : $(".dinhdoclap").removeClass("showSlider");
      className.contains("kadon")
      ? $(".kadon").addClass("showSlider")
      : $(".kadon").removeClass("showSlider");
      className.contains("ttd")
      ? $(".ttd").addClass("showSlider")
      : $(".ttd").removeClass("showSlider");
      className.contains("annam")
      ? $(".annam").addClass("showSlider")
      : $(".annam").removeClass("showSlider");
      className.contains("ohhi")
      ? $(".ohhi").addClass("showSlider")
      : $(".ohhi").removeClass("showSlider");
      className.contains("prestige")
      ? $(".prestige").addClass("showSlider")
      : $(".prestige").removeClass("showSlider");
      className.contains("meihome")
      ? $(".meihome").addClass("showSlider")
      : $(".meihome").removeClass("showSlider");
  });
  $(".close-mobile").on("click", function () {
    $(".slider").removeClass("activeSlider");
    $("body").removeClass("removeScroll");
  });
  // handle close slider
  $(".slider__close").on("click", function () {
    $(".slider").removeClass("activeSlider");
    $("body").removeClass("removeScroll");
    if($(".all_project-child > *").hasClass("ascentia")){
      $(".ascentia").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("hola")){
      $(".hola").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("stories")){
      $(".stories").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("vista")){
      $(".vista").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("normad")){
      $(".normad").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("misssaigon")){
      $(".misssaigon").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("misssaigon2")){
      $(".misssaigon2").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("hoarient")){
      $(".hoarient").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("hoarient2")){
      $(".hoarient2").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("auguda")){
      $(".auguda").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("bemind")){
      $(".bemind").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("diamond")){
      $(".diamond").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("lixi")){
      $(".lixi").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("zenyum")){
      $(".zenyum").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("uve")){
      $(".uve").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("dinhdoclap")){
      $(".dinhdoclap").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("kadon")){
      $(".kadon").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("ttd")){
      $(".ttd").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("annam")){
      $(".annam").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("ohhi")){
      $(".ohhi").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("prestige")){
      $(".prestige").removeClass("showSlider");
    }
    if($(".all_project-child > *").hasClass("meihome")){
      $(".meihome").removeClass("showSlider");
    }
  });
  $(".listImage").flickity({
    // options
    fade: true,
    initialIndex: 0,
    cellAlign: "center",
    contain: true,
    prevNextButtons: true,
    wrapAround: true,
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
    }, 1000);
    setTimeout(function () {
      $(".loading-img").addClass("moveOut");
      $(".loading-content").addClass("activeContent");
    }, 3000);
    setTimeout(function () {
      $(".loading").addClass("hideLoading");
    }, 9000);
  }
}
