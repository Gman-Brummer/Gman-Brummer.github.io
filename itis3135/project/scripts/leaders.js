const topLeaders = [
    {
      name: "Peter",
      civ: "Russia",
      style: "Science",
      info: "Great for religious/scientific play.",
      photo: "images/peter.jpg"
    },
    {
      name: "Hojo Tokimune",
      civ: "Japan",
      style: "Domination",
      info: "Strong military and districts.",
      photo: "images/hojo.jpg"
    },
    {
      name: "Pericles",
      civ: "Greece",
      style: "Culture",
      info: "Culture through city-states.",
      photo: "images/pericles.jpg"
    },
    {
      name: "Matthias Corvinus",
      civ: "Hungary",
      style: "Domination",
      info: "Strong levied units.",
      photo: "images/matthias.jpg"
    },
    {
      name: "Catherine de Medici",
      civ: "France",
      style: "Culture",
      info: "Espionage and wonders.",
      photo: "images/catherine.jpg"
    },
    {
      name: "Simon Bolivar",
      civ: "Gran Colombia",
      style: "Domination",
      info: "Fast-moving armies.",
      photo: "images/bolivar.jpg"
    },
    {
      name: "Mansa Musa",
      civ: "Mali",
      style: "Gold",
      info: "Insane gold output and trade.",
      photo: "images/mansa.jpg"
    },
    {
      name: "Seondeok",
      civ: "Korea",
      style: "Science",
      info: "Strong science economy.",
      photo: "images/seondeok.jpg"
    },
    {
      name: "Basil II",
      civ: "Byzantium",
      style: "Religious Domination",
      info: "Religious military power.",
      photo: "images/basil.jpg"
    },
    {
      name: "Lady Six Sky",
      civ: "Maya",
      style: "Science",
      info: "Strong early science.",
      photo: "images/lady6sky.jpg"
    }
  ];
  
  function populateDropdown() {
    const dropdown = document.getElementById("leader-select");
  
    topLeaders.forEach(leader => {
      const option = document.createElement("option");
      option.value = leader.name.toLowerCase().replace(/ /g, "-");
      option.textContent = `${leader.name} (${leader.civ})`;
      dropdown.appendChild(option);
    });
  }
  
  function displayLeaderInfo(event) {
    const selected = event.target.value;
    const infoDiv = document.getElementById("leader-info");
    const photoImg = document.getElementById("leader-photo");
    infoDiv.innerHTML = "";
  
    const leader = topLeaders.find(
      l => l.name.toLowerCase().replace(/ /g, "-") === selected
    );
  
    if (leader) {
      infoDiv.innerHTML = `
        <h3>${leader.name} of ${leader.civ}</h3>
        <p><strong>Playstyle:</strong> ${leader.style}</p>
        <p>${leader.info}</p>
      `;
  
      photoImg.src = leader.photo;
      photoImg.style.display = "block";
  
      highlightLeader(infoDiv);
    } else {
      photoImg.style.display = "none";
    }
  }
  
  function highlightLeader(element) {
    element.style.backgroundColor = "#fffae6";
    element.style.border = "2px solid #ffd700";
    element.style.padding = "10px";
    element.style.transition = "all 0.5s ease";
  
    setTimeout(() => {
      element.style.backgroundColor = "transparent";
      element.style.border = "none";
    }, 1500);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    populateDropdown();
    document.getElementById("leader-select").addEventListener("change", displayLeaderInfo);
  });
  
  