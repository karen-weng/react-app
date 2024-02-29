import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
  let items = [
    "DunnyTM",
    "Hannalee",
    "Jason",
    "Angela",
    "Anne",
    "Angeli",
    "Ryu",
    "Katie",
    "Margaret",
    "Joanne",
    "Sunny",
    "Eric",
    "Panos",
    "Nathaniel",
    "Evan",
    "Leo",
    "Karen",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
