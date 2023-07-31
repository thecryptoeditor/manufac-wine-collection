import React from "react";
import ClassWiseStatsComponent from "./components/classWiseMeanMedianMode";
import CalGamma from "./components/CalGamma.js";

function App() {
  return (
    <div className="App">
      <ClassWiseStatsComponent />
      <CalGamma />
    </div>
  );
}

export default App;
