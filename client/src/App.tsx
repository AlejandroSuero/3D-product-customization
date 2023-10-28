import CanvasModel from "./canvas";
import Header from "./components/Header";
import { Home, Customizer } from "./pages";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Header />
      <main className="app tansitions ease-in dark:bg-gray-700 bg-gray-300">
        <Home />
        <Customizer />
        <CanvasModel />
      </main>
    </>
  );
}

export default App;
