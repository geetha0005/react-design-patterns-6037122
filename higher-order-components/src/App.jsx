import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return (
    //<UserInfoWrapped a={1} b="hello" c={{ name: "geetha" }} />
    <UserInfoWrapped
      user={{ name: "latha", age: 23, hairColor: "brown", hobbies: [] }}
    />
  );
}

export default App;
