import "./App.css";
import Card from "./components/Card";
import Column from "./components/Column";

function App() {
  return (
    <>
      <Column>
        <Card />
      </Column>
      <Column></Column>
    </>
  );
}

export default App;
