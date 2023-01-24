// documents.getElementsByClassName("");
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  document.querySelectorAll("li")[1].innerHTML = "Choose Base Plan";
  document.querySelector(".pricing-header").classList.add("display-none");
  document.querySelector("main").classList.add("display-none");
  document.querySelector("footer").classList.add("display-none");
  document.querySelector(".click-div").classList.remove("display-none");
  document.querySelectorAll(".click-div")[1].classList.remove("display-none");
document.querySelector(".date").innerText = current_date;
}

document.querySelectorAll(".col")[0].addEventListener("click", function() {
  document.querySelectorAll(".col")[1].classList.toggle("opacitty");
document.querySelectorAll(".col")[2].classList.toggle("opacitty");
});

document.querySelectorAll(".col")[1].addEventListener("click", function() {
  document.querySelectorAll(".col")[0].classList.toggle("opacitty");
document.querySelectorAll(".col")[2].classList.toggle("opacitty");
});

document.querySelectorAll(".col")[2].addEventListener("click", function opacitty() {
  document.querySelectorAll(".col")[0].classList.toggle("opacitty");
document.querySelectorAll(".col")[1].classList.toggle("opacitty");
});

let today = new Date();

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

let month = monthNames[today.getMonth()];
let year = today.getFullYear();
let date = today.getDate();

let current_date = month +" "+ date + ", " + year;
