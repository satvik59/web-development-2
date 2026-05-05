import React, { useContext } from "react";
import MyContext from "./MyContext";

// Step 3: Consume Context
const UserProfile = () => {
  const { user, setUser } = useContext(MyContext);

  return (
    <div>
      <h2>Hello, {user}!</h2>
      <button onClick={() => setUser("New User")}>
        Change User
      </button>
    </div>
  );
};

export default UserProfile;
