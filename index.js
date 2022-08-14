/*** OUR Solar-System PLANETS Gravitational FORCE ***/
const MERCURY = 3.7;
const VENUS = 8.87;
const EARTH = 9.807;
const MARS = 3.721;
const JUPITER = 24.79;
const SATURN = 10.44;
const URANUS = 8.87;
const NEPTUNE = 11.15;

/*** OUR Solar-System PLANETS Gravitational FORCE ***/

let massInKg = 0          // user input mass in kg's value
let planetMass = 0        // planets Gravitational force
let planetName = ""       // user input planet Name

function getWeight(event) {
 massInKg = event.target.value
}

function getPlanet(event) {
 planetName = event.target.value

 if (planetName === "Mercury") {
  planetMass = MERCURY
 } else if (planetName === "Venus") {
  planetMass = VENUS
 } else if (planetName === "Earth") {
  planetMass = EARTH
 } else if (planetName === "Mars") {
  planetMass = MARS
 } else if (planetName === "Jupiter") {
  planetMass = JUPITER
 } else if (planetName === "Saturn") {
  planetMass = SATURN
 } else if (planetName === "Uranus") {
  planetMass = URANUS
 } else if (planetName === "Neptune") {
  planetMass = NEPTUNE
 }
}

function getBtnClick() {
 if (planetName === "" || massInKg === 0) {  // validation for empty input values
  let style = document.getElementById("ans")
  style.innerText = `input value is empty`
  style.style.color = "red"               // change the color if value is empty
 } else {
  const weight = massInKg * planetMass
  let styleNew = document.getElementById("ans")
  styleNew.innerText = `THE ${massInKg} K.G of the Object on Earth = ${weight} N`
  styleNew.style.color = "black"          // change the color if value is empty
 }
}
