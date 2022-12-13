import { Header } from "./components/header/Header";
import "./styles/main.css";

import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider attribute="class">
      <div className="mx-auto">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
