import { aptitudes } from "./constants.js";

const fieldRow = document.querySelector(".field-row");

let showDescription = false;
let selectAllCheckState = false;

aptitudes.forEach((aptitude) => {
    let { id, value, isDisabled, isSelected, name, description } = aptitude;

    let fieldColumn = document.createElement('div');
    fieldColumn.classList.add('field-column');

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", id);
    labelElement.title = name;
    labelElement.className = "container";
    labelElement.textContent = name;

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = id;
    inputElement.name = "aptitudes";
    inputElement.value = value;
    inputElement.disabled = isDisabled;
    inputElement.checked = isSelected;
    inputElement.className = "check-item";
    

    let spanElement = document.createElement('span');
    spanElement.className = "checkmark";
    spanElement.style.backgroundColor = (value === "ui") ? "#46464C" : "";
    
    labelElement.appendChild(inputElement);
    labelElement.appendChild(spanElement);
    

    let descriptionElement = document.createElement("div");
    descriptionElement.className = "aptitude-description";
    descriptionElement.textContent = description;

    fieldColumn.appendChild(labelElement);
    fieldColumn.appendChild(descriptionElement);

    fieldRow.appendChild(fieldColumn);
});


const selectAllButton = document.getElementById("selectAllButton");

selectAllButton.addEventListener("click", (e) => {
    let aptitudeCheckBoxes = document.getElementsByClassName('check-item');
    selectAllCheckState = !selectAllCheckState;
    if(aptitudeCheckBoxes.length > 0) {
        for(let aptitude of aptitudeCheckBoxes) {
            if(!(aptitude.disabled)) {
                aptitude.checked = selectAllCheckState;
            }
        }
    }
});

const hidShowDescription = document.getElementById("hideShowDescription");

const getDescriptionTextStatus = () => {
    hidShowDescription.textContent = (showDescription) ? 'Hide Description' : 'Show Description';
    let aptitudeDescriptions = document.getElementsByClassName("aptitude-description");
    if(aptitudeDescriptions.length > 0) {
        for(let aptitudeDescription of aptitudeDescriptions) {
            if (showDescription === true) {
                aptitudeDescription.setAttribute("style", "display:block;");
            } else {
                aptitudeDescription.setAttribute("style", "display:none;");
            }
        }
    }
};

getDescriptionTextStatus();

hidShowDescription.addEventListener("click", () => {
    showDescription = !showDescription;
    getDescriptionTextStatus();
    
});

