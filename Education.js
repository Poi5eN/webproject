import React from "react";
import Card from "./Card";
import "./OurTeam.css";

const cardsData = [
  {
    title: "Card 1",
    image: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card 2",
    image: "https://via.placeholder.com/150",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "Card 3",
    image: "https://via.placeholder.com/150",
    description: "Fusce mollis gravida neque, non bibendum elit iaculis quis.",
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardsData.map((cardData) => (
        <Card
          title={cardData.title}
          image={cardData.image}
          description={cardData.description}
        />
      ))}
    </div>
  );
};

export default Cards;
