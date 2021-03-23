import cardCreateFunction from "./templates/card.hbs";

const cardData = {
    title: "Пушистый котик",
    description: "Огромная жирная наглая тушка",
    reviews: ["Ночью носится как сумасшедший - рекомендую",
        "Всегда просит есть - скоро перестанет пролазить в дверь",
        "Сам умеет открывать холодильник"]
};

const cardHTMLTemplate = cardCreateFunction(cardData);

document.body.insertAdjacentHTML("beforeend", cardHTMLTemplate)