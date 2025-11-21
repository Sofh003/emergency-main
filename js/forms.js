//////////////////////////////////////// Forms output ///////////////////////////////////
const form = document.querySelector("#webform");
/*****************FJERN BROWSER POP-UP???*******************/
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

form.addEventListener("submit", handleSubmit);

/******************************************************************/

const f_nameOutput = document.querySelector(".f_name_output");
const l_nameOutput = document.querySelector(".l_name_output");
const boomerOutput = document.querySelector(".boomer_output");
const behavoirOutput = document.querySelector(".behavoir_output");
const emailOutput = document.querySelector(".e-mail_output");

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  const formData = new FormData(form);

  const f_name = formData.get("f_name");
  f_nameOutput.textContent = f_name;

  // Efternavn
  const l_name = formData.get("l_name");
  l_nameOutput.textContent = l_name;

  // TV-afhængighed
  const boomer = formData.get("boomer");
  boomerOutput.textContent = boomer;

  // Symptomer (checkboxes)
  const behavoir = formData.getAll("behavoir").join(", ");
  behavoirOutput.textContent = behavoir || "Ingen valgt";

  // Email
  const email = formData.get("email");
  emailOutput.textContent = email;

  form.reset();
}
