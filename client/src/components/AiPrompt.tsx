import type { Dispatch, SetStateAction } from "react";

import { Button } from ".";
import { TextureType } from "../types";

const AiPrompt = ({
  prompt,
  setPrompt,
  generatingTexture,
  handleSubmit
}: {
  prompt: string;
  setPrompt: Dispatch<SetStateAction<string>>;
  generatingTexture: boolean;
  handleSubmit: (type: TextureType) => void;
}) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea text-aoi-50"
        placeholder="Ask AI for a texture..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingTexture ? (
          <Button 
            type="outlined"
            title="Asking AI..."
            customStyles="text-xs rounded-md py-1 px-2"
            isDisabled
          />
        ): (
          <>
            <Button
              type="outlined"
              title="Apply logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs rounded-md py-1 px-2"
            />
            <Button
              type="filled"
              title="Apply full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs rounded-md py-1 px-2"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AiPrompt;