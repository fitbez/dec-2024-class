import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Page from "./components/Page/Page";

function App() {
  return (
    <div>
      <NavBar />
      <Page>
        <h2>Hello World</h2>
      </Page>
    </div>
  );
}

export default App;
