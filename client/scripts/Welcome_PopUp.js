const welcomeModal = document.getElementById("welcomeModal");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
  welcomeModal.setAttribute("aria-hidden", "true");
});