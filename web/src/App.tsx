import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Positive } from "./components/positives/Positive";
import "./styles/main.css";

import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider attribute="class">
      <div className="mx-auto font-comic mb-[600px]">
        <Header />
        <Main />
        <Positive />
      </div>
    </ThemeProvider>
  );
}

export default App;
