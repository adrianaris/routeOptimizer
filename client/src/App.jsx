import React, { useState } from "react";
import Map from "./example/Map";

const App = () => {
  const [current, setCurrent] = useState([]);
  console.log(current);
  return (
    <div style={{ display: "flex" }}>
      <Map setCurrent={setCurrent} />
      <div
        style={{ position: "absolute", zIndex: 1, right: 0, margin: "0 1em" }}
      >
        {current.map(([lat, lng]) => (
          <div>{lat + ", " + lng}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
