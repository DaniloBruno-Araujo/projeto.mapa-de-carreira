import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import RoadMap from "./components/RoadMap/RoadMap";

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <AboutMe />
      <RoadMap />
    </main>
  );
}

export default App;
