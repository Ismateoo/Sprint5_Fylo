import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Features from "./Components/Features/Features.jsx";
import StayProductive from "./Components/StayProductive/StayProductive.jsx";
import EarlyAccess from "./Components/EarlyAccess/EarlyAccess.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="contenedor">
      <Nav />
      <Hero />
      <Features />
      <StayProductive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;
