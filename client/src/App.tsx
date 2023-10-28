import CanvasModel from "./canvas";
import { Home, Customizer } from "./pages";
import { Logo } from "./components";

function App() {
  return (
    <>
      <header className="bg-transparent fixed z-10 xl:py-8 xl:px-36 sm:p-8 p-6">
        <nav className="flex gap-2 justify-center items-center">
          <Logo size={60} /> 
          <h1 className="text-xl xl:text-3xl text-white"><strong>Aome's</strong> 3D product customizer</h1>
        </nav>
      </header>
      <main className="app tansitions ease-in dark:bg-gray-700 bg-gray-300">
        <Home />
        <Customizer />
        <CanvasModel />
      </main>
    </>
  );
}

export default App;
