"use strict";
// Please don't delete the 'use strict' line above

function displayPhysics(year) {
  // object.preventDefault();
  for (const object of nobels.prizes) {
    if (object.year === year.toString()) {
      //    console.log(object.category);
      if (object.category === "physics") {
        for (const name of object.laureates) {
          //      console.log(name.firstname);
          let winners = document.querySelector("#physicsWinner");
          winners.innerHTML = `${name.firstname} ${name.surname}`;
        }
      }
    }
    // if (object.year !== year.toString()) {
    //   let winners = document.querySelector("#physicsWinner");
    //   winners.innerHTML = "No winner was found";
    // }
  }
}

function displayChemistry(year) {
  // object.preventDefault();
  for (const object of nobels.prizes) {
    if (object.year === year.toString()) {
      //    console.log(object.category);
      if (object.category === "chemistry") {
        for (const name of object.laureates) {
          //      console.log(name.firstname);
          let winners = document.querySelector("#chemistryWinner");
          winners.innerHTML = `${name.firstname} ${name.surname}`;
        }
      }
    }
  }
}

function displayMedicine(year) {
  // object.preventDefault();
  for (const object of nobels.prizes) {
    if (object.year === year.toString()) {
      //    console.log(object.category);
      if (object.category === "medicine") {
        for (const name of object.laureates) {
          //      console.log(name.firstname);
          let winners = document.querySelector("#medicineWinner");
          winners.innerHTML = `${name.firstname} ${name.surname}`;
        }
      }
    }
  }
}

function displayPeace(year) {
  // object.preventDefault();
  for (const object of nobels.prizes) {
    if (object.year === year.toString()) {
      //    console.log(object.category);
      if (object.category === "peace") {
        for (const name of object.laureates) {
          //      console.log(name.firstname);
          let winners = document.querySelector("#peaceWinner");
          winners.innerHTML = `${name.firstname} ${name.surname}`;
        }
      }
    }
  }
}

function displayLiterature(year) {
  // object.preventDefault();
  for (const object of nobels.prizes) {
    if (object.year === year.toString()) {
      //    console.log(object.category);
      if (object.category === "literature") {
        for (const name of object.laureates) {
          //      console.log(name.firstname);
          let winners = document.querySelector("#literatureWinner");
          winners.innerHTML = `${name.firstname} ${name.surname}`;
        }
      }
    }
  }
}

function displayEconomics(year) {
  // object.preventDefault();
  for (const object of nobels.prizes) {
    if (object.year === year.toString()) {
      //    console.log(object.category);
      if (object.category === "economics") {
        for (const name of object.laureates) {
          //      console.log(name.firstname);
          let winners = document.querySelector("#economicsWinner");
          winners.innerHTML = `${name.firstname} ${name.surname}`;
        }
      }
    }
  }
}

//still need to fix this function
function search(year) {
  // year.preventDefault();
  let currentYear = document.querySelector(".current-year");
  currentYear.innerHTML = year;
  // write the display function to go in here
  displayPhysics(year);
  displayChemistry(year);
  displayMedicine(year);
  displayPeace(year);
  displayLiterature(year);
  displayEconomics(year);
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
