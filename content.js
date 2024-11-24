const cardNumber = getCardNumber()-1;
const cardNumeral = getCardNumber();

import data from './cards.json' with { type: 'json' };
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

console.log(cardNumeral);

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
  lunarDate.textContent = "🌖 Lunar day " + cardNumeral;
}
else {
  lunarDate.textContent = "🌘 Lunar day " + cardNumeral;
}

cardH3.textContent = obj.cards[cardNumber].name;
cardImage.src = obj.cards[cardNumber].image;
cardDesc.textContent = obj.cards[cardNumber].desc;

obj.cards[cardNumber].ritual.forEach(function (item) {
  var li = document.createElement('li');
  li.textContent = item.step;
  ritual.appendChild(li);
});

oracle.textContent = obj.cards[cardNumber].oracle[0].positive;
oracle2.textContent = obj.cards[cardNumber].oracle[1].negative;

cardImage.setAttribute('class', 'hero');

main.appendChild(cardImage);

lunarContainer.appendChild(lunarDate);

cardContent.appendChild(cardH3);
cardContent.appendChild(cardDesc);
ritualContainer.appendChild(ritual);
oracleContainer.appendChild(oracle);
oracleContainer.appendChild(oracle2);