document.querySelectorAll(".grid-gallery__card img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-img").style.display = "block";
    document.querySelector(".popup-img img").src = image.getAttribute("src");
    document.querySelector("body").style.overflow = "hidden";
  };
});
document.querySelector(".popup-img span").onclick = () => {
  document.querySelector(".popup-img").style.display = "none";
  document.querySelector("body").style.overflow = "unset";
};
