document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
});

function includeHTML(){
    document.querySelectorAll("[data-include]").forEach(el => {
        let file= el.getAttribute("data-include");
        fetch(file)
            .then(respone => response.text())
            .then(data => el.innerHTML = data)
            .catch(err => console.error("Error loading the file:", file, err));

    });
}