const toogleTheme = document.querySelector("#theme");
const body = document.body;
const darkMode = localStorage.getItem("theme");
if (darkMode === "enabled") {
  body.classList.add("dark");
}

toogleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "enabled");
  } else {
    localStorage.setItem("theme", "disabled");
  }
});
