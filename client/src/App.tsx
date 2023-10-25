import CanvasModel from "./canvas";
import { Home, Customizer } from "./pages";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Customizer />
      <CanvasModel />
    </main>
  );
}

export default App;
