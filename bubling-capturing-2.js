let btnContainer = document.querySelector("#btn-container");

btnContainer.addEventListener("click", (event) => {
  let btnText = event.target.innerText;//target get the thing work
  if (btnText === "Red") {
    event.target.classList.toggle("btn-red");
  }
});