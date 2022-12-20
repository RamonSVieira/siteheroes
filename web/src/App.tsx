import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import "./styles/main.css";

import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider attribute="class">
      <div className="mx-auto font-comic mb-[600px]">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
