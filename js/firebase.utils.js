const config = {
  apiKey: "AIzaSyC-ebRiUrWI-CH42Im3W9nLBsARaB-jPJE",
  authDomain: "portfolio-backend-ad46f.firebaseapp.com",
  databaseURL: "https://portfolio-backend-ad46f.firebaseio.com",
  projectId: "portfolio-backend-ad46f",
  storageBucket: "portfolio-backend-ad46f.appspot.com",
  messagingSenderId: "1056667936535",
  appId: "1:1056667936535:web:51b6443af0f6fa1df67952"
};

firebase.initializeApp(config);

let firestore = firebase.firestore();

let submitButton = document.querySelector(".submit-button");
let userName = document.querySelector("#user-name");
let userEmail = document.querySelector("#user-email");
let userMessage = document.querySelector("#user-message");

const db = firestore.collection("form/q0D3abohoBylt6zXhETv/messages");

submitButton.addEventListener("click", () => {
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  let userMessageInput = userMessage.value;

  db.doc()
    .set({
      name: userNameInput,
      email: userEmailInput,
      message: userMessageInput
    })
    .then(() => {
      successPopup();
    })
    .catch(error => {
      failurePopup();
      console.log(error);
    });
});

// success/failure message function

let successModal = document.querySelector(".contact-modal-success");
let failureModal = document.querySelector(".contact-modal-failure");

function successPopup() {
  successModal.style.visibility = "visible";
  successModal.style.opacity = "1";
  setTimeout(() => {
    successModal.style.opacity = "0";
    window.location.reload();
  }, 1000);
}

function failurePopup() {
  failureModal.style.visibility = "visible";
  failureModal.style.opacity = "1";
  setTimeout(() => {
    failureModal.style.opacity = "0";
  }, 500);
}
