import './App.css';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Link,
  Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Homepage/>}/> */}
          {/* <Route path='About' element={<TextForm/>}/> */}
        </Routes>
      </BrowserRouter>
      <Homepage/>
      <Footer/>
    </>
  );
}

export default App;
