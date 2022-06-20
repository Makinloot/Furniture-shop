// open & close burger menu
let open = false;
window.onclick = (e) => {
  const openBtn = document.getElementById("open-menu-btn");
  const closeBtn = document.getElementById("close-menu-btn");
  const burgerContent = document.querySelector(".burger-content");

  let openTarget = e.target == openBtn;
  let closeTarget = e.target == closeBtn;
  let closeInnerTarget = e.target == burgerContent;

  if (!open && openTarget) {
    console.log("red");
    burgerContent.style.right = "0px";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
    open = true;
  } else if ((open && closeTarget) || !closeInnerTarget) {
    console.log("black");
    burgerContent.style.right = "-280px";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
    open = false;
  }
};
