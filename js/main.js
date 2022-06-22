// import and initialize swiper slider
import "https://unpkg.com/swiper@8/swiper-bundle.min.js";
window.onload = () => {
  // control slider per view according to document width
  const width = document.body.getBoundingClientRect();
  let slidePerView = 2.5;
  if(width.width < 480) slidePerView = 1.5;
  // slider init
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: `${slidePerView}`,
    spaceBetween: 15,
    freeMode: true,
  }); 
}

// open & close burger menu
let open = false;
window.onclick = (e) => {
  const openBtn = document.getElementById("open-menu-btn");
  const closeBtn = document.getElementById("close-menu-btn");
  const burgerContent = document.querySelector(".burger-content");

  let openTarget = e.target == openBtn;
  let closeTarget = e.target == closeBtn;
  let closeInnerTarget = e.target == burgerContent;

  if (!open) {
    if (e.target === openBtn) {
      burgerContent.style.right = "0px";
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
      open = true;
    }
  } else if ((open && closeTarget) || !closeInnerTarget) {
    burgerContent.style.right = "-280px";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
    open = false;
  }
};
