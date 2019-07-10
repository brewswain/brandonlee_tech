// Get Modal Element
const modalProject1 = document.getElementById("modal-project1");
const modalProject2 = document.getElementById("modal-project2");
const modalProject3 = document.getElementById("modal-project3");
const modalProject4 = document.getElementById("modal-project4");

// Open Modal from button click
const modalButton1 = document.getElementById("project-1");
const modalButton2 = document.getElementById("project-2");
const modalButton3 = document.getElementById("project-3");
const modalButton4 = document.getElementById("project-4");

// Close Modal from button click
const closeButton1 = document.querySelector(".button-1");
const closeButton2 = document.querySelector(".button-2");
const closeButton3 = document.querySelector(".button-3");
const closeButton4 = document.querySelector(".button-4");

//Mutable modal variable
let modalProject;

// Assign variables for click events to open modals
modalButton1.addEventListener("click", () => {
  modalProject = modalProject1;
  openModal();
});

modalButton2.addEventListener("click", () => {
  modalProject = modalProject2;
  openModal();
});

modalButton3.addEventListener("click", () => {
  modalProject = modalProject3;
  openModal();
});

modalButton4.addEventListener("click", () => {
  modalProject = modalProject4;
  openModal();
});

// Close modal if X button is clicked
closeButton1.addEventListener("click", buttonClose);
closeButton2.addEventListener("click", buttonClose);
closeButton3.addEventListener("click", buttonClose);
closeButton4.addEventListener("click", buttonClose);

// Close modal if clicked outside content box
window.addEventListener("click", closeModal);

// Function to open modal
function openModal() {
  modalProject.style.visibility = "visible";
  modalProject.style.opacity = "1";
  modalProject.style.transform = "translateY(-100%)";
  setTimeout(() => {
    modalProject.style.pointerEvents = "auto";
  }, 500);
}

// Function to close modal once outside of the modal is clicked
function closeModal(event) {
  if (event.target == modalProject1) {
    modalProject.style.opacity = "0";
    setTimeout(() => {
      modalProject.style.visibility = "hidden";
      modalProject.style.pointerEvents = "none";
    }, 500);
  } else if (event.target == modalProject2) {
    modalProject.style.opacity = "0";
    setTimeout(() => {
      modalProject.style.visibility = "hidden";
      modalProject.style.pointerEvents = "none";
    }, 500);
  } else if (event.target == modalProject3) {
    modalProject.style.opacity = "0";
    setTimeout(() => {
      modalProject.style.visibility = "hidden";
      modalProject.style.pointerEvents = "none";
    }, 500);
  } else if (event.target == modalProject4) {
    modalProject.style.opacity = "0";
    setTimeout(() => {
      modalProject.style.visibility = "hidden";
      modalProject.style.pointerEvents = "none";
    }, 500);
  }
}

function buttonClose() {
  modalProject.style.opacity = "0";
  setTimeout(() => {
    modalProject.style.visibility = "hidden";
    modalProject.style.pointerEvents = "none";
  }, 500);
}
