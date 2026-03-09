const welcomeModal = document.getElementById("welcomeModal");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
  welcomeModal.setAttribute("aria-hidden", "true");
});

const generalNotice = [
"Holiday Notice",
"Campus Cleanliness Drive"
]

const admissionNotice = [
"Admission open 2026",
"Admission last date extended"
]

const examNotice = [
"Semester exam routine",
"Form fill up notice"
]

function loadNotice(id,data){

const container = document.getElementById(id)

container.innerHTML = data.map(n => `<p>• ${n}</p>`).join("")

}

loadNotice("generalNotice",generalNotice)
loadNotice("admissionNotice",admissionNotice)
loadNotice("examNotice",examNotice)