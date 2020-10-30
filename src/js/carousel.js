let sources = [
  {
    url: "/images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    para:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    url: "/images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    para:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    url: "/images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    para:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let i = 0;
let carousel = (e) => {
  let next = document.getElementById("next");
  let nextC = document.getElementById("next-content");
  let back = document.getElementById("back");
  let backC = document.getElementById("back-content");
  let image0 = document.getElementById("imageDesktop1");
  let image1 = document.getElementById("imageDesktop2");
  let image2 = document.getElementById("imageDesktop3");
  let title = document.getElementById("title");
  let para = document.getElementById("para");
  let arr = [image0, image1, image2];
  if (e.target.className === "left-arrow") {
    if (i > 0) {
      --i;
      back.style.pointerEvents = "auto";
      backC.style.pointerEvents = "auto";
    } else {
      back.style.pointerEvents = "none";
      backC.style.pointerEvents = "none";
      i = 0;
      arr[i].style.opacity = "1";
      arr[i].style.transform = "scale(1)";
      return;
    }
    if (i === 0) {
      back.style.pointerEvents = "none";
      backC.style.pointerEvents = "none";
      next.style.pointerEvents = "auto";
      nextC.style.pointerEvents = "auto";
    } else if (i > 0) {
      next.style.pointerEvents = "auto";
      nextC.style.pointerEvents = "auto";
    }
    let result = [...arr];
    result.splice(i, 1);
    arr[i].style.transform = "scale(1)";
    arr[i].style.opacity = "1";
    for (let n = 0; n < result.length; n++) {
      result[n].style.opacity = "0";
      result[n].style.transform = "scale(.9)";
    }
    title.innerHTML = sources[i].title;
    para.innerHTML = sources[i].para;
  } else if (e.target.className === "right-arrow") {
    if (i < sources.length - 1) {
      ++i;
      back.style.pointerEvents = "auto";
      backC.style.pointerEvents = "auto";
      if (i === sources.length - 1) {
        next.style.pointerEvents = "none";
        nextC.style.pointerEvents = "none";
        arr[i].style.opacity = "1";
        arr[i].style.transform = "scale(1)";
        arr[i - 1].style.opacity = "0";
        arr[i - 1].style.transform = "scale(.9)";
      } else {
        next.style.pointerEvents = "auto";
        nextC.style.pointerEvents = "auto";
      }
    }
    let result = [...arr];
    result.splice(i, 1);
    arr[i].style.transform = "scale(1)";
    arr[i].style.opacity = "1";
    for (let n = 0; n < result.length; n++) {
      result[n].style.opacity = "0";
      result[n].style.transform = "scale(.9)";
    }
    title.innerHTML = sources[i].title;
    para.innerHTML = sources[i].para;
  }
};

export default carousel;
