let addTeacherBtn = document.querySelectorAll(".addTeacher");
let closeBtn = document.querySelectorAll(".closePopUpBtn");
let popUp = document.querySelector(".popUpBack");
const addFormBtn = document.querySelector(".addForm");

addTeacherBtn.forEach((item) => item.addEventListener("click", openModal));

function openModal() {
  popUp.classList.add("show");
}

closeBtn.forEach((item) => item.addEventListener("click", closeModal));

function closeModal() {
  popUp.classList.remove("show");
}

addFormBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector(".name");
  const newTeacher = {
    name: nameInput.value,
    speciality: document.querySelector(".Speciality").value,
    country: document.querySelector(".place > :nth-child(1)").value,
    city: document.querySelector(".place > :nth-child(2)").value,
    email: document.querySelector('[type="email"]').value,
    phone: document.querySelector('[type="tel"]').value,
    date: document.querySelector('[type="date"]').value,
    gender: document.querySelector("#selector").value,
    color: document.querySelector(".color").value,
    additional: document.querySelector("textarea").value,
  };

  const cardContainer = document.querySelector("#dynamicRow");
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `
    <div class="card">
      <img src="${newTeacher.image}" alt="" />
      <h5 class="teacherName" href="#">${newTeacher.name}</h5>
      <p class="subject">${newTeacher.subject}</p>
      <p class="country">${newTeacher.country}</p>
    </div>
  `;
  cardContainer.appendChild(newCard);

  nameInput.value = "";
  document.querySelector(".Speciality").value = "";
  document.querySelector(".place > :nth-child(1)").value = "";
  document.querySelector(".place > :nth-child(2)").value = "";
  document.querySelector('[type="email"]').value = "";
  document.querySelector('[type="tel"]').value = "";
  document.querySelector('[type="date"]').value = "";
  document.querySelector("#selector").value = "Male";
  document.querySelector(".color").value = "#000000";
  document.querySelector("textarea").value = "";

  popUp.style.display = "none";
});
