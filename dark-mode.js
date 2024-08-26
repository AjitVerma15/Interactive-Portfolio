function onIframeLoad() {
  const iframe = document.getElementById("toggle-iframe");
  const body = document.querySelector("body");
  const iframeContentDocument = iframe.contentDocument;
  const navBar = document.querySelector(
    ".navbar.navbar-expand-lg.navbar-light"
  );
  const darkToggleMode =
    iframeContentDocument.getElementById("darkmode-toggle");
  if (localStorage.getItem("dark-mode") === "true") {
    body.classList.add("dark-mode");
    darkToggleMode.checked = true;
    navBar.classList.remove("navbar-light");
    navBar.classList.add("navbar-dark");
  }

  darkToggleMode.addEventListener("click", function (event) {
    if (event.target.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", true);
      navBar.classList.remove("navbar-light");
      navBar.classList.add("navbar-dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", false);
      navBar.classList.add("navbar-light");
      navBar.classList.remove("navbar-dark");
    }
  });
}
