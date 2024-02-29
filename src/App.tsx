import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
  let items = ["DunnyTM", "Karen", "Panos", "Hannalee", "Angela", "Joanne"];

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
