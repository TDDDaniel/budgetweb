//id-uri

//venituri
//const bugetulTau = document.getElementById("bugetulTau");
//const economiGeneral = document.getElementById("economiGeneral");

//cheltuieli
/*const luna1c = document.getElementById("luna1c").value;
const luna2c = document.getElementById("luna2c").value;
const luna3c = document.getElementById("luna3c").value;
const luna4c = document.getElementById("luna4c").value;
const luna5c = document.getElementById("luna5c").value;
const luna6c = document.getElementById("luna6c").value;
const luna7c = document.getElementById("luna7c").value;
const luna8c = document.getElementById("luna8c").value;
const luna9c = document.getElementById("luna9c").value;
const luna10c = document.getElementById("luna10c").value;
const luna11c = document.getElementById("luna11c").value;
const luna12c = document.getElementById("luna12c").value;*/

const totalVenituri = document.getElementById("totalVenituri");
const gata = document.getElementById("gata1");
const report = document.getElementById("reports");
let bugetTitle = document.getElementById("bugetTitle");
const venitTitlu = document.getElementById("venitTitlu");
let luna1v;
let luna2v;
let luna3v;
let luna4v;
let luna5v;
let luna6v;
let luna7v;
let luna8v;
let luna9v;
let luna10v;
let luna11v;
let luna12v;

let luna1c;
let luna2c;
let luna3c;
let luna4c;
let luna5c;
let luna6c;
let luna7c;
let luna8c;
let luna9c;
let luna10c;
let luna11c;
let luna12c;
gata.addEventListener("click", function () {
  luna1v = Number(document.getElementById("luna1").value);
  luna2v = Number(document.getElementById("luna2").value);
  luna3v = Number(document.getElementById("luna3").value);
  luna4v = Number(document.getElementById("luna4").value);
  luna5v = Number(document.getElementById("luna5").value);
  luna6v = Number(document.getElementById("luna6").value);
  luna7v = Number(document.getElementById("luna7").value);
  luna8v = Number(document.getElementById("luna8").value);
  luna9v = Number(document.getElementById("luna9").value);
  luna10v = Number(document.getElementById("luna10").value);
  luna11v = Number(document.getElementById("luna11").value);
  luna12v = Number(document.getElementById("luna12").value);

  luna1c = Number(document.getElementById("luna1c").value);
  luna2c = Number(document.getElementById("luna2c").value);
  luna3c = Number(document.getElementById("luna3c").value);
  luna4c = Number(document.getElementById("luna4c").value);
  luna5c = Number(document.getElementById("luna5c").value);
  luna6c = Number(document.getElementById("luna6c").value);
  luna7c = Number(document.getElementById("luna7c").value);
  luna8c = Number(document.getElementById("luna8c").value);
  luna9c = Number(document.getElementById("luna9c").value);
  luna10c = Number(document.getElementById("luna10c").value);
  luna11c = Number(document.getElementById("luna11c").value);
  luna12c = Number(document.getElementById("luna12c").value);
});
report.addEventListener("click", function () {
  //window.location = "report.html";
  let element = document.getElementById("myDiv");
  let hidden = element.getAttribute("hidden");
  bugetTitle.innerHTML = "Raport venituri si cheltuieli";
  const ctx = document.getElementById("myChart");
  if (hidden) {
    element.removeAttribute("hidden");
    gata.style.visibility = "visible";
  } else {
    element.setAttribute("hidden", "hidden");
    gata.style.visibility = "hidden";
    ctx.style.width = "300px";
  }

  //luna1v = Number(document.getElementById("luna1").value);
  //luna2v = Number(document.getElementById("luna2").value);
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Ianuarie",
        "Februarie",
        "Martie",
        "Aprilie",
        "Mai",
        "Iunie",
        "Iulie",
        "August",
        "Septembrie",
        "Octombrie",
        "Noiembrie",
        "Decembrie",
      ],
      datasets: [
        {
          label: "VENITURI",
          backgroundColor: "green",
          borderColor: "green",
          fill: false,
          data: [
            luna1v,
            luna2v,
            luna3v,
            luna4v,
            luna5v,
            luna6v,
            luna7v,
            luna8v,
            luna9v,
            luna10v,
            luna11v,
            luna12v,
          ],
          borderWidth: 1,
        },
        {
          label: "Cheltuieli",
          backgroundColor: "red",
          borderColor: "red",
          fill: false,
          data: [
            luna1c,
            luna2c,
            luna3c,
            luna4c,
            luna5c,
            luna6c,
            luna7c,
            luna8c,
            luna9c,
            luna10c,
            luna11c,
            luna12c,
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
