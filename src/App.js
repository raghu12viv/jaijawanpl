import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Homepage } from "./Components/Homepage";
import { AboutUS } from "./Components/AboutUS";
import { CeraSanitaryWare } from "./Components/CeraSanitaryWare";
import { ChairmanMessage } from "./Components/ChairmanMessage";
import { Footer } from "./Components/Footer";
import Product from "./Components/Product";
import MainPageContact from "./Components/MainPageContact";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUS />} />
            <Route path="/cerasanitaryware" element={<CeraSanitaryWare />} />
            <Route path="/chairmanmessage" element={<ChairmanMessage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<MainPageContact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  </>
  );
}

export default App;
