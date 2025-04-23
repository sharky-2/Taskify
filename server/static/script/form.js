// ==========================================================
// Display form
const form = document.getElementById("form")
form.addEventListener("click", () => {

    form.style.transition = "all .3s"
    form.style.width = "80%"
    form.style.height = "90px"
    form.style.borderRadius = "20px"

    const text = document.querySelector(".text-1")
    const title = document.querySelector(".title-1")
    title.style.opacity = "0"
    text.style.opacity = "0"

    const submit = document.querySelector(".submit-button")
    submit.style.opacity = "1"

    const username = document.getElementById("username")
    const password = document.getElementById("password")
    username.style.opacity = ".5"
    password.style.opacity = "1"
    
})

// ==========================================================
// Auto resize textarea of chat
function autoResize(textarea) {
  textarea.style.height = 'auto'; 
  textarea.style.height = (textarea.scrollHeight) + 'px';
}
function resetHeight(textarea) {
  textarea.style.height = "auto"
}