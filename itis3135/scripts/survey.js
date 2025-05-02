document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    const resultDiv = document.getElementById("result");
    const courseContainer = document.getElementById("course-container");
    const addCourseBtn = document.getElementById("addCourse");
  
   
    addCourseBtn.addEventListener("click", () => {
      const courseDiv = document.createElement("div");
      const courseInput = document.createElement("input");
      courseInput.type = "text";
      courseInput.name = "course";
      courseInput.placeholder = "e.g., ITIS 3135 - Web App Design";
      courseInput.className = "course-box";
  
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        courseContainer.removeChild(courseDiv);
      });
  
      courseDiv.appendChild(courseInput);
      courseDiv.appendChild(deleteBtn);
      courseContainer.appendChild(courseDiv);
    });
  
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      
      const requiredFields = [
        "name", "mascot", "image", "caption",
        "personal", "professional", "academic",
        "webdev", "platform", "agreement"
      ];
  
      for (let id of requiredFields) {
        const el = document.getElementById(id);
        if (!el || (el.type === "checkbox" ? !el.checked : !el.value.trim())) {
          alert("Please fill out all required fields.");
          return;
        }
      }
  
      
      const name = document.getElementById("name").value;
      const mascot = document.getElementById("mascot").value;
      const image = document.getElementById("image").files[0];
      const caption = document.getElementById("caption").value;
      const personal = document.getElementById("personal").value;
      const professional = document.getElementById("professional").value;
      const academic = document.getElementById("academic").value;
      const webdev = document.getElementById("webdev").value;
      const platform = document.getElementById("platform").value;
      const funny = document.getElementById("funny").value;
      const other = document.getElementById("other").value;
  
      const courses = [...document.querySelectorAll("input[name='course']")]
      .map((c) => c.value)
      .filter((c) => c.trim() !== "");

  
      
      const reader = new FileReader();
      reader.onload = function () {
        const imgSrc = reader.result;
  
        const introHTML = `
          <h2>${name}'s Introduction</h2>
          <h3>${mascot}</h3>
          <figure>
            <img src="${imgSrc}" alt="${mascot}" style="max-width:300px;">
            <figcaption>${caption}</figcaption>
          </figure>
          <ul>
            <li><strong>Personal Background:</strong> ${personal}</li>
            <li><strong>Professional Background:</strong> ${professional}</li>
            <li><strong>Academic Background:</strong> ${academic}</li>
            <li><strong>Background in Web Development:</strong> ${webdev}</li>
            <li><strong>Primary Computer Platform:</strong> ${platform}</li>
            <li><strong>Courses Currently Taking:</strong>
              <ul>
                ${courses.map(c => `<li><strong>${c}</strong></li>`).join("")}
              </ul>
            </li>
            ${funny ? `<li><strong>Funny Thing:</strong> ${funny}</li>` : ""}
            ${other ? `<li><strong>Anything Else:</strong> ${other}</li>` : ""}
          </ul>
          <button id="resetResult">Reset</button>
        `;
  
        form.style.display = "none";
        resultDiv.innerHTML = introHTML;
        resultDiv.style.display = "block";
  
        
        document.getElementById("resetResult").addEventListener("click", () => {
          form.reset();
          resultDiv.innerHTML = "";
          resultDiv.style.display = "none";
          form.style.display = "block";
        });
      };
  
      
      if (image && (image.type === "image/png" || image.type === "image/jpeg")) {
        reader.readAsDataURL(image);
      } else {
        alert("Please upload a valid JPG or PNG image.");
      }
    });
  });
  