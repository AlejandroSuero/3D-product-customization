import { ColorResult, SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

export const ColorPicker = () => {
  const snapshot = useSnapshot(state);
  const changeColor = (color: ColorResult): string => state.color = color.hex;
  return (
    <div
      className="absolute left-full ml-3"
    >
      <SketchPicker
        color={snapshot.color}
        disableAlpha
        onChange={changeColor}
      />
    </div>
  );
};

export default ColorPicker;