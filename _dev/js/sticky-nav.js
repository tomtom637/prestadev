const nav = document.querySelector(".header-top");
let currentNavOffset = nav.scrollTop;

function fixedNav() {
  const scrollBody = document.body.scrollTop || document.documentElement.scrollTop;
  const wrapper = document.querySelector("#wrapper");
  if (scrollBody > currentNavOffset) {
    wrapper.style.paddingTop = nav.offsetHeight + "px";
    nav.classList.add("fixed-nav");
  } else {
    wrapper.style.paddingTop = "0";
    nav.classList.remove("fixed-nav");
    currentNavOffset = nav.offsetTop;
  }
}
window.onscroll = fixedNav;