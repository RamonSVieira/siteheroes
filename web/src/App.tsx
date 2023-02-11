import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

import { Home } from "./pages/Home";
import { Stories } from "./pages/Stories";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class">
        <div className="mx-auto font-comic">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
