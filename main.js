const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const hiddenElements = document.getElementsByClassName("blind");
  const emailInput = document.querySelector('input[type="email"]');

  if (!emailInput.checkValidity() || emailInput.value === "") {
    emailInput.classList.toggle("error");
    // hiddenElements.classList.toggle("hidden"); kalau pake clasName game bisa pakai ini
    for (let i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].classList.toggle("hidden");
    }
  }
});
