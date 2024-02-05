import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 1339,
      name: "🍇 Grapes",
      color: "purple",
    },
    {
      id: 1336,
      name: "🍉 Watermelon",
      color: "red",
    },
    {
      id: 1335,
      name: "🍓 Strawberry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit, i) => (
        <Card key={i} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
