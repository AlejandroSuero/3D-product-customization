import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { config } from "../config/config";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { slideAnimation } from "../config/motion";
import { AiPrompt, ColorPicker, FilePicker, Tab } from "../components";

import type { ActiveTabType, DecalStateType, TabName, TextureType } from "../types";

const initialActiveTab: ActiveTabType = { logoShirt: true, stylishShirt: false };

const Customizer = () => {
  const snapshot = useSnapshot(state);
  const [file, setFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState("");
  const [generatingTexture, setGeneratingTexture] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState(initialActiveTab);

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
      return <AiPrompt
        prompt={prompt}
        setPrompt={setPrompt}
        generatingTexture={generatingTexture}
        handleSubmit={handleSubmit}
      />;
    default:
      return null;
    }
  };

  const handleSubmit = async (type: TextureType) => {
    if (!prompt) return alert("Please enter a prompt");
    try {
      setGeneratingTexture(true);
      const url = process.env.NODE_ENV === "production" ? config.production.backendUrl : config.development.backendUrl;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      handleDecals(type, `data:image/png;base64,${data.photo}`);
    } catch (err) {
      alert("An error ocurred during the submission\n" + err);
    } finally {
      setGeneratingTexture(false);
      setActiveEditorTab("");
      setPrompt("");
    }
  };

  const handleActiveEditorTab = (tabName: string) => {
    setActiveEditorTab((prevState) => {
      if (tabName === prevState) return "";
      return tabName;
    });
  };

  const handleActiveFilterTab = (tabName: TabName) => {
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
    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      };
    });
  };

  const handleDecals = (type: TextureType, result: string) => {
    const decalType: DecalStateType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const readFile = (type: TextureType) => {
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
                    handleClick={() => handleActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.aside>
          <motion.aside className="filtertabs-container" {...slideAnimation("up")}>
            { FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name as keyof typeof activeFilterTab]}
                handleClick={() => handleActiveFilterTab(tab.name as TabName)}
              />
            ))}
            <button
              className="download-btn"
              onClick={downloadCanvasToImage}
            >
              <img
                src={download}
                alt="download image button icon"
                className="w-3/5 h-3/5 object-contain"
              />
            </button>
          </motion.aside>
        </main>
      )}
    </AnimatePresence>
  );
};

export default Customizer;