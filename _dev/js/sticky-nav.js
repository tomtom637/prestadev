document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector(".header-top");
  let currentNavOffset = nav.offsetTop;

  function fixedNav() {
    const scrollBody = document.body.scrollTop || document.documentElement.scrollTop;
    const wrapper = document.querySelector("#wrapper");
    if (scrollBody > currentNavOffset) {
      nav.classList.add("fixed-nav");
      if(window.getComputedStyle(nav).position === 'fixed') {
        wrapper.style.marginTop = nav.offsetHeight + "px";
      }
    } else {
      wrapper.style.marginTop = "0";
      nav.classList.remove("fixed-nav");
      currentNavOffset = nav.offsetTop;
    }
  }
  window.onscroll = fixedNav;
});
