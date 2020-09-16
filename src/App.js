import React from "react";
import Chatbot from "./lib/components/Chatbot";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Chatbot isOpenDefault jsonData="/data/test.json" />
    </div>
  );
}

export default App;
