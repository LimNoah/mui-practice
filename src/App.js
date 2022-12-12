import logo from "./logo.svg";
import "./App.css";
import TemporaryDrawer from "./components/TemporaryDrawer";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import BasicTextFields from "./components/BasicTextField";
import ContinuousSlider from "./components/ContinuousSlider";
import ToggleButtons from "./components/ToggleBuuttons";
import TransferList from "./components/TransferList";
import ComboBox from "./components/ComboBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr />
        <TemporaryDrawer />
        <ResponsiveDrawer />
        <BasicTextFields />
        <ContinuousSlider />
        <ToggleButtons />
        <TransferList />
        <ComboBox />
      </header>
    </div>
  );
}

export default App;
