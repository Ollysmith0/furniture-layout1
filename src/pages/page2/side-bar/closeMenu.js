let closeMenu = () => {
  document.getElementById("close-btn").onclick = () => {
    document.getElementById("nav-menu").classList.remove("list-m");
    document.getElementById("page1").classList.remove("overlay2");
    document.getElementById("menu").style.zIndex = "2";
    document.getElementById("overlay2").style.zIndex = "0";
    document.getElementById("overlay2").style.opacity = "0";
  };
};

export default closeMenu;
