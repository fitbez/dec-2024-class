import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Page from "./components/Page/Page";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Page>
        <Hero />
      </Page>
    </div>
  );
}

export default App;
