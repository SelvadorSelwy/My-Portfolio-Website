const lists = document.querySelectorAll(".nav-link");
addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    lists.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});
