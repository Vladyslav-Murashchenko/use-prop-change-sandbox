import React from "react";
import "./App.css";
import { UserForm } from "./containers/UserForm";

function App() {
  return (
    <div className="App">
      <UserForm onSubmit={console.log} />
    </div>
  );
}

export default App;
