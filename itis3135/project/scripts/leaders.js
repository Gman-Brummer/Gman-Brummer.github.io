const topLeaders = [
    {
      name: "Peter",
      civ: "Russia",
      style: "Science",
      info: "Great for religious/scientific play.",
      photo: "https://www.gamersdecide.com/sites/default/files/authors/u151730/civ_6-peter3hd_0.jpg"
    },
    {
      name: "Hojo Tokimune",
      civ: "Japan",
      style: "Domination",
      info: "Strong military and districts.",
      photo: "images/Hoki.jpg"
    },
    {
      name: "Pericles",
      civ: "Greece",
      style: "Culture",
      info: "Culture through city-states.",
      photo: "https://forums.civfanatics.com/media/civ6-pericles.3805/full"
    },
    {
      name: "Matthias Corvinus",
      civ: "Hungary",
      style: "Domination",
      info: "Strong levied units.",
      photo: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/06/Civilization-6-Matthias-Corvinus-Hungary.png"
    },
    {
      name: "Catherine de Medici",
      civ: "France",
      style: "Culture",
      info: "Espionage and wonders.",
      photo: "https://wallpaperaccess.com/full/3118880.jpg"
    },
    {
      name: "Simon Bolivar",
      civ: "Gran Colombia",
      style: "Domination",
      info: "Fast-moving armies.",
      photo: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2020/05/civ_6_gran_colombia_leader.jpg"
    },
    {
      name: "Mansa Musa",
      civ: "Mali",
      style: "Gold",
      info: "Insane gold output and trade.",
      photo: "https://th.bing.com/th/id/R.f3a0c8ced21b475f89cdf5c13da0696e?rik=JnPVQPXa7YD8fA&riu=http%3a%2f%2fcdn.2kgames.com%2fcivilization.com%2fmalimansamusathumbnail.jpg&ehk=yYu337ppBhmZBmsoQsgoY55j84yTLXIsk4MTjoYEbwA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "Seondeok",
      civ: "Korea",
      style: "Science",
      info: "Strong science economy.",
      photo: "https://outsidergaming.com/wp-content/uploads/2020/11/Civ-6-Best-Leader-in-Rise-and-Fall-Seondeok-of-Korea-768x432.jpg"
    },
    {
      name: "Basil II",
      civ: "Byzantium",
      style: "Religious Domination",
      info: "Religious military power.",
      photo: "https://media.altchar.com/prod/images/940_530/gm-5e0be125-b8ed-41a8-963b-8ffd558084e4-civ-byz.jpg"
    },
    {
      name: "Lady Six Sky",
      civ: "Maya",
      style: "Science",
      info: "Strong early science.",
      photo: "https://twinfinite.net/wp-content/uploads/2020/05/Civilization-VI.jpg"
    }
  ];
  
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
  
  function populateDropdown() {
    const dropdown = document.getElementById("leader-select");
  
    topLeaders.forEach((leader) => {
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
      (l) => l.name.toLowerCase().replace(/ /g, "-") === selected
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
  
  window.addEventListener("DOMContentLoaded", () => {
    populateDropdown();
    document.getElementById("leader-select").addEventListener("change", displayLeaderInfo);
  });
  
  
  