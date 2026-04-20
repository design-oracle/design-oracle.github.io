const cardNumber = getCardNumber()-1;
const cardNumeral = getCardNumber();

fetch('./cards.json')
  .then((res) => res.json())
  .then((data) => {
    var obj = data;
    const main = document.querySelector("#hero");
    const cardContent = document.querySelector('#cardContent');
    const cardImage = document.createElement("img");
    const cardH3 = document.querySelector("#cardTitle");
    const cardDesc = document.createElement("p");
    const ritualContainer = document.querySelector('#ritualContainer');
    const ritual = document.querySelector('#ritual');
    const oracleContainer = document.querySelector("#oracleContainer");
    const oracle = document.createElement("p");
    const oracle2 = document.createElement("p");

    const lunarContainer = document.querySelector("#lunarContainer");
    const lunarDate = document.createElement("p");

    if (cardNumeral <= 3) {
      lunarDate.textContent = "🌑 Lunar day " + cardNumeral;
    }
    else if (cardNumeral <= 7) {
      lunarDate.textContent = "🌒 Lunar day " + cardNumeral;
    }
    else if (cardNumeral <= 11) {
      lunarDate.textContent = "🌓 Lunar day " + cardNumeral;
    }
    else if (cardNumeral <= 14) {
      lunarDate.textContent = "🌔 Lunar day " + cardNumeral;
    }
    else if (cardNumeral <= 17) {
      lunarDate.textContent = "🌕 Lunar day " + cardNumeral;
    }
    else if (cardNumeral <= 21) {
      lunarDate.textContent = "🌖 Lunar day " + cardNumeral;
    }
    else if (cardNumeral <= 25) {
      lunarDate.textContent = "🌗 Lunar day " + cardNumeral;
    }
    else {
      lunarDate.textContent = "🌘 Lunar day " + cardNumeral;
    }

    cardImage.src = obj.cards[cardNumber].image;

    cardImage.setAttribute('class', 'hero');

    main.appendChild(cardImage);

    lunarContainer.appendChild(lunarDate);
});