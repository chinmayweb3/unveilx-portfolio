import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
