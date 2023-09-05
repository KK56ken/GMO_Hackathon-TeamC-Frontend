import "./App.css";
import UserComponent from "./components/UserComponent";

function App() {
  return (
    <div className="App">
      <UserComponent
        userId={0}
        userName={"細谷"}
        status={1}
        tasks={["a", "b", "c"]}
      />
    </div>
  );
}

export default App;
