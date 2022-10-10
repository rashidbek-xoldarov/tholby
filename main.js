const elBtn = document.querySelector(".burger-btn");
const elNav = document.querySelector(".sitenav");

elBtn.addEventListener("click", function () {
  elNav.classList.toggle("sitenav-open");
});
