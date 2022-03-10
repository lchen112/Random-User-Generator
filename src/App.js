import logo from "./logo.svg";
import "./App.css";
import { getUserInfo } from "./services/randomUserGeneratorService";

function App() {
  getUserInfo();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User Generator</h1>
      </header>
      <div className="Profile-card">
        <p>Hi, my name is </p>
      </div>
    </div>
  );
}

export default App;
