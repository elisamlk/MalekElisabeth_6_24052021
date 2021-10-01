export function manageForm() {
  let modalForm = document.querySelector("aside");
  let form = document.querySelector("form");
  let regexNumber = /^([^0-9]*)$/;
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  // Message à supprimer si les champs sont correctement renseignés
  function isValid(deleteMessage) {
    deleteMessage.style.display = "none";
  }

  // Fonctions pour vérifier si les champs sont correctement renseignés
  function checkFirstName() {
    let firstError = document.querySelector(".first-error");
    if (
      firstName.value.trim().length < 2 ||
      !firstName.value.match(regexNumber)
    ) {
      firstError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      return false;
    }
    isValid(firstError);
    return true;
  }

  function checkLastName() {
    let lastError = document.querySelector(".last-error");
    if (
      lastName.value.trim().length < 2 ||
      !lastName.value.match(regexNumber)
    ) {
      lastError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      return false;
    }
    isValid(lastError);
    return true;
  }

  function checkEmail() {
    let emailError = document.querySelector(".email-error");
    let emailRegex = /.+@.+\..+/;
    if (email.value.trim() == "" || !email.value.match(emailRegex)) {
      emailError.innerHTML = "Le format attendu n'est pas correct.";
      return false;
    }
    isValid(emailError);
    return true;
  }

  function checkMessage() {
    let messageError = document.querySelector(".message-error");
    if (message.value.trim().length < 10) {
      messageError.innerHTML = "Veuillez entrer au moins 10 caractères";
      return false;
    }
    isValid(messageError);
    return true;
  }

  // Fonction pour afficher les éléments fournis par l'utilisateur dans la console
  function consoleMessage() {
    console.group("Message du contact");
    console.log("Prénom: " + firstName.value);
    console.log("Nom: " + lastName.value);
    console.log("Email: " + email.value);
    console.log("Message: " + message.value);
  }

  form.addEventListener("submit", function (e) {
    if (
      checkFirstName() == false ||
      checkLastName() == false ||
      checkEmail() == false ||
      checkMessage() == false
    ) {
      e.preventDefault();
    } else {
      e.preventDefault();
      consoleMessage();
      modalForm.style.display = "none";
    }
  });

  let contactBtn = document.querySelector(".contact-btn");
  contactBtn.addEventListener("click", function () {
    modalForm.style.display = "block";
  });
  let closeBtn = document.querySelector(".close-form");
  closeBtn.addEventListener("click", function () {
    modalForm.style.display = "none";
  });

  document.addEventListener("keydown", (event) => {
    let keyName = event.key;
    if (keyName === "Escape") {
      modalForm.style.display = "none";
    }
  });
}
