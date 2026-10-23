import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Inquiry from "./components/Inquiry";
import Login from "./components/Login";
import Footer from "./components/Footer";
import PhotoDetail from "./components/PhotoDetail";

function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <About />
      <Inquiry />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login key="signin" mode="signin" />} />
        <Route path="/signup" element={<Login key="signup" mode="signup" />} />
        <Route path="/gallery/:slug" element={<PhotoDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}