export function manageForm() {
  let modalForm = document.querySelector("aside");
  let form = document.querySelector("form");
  let regexNumber = /^([^0-9]*)$/;

  // Couleur à ajouter si les champs du formulaire sont correctement renseignés
  function isValid(validColor, deleteMessage) {
    validColor.style.borderColor = "green";
    deleteMessage.style.display = "none";
  }

  // Couleur à ajouter si les champs dont erronnés
  function isNotValid(errorColor) {
    errorColor.style.borderColor = "#fe142f";
  }

  // Fonctions pour vérifier si les champs sont correctement renseignés
  function checkFirstName() {
    let firstName = document.getElementById("first");
    let firstError = document.querySelector(".first-error");
    if (
      firstName.value.trim().length < 2 ||
      !firstName.value.match(regexNumber)
    ) {
      isNotValid(firstName);
      firstError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      return false;
    }
    isValid(firstName, firstError);
    return true;
  }

  function checkLastName() {
    let lastName = document.getElementById("last");
    let lastError = document.querySelector(".last-error");
    if (
      lastName.value.trim().length < 2 ||
      !lastName.value.match(regexNumber)
    ) {
      isNotValid(lastName);
      lastError.innerHTML =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      return false;
    }
    isValid(lastName, lastError);
    return true;
  }

  function checkEmail() {
    let email = document.getElementById("email");
    let emailError = document.querySelector(".email-error");
    let emailRegex = /.+@.+\..+/;
    if (email.value.trim() == "" || !email.value.match(emailRegex)) {
      isNotValid(email);
      emailError.innerHTML = "Le format attendu n'est pas correct.";
      return false;
    }
    isValid(email, emailError);
    return true;
  }

  function checkMessage() {
    let message = document.getElementById("message");
    let messageError = document.querySelector(".message-error");
    if (message.value.trim().length < 10) {
      isNotValid(message);
      messageError.innerHTML = "Veuillez entrer au moins 10 caractères";
      return false;
    }
    isValid(message, messageError);
    return true;
  }

  form.addEventListener("submit", function (e) {
    if (
      checkFirstName() == false ||
      checkLastName() == false ||
      checkEmail() == false ||
      checkMessage() == false
    ) {
      e.preventDefault();
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
}
