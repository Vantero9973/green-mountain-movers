import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div style={{ background: "white" }}>
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
