import logo from "./logo.svg";
import "./App.css";
import { getUserInfo } from "./services/randomUserGeneratorService";
import React, { useState, useEffect } from "react";

function App() {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const getInformation = async () => {
      let infoJSON = await getUserInfo();
      setUserInfo(infoJSON.results[0]);
    };
    getInformation();
  }, []);

  console.log({ userInfo });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User Generator</h1>
      </header>
      <div className="Profile-card">
        <img src={userInfo?.picture.large} />
        <p
          style={{
            color: "#999",
            fontSize: "18px",
            margin: "0",
          }}
        >
          Hi, my name is
        </p>
        <div
          style={{
            color: "#2c2e31",
            fontSize: "38px",
            margin: "5px",
            textTransform: "capitalize",
          }}
        >
          {userInfo?.name.first} {userInfo?.name.last}!
        </div>
        <p
          style={{
            color: "#999",
            fontSize: "18px",
            margin: "0",
          }}
        ></p>
      </div>
      {/* {JSON.stringify(userInfo)} */}
    </div>
  );
}

export default App;
