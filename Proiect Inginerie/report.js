const ctx = document.getElementById("myChart1").getContext("2d");
const luna1v = document.getElementById("luna1");
const luna2v = document.getElementById("luna2");
const luna3v = document.getElementById("luna3");
const luna4v = document.getElementById("luna4");
const luna5v = document.getElementById("luna5");
const luna6v = document.getElementById("luna6");
const luna7v = document.getElementById("luna7");
const luna8v = document.getElementById("luna8");
const luna9v = document.getElementById("luna9");
const luna10v = document.getElementById("luna10");
const luna11v = document.getElementById("luna11");
const luna12v = document.getElementById("luna12");

const labels = [
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
];

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
const config = {
  type: "doughnut",
  data: data,
};

const myChart1 = new Chart(ctx, config);
