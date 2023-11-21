import { cards } from "../../Utils/cards.js";
import Card from "../Card/Card.js";

function CardList() {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}

export default CardList;
