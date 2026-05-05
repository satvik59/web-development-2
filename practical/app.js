import React from "react";
import MyProvider from "./MyProvider";
import UserProfile from "./UserProfile";

function App() {
  return (
    <MyProvider>
      <div>
        <h1>React Context API Demo</h1>
        <UserProfile />
      </div>
    </MyProvider>
  );
}

export default App;
