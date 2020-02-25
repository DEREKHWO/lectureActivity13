let button = document.querySelector("button");
function buttonClick() {
  alert("ha stupid, you just got got");
  button.removeEventListener("click", buttonClick);
}
button.addEventListener("click", buttonClick);

let link = document.querySelector("a");
link.addEventListener("click", event => {
  event.preventDefault();
  alert("Sorry Brov! Can't get you there!");
});
