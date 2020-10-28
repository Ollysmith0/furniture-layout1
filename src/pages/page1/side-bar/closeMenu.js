let closeMenu = () => {
  document.getElementById("close-btn").onclick = () => {
    document.getElementById("nav-menu").classList.remove("list-m");
    document.getElementById("menu").style.zIndex = "2";
    document.getElementById("overlay2").style.zIndex = "0";
    document.getElementById("overlay2").style.opacity = "0";
    document.getElementById("page1").style.zIndex = "1";
  };
};

export default closeMenu;
