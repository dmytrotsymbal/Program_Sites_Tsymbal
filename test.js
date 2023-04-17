const dynamicRow = document.getElementById("dynamicRow");
const lolRow = document.getElementById("lolRow"); // get the element with id "lolRow"

const closeButton = document.querySelector(".close");
const backdrop = document.querySelector(".modal-backdrop");

const youngestSort = document.getElementById("youngestSort");

fetch("https://642d2c40bf8cbecdb4ff0958.mockapi.io/studio/items")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("card");
      document.body.appendChild(div);
      const name = document.createElement("h5");
      const img = document.createElement("img");
      const subject = document.createElement("p");
      const country = document.createElement("p");
      const buttonWrapper = document.createElement("div");
      const addToFavButton = document.createElement("button");
      addToFavButton.classList.add("addToFavBtn");
      document.body.appendChild(addToFavButton);
      const infoButton = document.createElement("button");
      infoButton.classList.add("infoButton");
      document.body.appendChild(infoButton);

      name.innerText = item.name;
      subject.innerText = item.subject;
      country.innerText = item.country;
      img.src = item.image;
      img.alt = `Image of ${item.name}`;

      img.style.height = "100px";
      img.style.width = "100px";
      img.style.borderRadius = "50px";
      img.style.objectFit = "cover";
      addToFavButton.innerText = "Add to fav";
      infoButton.innerText = "Info";

      addToFavButton.addEventListener("click", () => {
        const copiedDiv = div.cloneNode(true);
        lolRow.appendChild(copiedDiv);
        addToFavButton.innerText = "Added!";
        addToFavButton.disabled = true;
      });

      infoButton.addEventListener("click", () => {
        const infoModal = document.getElementById("infoModal");
        const modalImg = document.getElementById("modalImg");
        const modalName = document.getElementById("modalName");
        const modalSubject = document.getElementById("modalSubject");
        const modalGender = document.getElementById("modalGender");
        const modalCountry = document.getElementById("modalCountry");
        const modalContinent = document.getElementById("modalContinent");
        const modalAge = document.getElementById("modalAge");
        const modalEmail = document.getElementById("modalEmail");
        const modalTel = document.getElementById("modalTel");
        const modalParagraph = document.getElementById("modalParagraph");
        modalImg.src = item.image;
        modalImg.alt = `Image of ${item.name}`;
        modalName.innerText = item.name;
        modalSubject.innerText = item.subject;
        modalGender.innerText = item.gender;
        modalCountry.innerText = item.country;
        modalContinent.innerText = item.continent;
        modalAge.innerText = item.age;
        modalEmail.innerText = item.email;
        modalTel.innerText = item.telephone;
        modalParagraph.innerText = item.paragraph;
        infoModal.classList.add("show");
        infoModal.style.display = "block";
      });

      closeButton.addEventListener("click", () => {
        const infoModal = document.getElementById("infoModal");
        infoModal.classList.remove("show");
        infoModal.style.display = "none";
      });

      // ______________________________________________
      const youngestSort = document.getElementById("youngestSort");
      youngestSort.addEventListener("click", () => {
        dynamicRow.innerHTML = data
          .sort((a, b) => a.age - b.age)
          .map(
            (item) => `
        <div class="card">
          <img
            src="${item.image}"
            alt=""
          />
          <h5 class="teacherName" href="#">${item.name}</h5>
    
          <p class="subject">${item.subject}</p>
    
          <p class="country">${item.country}</p>
        </div>
     
    `
          )
          .join("");
      });

      const middleSort = document.getElementById("middleSort");
      middleSort.addEventListener("click", () => {
        dynamicRow.innerHTML = data
          .filter((x) => x.age > 31)
          .filter((x) => x.age < 51)
          .map(
            (item) => `
        <div class="card">
          <img
            src="${item.image}"
            alt=""
          />
          <h5 class="teacherName" href="#">${item.name}</h5>
    
          <p class="subject">${item.subject}</p>
    
          <p class="country">${item.country}</p>
        </div>
     
    `
          )
          .join("");
      });

      const oldestSort = document.getElementById("oldestSort");
      oldestSort.addEventListener("click", () => {
        dynamicRow.innerHTML = data
          .sort((a, b) => b.age - a.age)
          .map(
            (item) => `
        <div class="card">
          <img
            src="${item.image}"
            alt=""
          />
          <h5 class="teacherName" href="#">${item.name}</h5>
    
          <p class="subject">${item.subject}</p>
    
          <p class="country">${item.country}</p>
        </div>
      
    `
          )
          .join("");
      });

      //__________________________________________________________________________

      const europeSort = document.getElementById("europeSort");
      europeSort.addEventListener("click", () => {
        dynamicRow.innerHTML = data
          .filter((x) => x.continent === "Europe")
          .map(
            (item) => `
        <div class="card">
          <img
            src="${item.image}"
            alt=""
          />
          <h5 class="teacherName" href="#">${item.name}</h5>
    
          <p class="subject">${item.subject}</p>
    
          <p class="country">${item.country}</p>
        </div>
      
    `
          )
          .join("");
      });

      const africaSort = document.getElementById("africaSort");
      africaSort.addEventListener("click", () => {
        dynamicRow.innerHTML = data
          .filter((x) => x.continent === "Africa")
          .map(
            (item) => `
        <div class="card">
          <img
            src="${item.image}"
            alt=""
          />
          <h5 class="teacherName" href="#">${item.name}</h5>
    
          <p class="subject">${item.subject}</p>
    
          <p class="country">${item.country}</p>
        </div>
     
    `
          )
          .join("");
      });

      const americaSort = document.getElementById("americaSort");
      americaSort.addEventListener("click", () => {
        dynamicRow.innerHTML = data
          .filter((x) => x.continent === "America")
          .map(
            (item) => `
        <div class="card">
          <img
            src="${item.image}"
            alt=""
          />
          <h5 class="teacherName" href="#">${item.name}</h5>
    
          <p class="subject">${item.subject}</p>
    
          <p class="country">${item.country}</p>
        </div>
      
    `
          )
          .join("");
      });

      const asiaSort = document.getElementById("asiaSort");
      asiaSort.addEventListener("click", () => {
        dynamicRow.innerHTML = data
          .filter((x) => x.continent === "Asia")
          .map(
            (item) => `
        <div class="card">
          <img
            src="${item.image}"
            alt=""
          />
          <h5 class="teacherName" href="#">${item.name}</h5>
    
          <p class="subject">${item.subject}</p>
    
          <p class="country">${item.country}</p>
        </div>
      
    `
          )
          .join("");
      });

      //__________________________________________________________________________

      const maleSort = document.getElementById("maleSort");
      maleSort.addEventListener("click", () => {
        dynamicRow.innerHTML = data
          .filter((x) => x.gender === "Male")
          .map(
            (item) => `
        <div class="card">
          <img
            src="${item.image}"
            alt=""
          />
          <h5 class="teacherName" href="#">${item.name}</h5>
    
          <p class="subject">${item.subject}</p>
    
          <p class="country">${item.country}</p>
        </div>
     
    `
          )
          .join("");
      });

      const femaleSort = document.getElementById("femaleSort");
      femaleSort.addEventListener("click", () => {
        dynamicRow.innerHTML = data
          .filter((x) => x.gender === "Female")
          .map(
            (item) => `
        <div class="card">
          <img
            src="${item.image}"
            alt=""
          />
          <h5 class="teacherName" href="#">${item.name}</h5>
          <p class="subject">${item.subject}</p>
    
          <p class="country">${item.country}</p>
        </div>
     
    `
          )
          .join("");
      });

      //___________________________________________________________________________
      function searchObjectByName() {
        const userInput = document.getElementById("inputFinder").value;
        fetch("https://642d2c40bf8cbecdb4ff0958.mockapi.io/studio/items")
          .then((response) => response.json())
          .then((data) => {
            let filteredData = data.filter((item) => item.name === userInput);
            let dynamicRow = document.getElementById("dynamicRow");
            dynamicRow.innerHTML = "";
            if (filteredData.length === 0) {
              dynamicRow.innerHTML = "Объект не найден";
            } else {
              filteredData.forEach((item) => {
                let row = document.createElement("div");
                row.classList.add("row");
                row.innerHTML = `
                <div class="card">
                  <img
                    src="${item.image}"
                    alt=""
                  />
                  <h5 class="teacherName" href="#">${item.name}</h5>
                  <p class="subject">${item.subject}</p>
            
                  <p class="country">${item.country}</p>
                </div>
             
            `;
                dynamicRow.appendChild(row);
              });
            }
          })
          .catch((error) => console.error(error));
      }

      document
        .getElementById("searchBtn")
        .addEventListener("click", searchObjectByName);

      // ______________________________________________

      buttonWrapper.appendChild(addToFavButton);
      buttonWrapper.appendChild(infoButton);

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(subject);
      div.appendChild(country);
      div.appendChild(buttonWrapper);

      dynamicRow.appendChild(div);
    });
  });
