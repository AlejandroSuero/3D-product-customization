import CanvasModel from "./canvas";
import { Home, Customizer } from "./pages";

function App() {
  return (
    <main className="app transition-all ease-in bg-gray-700">
      <Home />
      <Customizer />
      <CanvasModel />
    </main>
  );
}

export default App;
