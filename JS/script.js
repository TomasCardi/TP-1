
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const nombre = document.querySelector("[name='nombre']").value.trim();
        const email = document.querySelector("[name='email']").value.trim();
        const mensaje = document.querySelector("[name='mensaje']").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos antes de enviar.");
            event.preventDefault(); // Detiene el envío del formulario
        }
    });
});
