const buttonShare = document.querySelector(".button-share");
const openedDiv = document.querySelector(".opened-div");
const triangle = document.querySelector(".triangle");
const buttonShareImg = document.querySelector(".share");

buttonShare.addEventListener("click", () => {
  openedDiv.classList.toggle("opened-div-active");
  triangle.classList.toggle("triangle-opened-div");
  buttonShare.classList.toggle("button-share-active");
  buttonShareImg.classList.toggle("button-share-img-active");
  console.log("réussi");
});
