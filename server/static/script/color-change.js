// ==========================================================
// Change Color
const change_color = document.getElementById("change-color");

change_color.addEventListener("click", () => {
    
    if (change_color.style.backgroundColor == "var(--black)") {
        change_color.style.backgroundColor = "var(--white)";
        document.documentElement.style.setProperty("--primary-bg-color", "var(--black)");
        document.documentElement.style.setProperty("--secondary-text-color", "var(--white)");
    } else {
        change_color.style.backgroundColor = "var(--black)";
        document.documentElement.style.setProperty("--primary-bg-color", "var(--white)");
        document.documentElement.style.setProperty("--secondary-text-color", "var(--black)");
    }

});