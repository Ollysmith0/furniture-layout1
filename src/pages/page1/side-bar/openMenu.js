let openMenu = () => {
  document.getElementById("menu-btn").onclick = () => {
    document.getElementById("nav-menu").classList.add("list-m");
    document.getElementById("menu").style.zIndex = "4";
    document.getElementById("overlay2").style.zIndex = "3";
    document.getElementById("overlay2").style.opacity = ".5";
    document.getElementById("page1").style.zIndex = "auto";
  };
};

export default openMenu;
