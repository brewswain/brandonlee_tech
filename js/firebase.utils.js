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

let submitButton = document.querySelector("#submit-button");
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
      alert("message sent!");
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
});
