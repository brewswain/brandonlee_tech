import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  // Enter Your firebase config Object here and rename file to:
  // firebase.utils.js
  // this will ensure everything works as needed once you've
  // set up your own firebase project.
};

firebase.initializeApp(config);

let firestore = firebase.firestore();

let submitButton = document.querySelector("#submit-button");
let userName = document.querySelector("#user-name");
let userEmail = document.querySelector("#user-email");
let userMessage = document.querySelector("#user-message");

const db = firestore.collection("form/{formId}/messages");

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
      console.log("Data Saved");
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
});
