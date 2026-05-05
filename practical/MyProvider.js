import React, { useState } from "react";
import MyContext from "./MyContext";

// Step 2: Create Provider Component
const MyProvider = ({ children }) => {
  const [user, setUser] = useState("BHARAT");

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
