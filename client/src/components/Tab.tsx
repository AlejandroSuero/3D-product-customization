import { useSnapshot } from "valtio";

import state from "../store";

import type { CSSProperties, MouseEventHandler } from "react";

import type { TabType } from "../types";

const Tab = ({
  tab,
  handleClick,
  isFilterTab = false,
  isActiveTab
}: {
  tab: TabType,
  handleClick: MouseEventHandler,
  isFilterTab?: boolean,
  isActiveTab?: string
}) => {
  const snapshot = useSnapshot(state);
  const activeStyle: CSSProperties = isFilterTab && isActiveTab
    ? { backgroundColor: snapshot.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 };
  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? "rounded-full glassmorphism" : "rounded-4"}`}
      onClick={handleClick}
      style={activeStyle}
    >
      <img
        src={tab.icon}
        alt={tab.alt}
        title={tab.title}
        className={`${isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"}`}
      />
    </div>
  );
};

export default Tab;