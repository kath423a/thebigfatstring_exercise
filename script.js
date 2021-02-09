"use script";

window.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
  console.log("sidenVises, Start");

  document.querySelector("button").addEventListener("click", showOutput);
}

function showOutput() {
  console.log("showOutput");

  //read userInput
}

// Space og Hyphen vist af Peter i undervisning (finder kun en space her, lav evt endnu en med -):
const fullName = "justin flinch-fletchley";

const firstSpace = fullName.indexOf(" ");

const beforePart = fullName.substring(0, firstSpace);
const character = fullName[firstSpace + 1];
const afterPart = fullName.substring(firstSpace + 2);

const capitalized = beforePart + character.toUpperCase() + afterPart;
console.log(`Capitalized name: ${capitalized}`);
