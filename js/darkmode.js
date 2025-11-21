const html = document.querySelector("html");
const togglebtn = document.querySelector("#switch");

function toggleTheme() {
  console.log("toggleTheme");
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    sessionStorage.setItem("darkmode", "true");
  } else {
    sessionStorage.setItem("darkmode", "false");
  }
}

togglebtn.addEventListener("click", toggleTheme);
