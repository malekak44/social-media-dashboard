const toggleBtn = document.getElementById("toggle");
const body = document.body;
toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        toggleBtn.classList.add("off");
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        toggleBtn.classList.remove("off");
        body.classList.add("dark");
        body.classList.remove("light");
    }
});