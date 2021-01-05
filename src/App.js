import logo from "./logo.svg";
import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";

function App() {
  return (
    <div className="App">
      <ProfileComponent>{logo}</ProfileComponent>
    </div>
  );
}

export default App;
