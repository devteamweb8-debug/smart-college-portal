const modal = document.getElementById("welcomeModal");
const closeBtn = document.getElementById("closeModal");

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});