import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import TranscationsPage from "./pages/TranscationsPage.jsx";
import UserDetailsPage from "./pages/UserDetailsPage.jsx";
import Header from "./components/Header.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/tx" element={<TranscationsPage />} />
        <Route path="/user" element={<UserDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
