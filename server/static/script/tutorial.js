// ==========================================================
// Card Slide
const welcome_button = document.getElementById("next-page");
const welcome_page = document.querySelector(".info-1")
const nextButtonInfo1 = document.querySelector('.info-2 .next-info-btn');
const nextButtonInfo2 = document.querySelector('.info-3 .next-info-btn');
const nextButtonInfo3 = document.querySelector('.info-4 .next-info-btn');

welcome_button.addEventListener("click", () => {
    document.querySelector('.info-2').classList.add("card-slide-active");

});
nextButtonInfo1.addEventListener("click", () => {
    document.querySelector('.info-3').classList.add("card-slide-active");
});
nextButtonInfo2.addEventListener("click", () => {
    document.querySelector('.info-4').classList.add("card-slide-active");
});
nextButtonInfo3.addEventListener("click", () => {
    document.querySelector('.info-5').classList.add("card-slide-active");
    toggleForm()
});