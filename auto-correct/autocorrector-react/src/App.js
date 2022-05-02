import "./App.css";
import { Autocorrector } from "./components/Autocorrector";

export const App = () => {
  return (
    <div className="">
      <header className="App-header">
        <h1>Type realy or wierd and press spacebar</h1>
        <Autocorrector />
      </header>
    </div>
  );
};
