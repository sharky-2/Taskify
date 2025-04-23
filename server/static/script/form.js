// ==========================================================
// Display form
const form = document.getElementById("form")
function toggleForm() {
    if (form.style.bottom != "30px") {
        form.style.bottom = "30px"
    } else {
        form.style.bottom = "-30%"
    }
}

// ==========================================================
// Auto resize textarea of chat
function autoResize(textarea) {
  textarea.style.height = 'auto'; 
  textarea.style.height = (textarea.scrollHeight) + 'px';
}
function resetHeight(textarea) {
  textarea.style.height = "auto"
}