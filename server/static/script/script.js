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

// ==========================================================
// Welcome page Slide Show
const welcome_button = document.getElementById("next-page");
const welcome_page = document.querySelector(".welcome-page")
const nextButtonInfo1 = document.querySelector('.info-1 .next-info-btn');
const nextButtonInfo2 = document.querySelector('.info-2 .next-info-btn');
const nextButtonInfo3 = document.querySelector('.info-3 .next-info-btn');

welcome_button.addEventListener("click", () => {
    document.querySelector('.info-1').classList.remove("card-slide-exit", "move-off-screen");
    document.querySelector('.info-2').classList.remove("card-slide-active", "card-slide-exit", "move-off-screen");
    document.querySelector('.info-3').classList.remove("card-slide-active", "move-off-screen-final");
    welcome_page.classList.remove("move-off-screen-welcome", "card-slide-exit");

    document.querySelector('.info-1').classList.add("card-slide-active");
    welcome_page.classList.add("card-slide-exit");

});
nextButtonInfo1.addEventListener("click", () => {
    document.querySelector('.info-1').classList.add("card-slide-exit");
    document.querySelector('.info-2').classList.add("card-slide-active");
});
nextButtonInfo2.addEventListener("click", () => {
    document.querySelector('.info-2').classList.add("card-slide-exit");
    document.querySelector('.info-3').classList.add("card-slide-active");
});
nextButtonInfo3.addEventListener("click", () => {
    // Move info-3 off screen
    document.querySelector('.info-3').classList.add("move-off-screen-final");

    // Move welcome page, info-1 and info-2 off screen further
    welcome_page.classList.add("move-off-screen-welcome");
    document.querySelector('.info-1').classList.add("move-off-screen");
    document.querySelector('.info-2').classList.add("move-off-screen");

});
