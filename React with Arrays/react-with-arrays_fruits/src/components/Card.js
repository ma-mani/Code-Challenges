import "./Card.css";

export default function Card({ name, color }) {
  return <p className={`card card--${color}`}>{name}</p>;
}

/* ${
        color === "yellow"
          ? "card--yellow"
          : color === "red"
          ? "card--red"
          : color === "green"
          ? "card--green"
          : color === "purple"
          ? "card--purple"
          : ""
      }*/
