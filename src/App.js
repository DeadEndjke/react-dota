import "./App.css";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Heroes from "./components/Heroes/Heroes";
import Nav from "./components/Nav/Nav";
import HeroPage from "./components/Heroes/HeroItem/HeroPage/HeroPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<BackgroundVideo />}></Route>
          <Route path="/heroes" element={<Heroes />}></Route>
          <Route path="/heroes/:id" element={<HeroPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
