const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function (element) {
  this.element = element
};

InstrumentInfoView.prototype.bindEvents = function () {

  const displayElement = document.createElement("section");
  this.element.appendChild(displayElement);

  PubSub.subscribe("InstrumentFamilies:family", (event) => {

    const family = event.detail;

    const currentSection = document.querySelector("section");
    currentSection.innerHTML = " ";

    const familyName = document.createElement("h2");
    familyName.textContent = family.name;
    displayElement.appendChild(familyName);

    const familyDesc = document.createElement("p");
    familyDesc.textContent = family.description;
    displayElement.appendChild(familyDesc);

    const instrumentsHeading = document.createElement("h3");
    instrumentsHeading.textContent = "Instruments:"
    displayElement.appendChild(instrumentsHeading);

    const instrumentsList = document.createElement("ul");
    displayElement.appendChild(instrumentsList);

    const instrumentsArr = family.instruments;
    instrumentsArr.forEach((instrument) => {
      const instrumentListItem = document.createElement("li");
      instrumentListItem.textContent = instrument;
      instrumentsList.appendChild(instrumentListItem);
    });



  });

};

module.exports = InstrumentInfoView;
