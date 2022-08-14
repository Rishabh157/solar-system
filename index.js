const MERCURY = 3.7;
const VENUS = 8.87;
const EARTH = 9.807;
const MARS = 3.721;
const JUPITER = 24.79;
const SATURN = 10.44;
const URANUS = 8.87;
const NEPTUNE = 11.15;


let massInKg = 0
let planetMass = 0
let planetName = ""

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
 if (planetName === "" || massInKg === 0) {
  alert("Mass & Planet is required")
 } else {
  const weight = massInKg * planetMass
  document.getElementById("ans").innerText = `THE ${massInKg} K.G of the Object on Earth = ${weight} N`
 }
}
