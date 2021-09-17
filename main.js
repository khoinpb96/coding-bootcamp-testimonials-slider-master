const $ = document.querySelector.bind(document);
const prevBtn = $("#btn-prev");
const nextBtn = $("#btn-next");
const [firstContent, secondContent, ...restContents] =
  document.querySelectorAll(".quote-container");
const [firstPic, secondPic, ...restPics] =
  document.querySelectorAll(".pic-container");

nextBtn.onclick = () => {
  secondContent.classList.add("swipe-next");
  secondPic.classList.add("swipe-next");
  firstContent.classList.add("swipe-next");
  firstPic.classList.add("swipe-next");
};
prevBtn.onclick = () => {
  secondContent.classList.remove("swipe-next");
  secondPic.classList.remove("swipe-next");
  firstContent.classList.remove("swipe-next");
  firstPic.classList.remove("swipe-next");
};
