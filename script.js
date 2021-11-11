"use strict";
// Please don't delete the 'use strict' line above

function displayWinners(year, subject) {
  let documentTarget = "#" + subject + "Winner";
  let winners = document.querySelector(documentTarget);
  winners.innerHTML = "There's no winner in this category this year";
  let winnersList = [];

  for (const object of nobels.prizes) {
    if (object.year === year.toString()) {
      if (object.category === subject) {
        for (const name of object.laureates) {
          winnersList.push(`${name.firstname} ${name.surname}`);
        }
      }
    }
  }
  if (winnersList.length > 0) {
    winners.innerHTML = winnersList.join("<br>");
  }
}

function search(year) {
  let categories = [
    "physics",
    "chemistry",
    "medicine",
    "peace",
    "literature",
    "economics",
  ];
  let currentYear = document.querySelector(".current-year");
  currentYear.innerHTML = year;
  for (const subject of categories) {
    displayWinners(year, subject);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let yearInputElement = document.querySelector("#search-text-input");
  search(yearInputElement.value);
  event.target.reset();
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
