/*** OUR Solar-System PLANETS Gravitational FORCE in m/s^2 ***/
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

    let imgSrc = document.getElementsByClassName("palnet-change")[0]

    imgSrc.draggable = false

    if (planetName === "Mercury") {
        planetMass = MERCURY
        imgSrc.src = "./images/Mercury.jpg";
    } else if (planetName === "Venus") {
        planetMass = VENUS
        imgSrc.src = "./images/Venus.jpg";
    }
    else if (planetName === "Earth") {
        planetMass = EARTH
        imgSrc.src = "./images/Earth.jpg";
    } else if (planetName === "Mars") {
        planetMass = MARS
        imgSrc.src = "./images/Mars.jpg";
    } else if (planetName === "Jupiter") {
        planetMass = JUPITER
        imgSrc.src = "./images/jupiter.png";
    } else if (planetName === "Saturn") {
        planetMass = SATURN
        imgSrc.src = "./images/saturn.png";
    } else if (planetName === "Uranus") {
        planetMass = URANUS
        imgSrc.src = "./images/Uranus.jpg";
    } else if (planetName === "Neptune") {
        planetMass = NEPTUNE
        imgSrc.src = "./images/Neptune.jpg";
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
        styleNew.innerText = `${massInKg} K.G Object On ${planetName} is = ${weight.toFixed(2)} Newton`
        styleNew.style.color = "black"          // change the color if value is empty
    }
}
