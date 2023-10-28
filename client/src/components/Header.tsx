import { useSnapshot } from "valtio";
import state from "../store";

const Header = () => {
  const snapshot = useSnapshot(state);
  const clickableStyle = !snapshot.intro
    ? "px-3 py-1 bg-aoi-700 hover:bg-aoi-900 bg-gradient-to-r from-aoi-900 rounded-md font-bold cursor-pointer visible-selection"
    : "px-3 py-1 bg-aoi-700 bg-gradient-to-r from-aoi-900 rounded-md font-bold cursor-default visible-selection";
  return (
    <header className="bg-transparent fixed z-10 xl:py-8 xl:px-36 sm:p-8 p-6">
      <nav className="flex gap-2 justify-center items-center">
        <h1
          className="text-xl xl:text-3xl text-white flex items-center gap-3">
          <strong
            onClick={() => state.intro = true}
            title={snapshot.intro ? "青目, aome, means blue eyes" : "Go back home"}
            className={clickableStyle}>
                aome <small className="visible-selection">青目</small>
          </strong> 
          {snapshot.intro && "3D product customizer"}
        </h1>
      </nav>
    </header>
  );
};

export default Header;