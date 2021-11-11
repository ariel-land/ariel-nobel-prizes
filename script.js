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

// function getCategories() {
//   // for loop over nobels.prizes
//   for (const object of nobels.prizes) {
//     for (const name of object.laureates) {
//       let headerTwo = document.createElement("h2");
//       headerTwo.textContent = `Award Year: ${object.year} | Category: ${object.category}`;
//       headerTwo.style.textTransform = "capitalize";
//       headerTwo.style.paddingLeft = "20px";
//       headerTwo.style.fontSize = "25px";
//       let nameList = document.createElement("p");
//       nameList.textContent = `Name: ${name.firstname} ${name.surname}`;
//       nameList.style.paddingLeft = "20px";
//       nameList.style.fontSize = "18px";
//       let motivation = document.createElement("p");
//       motivation.textContent = `Motivation: ${name.motivation}.`;
//       motivation.style.paddingLeft = "20px";

//       document.body.append(headerTwo, nameList, motivation);
//     }
//   }
// }

// getCategories();
