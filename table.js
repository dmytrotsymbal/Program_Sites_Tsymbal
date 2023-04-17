const table = document.getElementById("tableOfStats");
fetch("https://642d2c40bf8cbecdb4ff0958.mockapi.io/studio/items")
  .then((response) => response.json())
  .then((data) => {
    const headerRow = document.createElement("tr");
    const nameHeader = document.createElement("th");
    nameHeader.appendChild(document.createTextNode("Name"));
    nameHeader.addEventListener("click", () => {
      const cellIndex = nameHeader.cellIndex;
      const rows = table.rows;
      const data = [];

      for (let i = 1; i < rows.length; i++) {
        data.push({
          value: rows[i].cells[cellIndex].textContent.trim().toLowerCase(),
          element: rows[i],
        });
      }

      data.sort((a, b) => {
        const aLength = a.value
          .split(" ")
          .reduce((total, word) => total + word.length, 0);
        const bLength = b.value
          .split(" ")
          .reduce((total, word) => total + word.length, 0);
        return aLength - bLength;
      });

      for (let i = 0; i < data.length; i++) {
        table.appendChild(data[i].element);
      }
    });

    headerRow.appendChild(nameHeader);
    const subjectHeader = document.createElement("th");
    subjectHeader.appendChild(document.createTextNode("Speciality"));
    subjectHeader.addEventListener("click", () => {
      const cellIndex = subjectHeader.cellIndex;
      const rows = table.rows;
      const data = [];

      for (let i = 1; i < rows.length; i++) {
        data.push({
          value: rows[i].cells[cellIndex].textContent.trim().toLowerCase(),
          element: rows[i],
        });
      }

      data.sort((a, b) => {
        const aLength = a.value
          .split(" ")
          .reduce((total, word) => total + word.length, 0);
        const bLength = b.value
          .split(" ")
          .reduce((total, word) => total + word.length, 0);
        return aLength - bLength;
      });

      for (let i = 0; i < data.length; i++) {
        table.appendChild(data[i].element);
      }
    });
    headerRow.appendChild(subjectHeader);
    const ageHeader = document.createElement("th");
    ageHeader.appendChild(document.createTextNode("Age"));
    ageHeader.addEventListener("click", () => {
      const cellIndex = ageHeader.cellIndex;
      const rows = table.rows;
      const data = [];

      for (let i = 1; i < rows.length; i++) {
        data.push({
          value: parseInt(rows[i].cells[cellIndex].textContent.trim()),
          element: rows[i],
        });
      }

      data.sort((a, b) => a.value - b.value);

      for (let i = 0; i < data.length; i++) {
        table.appendChild(data[i].element);
      }
    });
    headerRow.appendChild(ageHeader);
    const genderHeader = document.createElement("th");
    genderHeader.appendChild(document.createTextNode("Gender"));
    genderHeader.addEventListener("click", () => {
      const cellIndex = genderHeader.cellIndex;
      const rows = table.rows;
      const data = [];

      for (let i = 1; i < rows.length; i++) {
        data.push({
          value: rows[i].cells[cellIndex].textContent.trim().toLowerCase(),
          element: rows[i],
        });
      }

      data.sort((a, b) => a.value.localeCompare(b.value));

      for (let i = 0; i < data.length; i++) {
        table.appendChild(data[i].element);
      }
    });
    headerRow.appendChild(genderHeader);
    const countryHeader = document.createElement("th");
    countryHeader.appendChild(document.createTextNode("Nationality"));
    countryHeader.addEventListener("click", () => {
      const cellIndex = countryHeader.cellIndex;
      const rows = table.rows;
      const data = [];

      // Extract data from the appropriate cells in each row
      for (let i = 1; i < rows.length; i++) {
        data.push({
          value: rows[i].cells[cellIndex].textContent.trim().toLowerCase(),
          element: rows[i],
        });
      }

      data.sort((a, b) => {
        const aWords = a.value.split(" ").sort();
        const bWords = b.value.split(" ").sort();

        for (let i = 0; i < aWords.length && i < bWords.length; i++) {
          if (aWords[i] < bWords[i]) {
            return -1;
          } else if (bWords[i] < aWords[i]) {
            return 1;
          }
        }

        return aWords.length - bWords.length;
      });

      for (let i = 0; i < data.length; i++) {
        table.appendChild(data[i].element);
      }
    });
    headerRow.appendChild(countryHeader);

    table.appendChild(headerRow);

    for (let item of data) {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.appendChild(document.createTextNode(item.name));
      row.appendChild(nameCell);
      const subjectCell = document.createElement("td");
      subjectCell.appendChild(document.createTextNode(item.subject));
      row.appendChild(subjectCell);
      const ageCell = document.createElement("td");
      ageCell.appendChild(document.createTextNode(item.age));
      row.appendChild(ageCell);
      const genderCell = document.createElement("td");
      genderCell.appendChild(document.createTextNode(item.gender));
      row.appendChild(genderCell);
      const countryCell = document.createElement("td");
      countryCell.appendChild(document.createTextNode(item.country));
      row.appendChild(countryCell);

      table.appendChild(row);
    }
  });
