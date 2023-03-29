let addTeacherBtn = document.querySelectorAll(".addTeacher");
let closeBtn = document.querySelectorAll(".closePopUpBtn");
let popUp = document.querySelector(".popUpBack");

addTeacherBtn.forEach((item) => item.addEventListener("click", openModal));

function openModal() {
  popUp.classList.add("show");
}

closeBtn.forEach((item) => item.addEventListener("click", closeModal));

function closeModal() {
  popUp.classList.remove("show");
}

// _________________________________________________________________________________________________

let showTeacherInfoBtn = document.querySelectorAll(".teacherName");
let infoPopUp = document.querySelector(".teacherInfoBack");

let closeTeacherInfoBtn = document.querySelectorAll(
  ".closePopUpTeacherInfoBtn"
);

showTeacherInfoBtn.forEach((item) =>
  item.addEventListener("click", openInfoModal)
);

function openInfoModal() {
  infoPopUp.classList.add("show");
}

closeTeacherInfoBtn.forEach((item) =>
  item.addEventListener("click", closeInfoModal)
);

function closeInfoModal() {
  infoPopUp.classList.remove("show");
}
