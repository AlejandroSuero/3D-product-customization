import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { config } from "../config/config";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { AiPrompt, Button, ColorPicker, FilePicker, Tab } from "../components";

import type { DecalStateType } from "../config/constants";

type ActiveTabType = { logoShirt: boolean, stylishShirt: boolean };

const initialActiveTab: ActiveTabType = { logoShirt: true, stylishShirt: false };

const Customizer = () => {
  const snapshot = useSnapshot(state);
  const [file, setFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState("");
  const [generatingTexture, setGeneratingTexture] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setFilterEditorTab] = useState(initialActiveTab);

  const generateTabContent = () => {
    switch (activeEditorTab) {
    case "colorPicker":
      return <ColorPicker />;
    case "filePicker":
      return <FilePicker
        file={file}
        setFile={setFile}
        readFile={readFile}
      />;
    case "aiPrompt":
      return <AiPrompt />;
    default:
      return null;
    }
  };

  const handleActiveFilterTab = (tabName: "logoShirt" | "stylishShirt") => {
    switch (tabName) {
    case "logoShirt":
      state.isLogoTexture = !activeFilterTab[tabName];
      break;
    case "stylishShirt":
      state.isFullTexture = !activeFilterTab[tabName];
      break;
    default:
      state.isLogoTexture = true;
      state.isFullTexture = false;
      break;
    }
  };

  const handleDecals = (type: "logo" | "full", result: string) => {
    const decalType: DecalStateType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile = (type: "logo" | "full") => {
    if (!file) return;
    reader(new Blob([file], { type: "image/*" }))
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      });
  };

  return (
    <AnimatePresence>
      { !snapshot.intro && (
        <main>
          <motion.aside key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation("left")}>
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                { EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.aside>
          <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
            <Button
              type="filled"
              title="Home"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm rounded-md"
            />
          </motion.div>
          <motion.div className="filtertabs-container" {...slideAnimation("up")}>
            { FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                handleClick={() => setFilterEditorTab({
                  [tab.name]: true,
                  ...initialActiveTab
                })}
              />
            ))}
          </motion.div>
        </main>
      )}
    </AnimatePresence>
  );
};

export default Customizer;