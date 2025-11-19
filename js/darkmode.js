const html = document.querySelector("html");
const togglebtn = document.querySelector("#switch");

function toggleTheme() {
  console.log("toggleTheme");
  html.classList.toggle("dark");

  if (html.classList.comtains("dark")) {
    localStorage.setItem("darkmode", true);
  } else {
    localStorage.setItem("darkmode", false);
  }
}

togglebtn.addEventListener("click", toggleTheme);
