import { Button } from ".";
import { imagePreview } from "../assets";

import type { Dispatch, SetStateAction } from "react";

const FilePicker = ({
  file,
  setFile,
  readFile
}: {
  file: File | null,
  setFile: Dispatch<SetStateAction<File | null>>,
  readFile: (type: "logo" | "full") => void
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-100 text-xs truncate">
          {!file ? "No file selected" : `file: ${file.name}`}
        </p>
      </div>
      <picture className="flex-1 flex gap-3 flex-col">
        <header>
          <p className="text-aoi-50">Image preview:</p>
        </header>
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            title={`Image ${file.name}`}
            alt={`Preview image from ${file.name}`}
            className="w-28 aspect-auto m-auto"
          />
        ): (
          <img
            src={imagePreview}
            title="Image preview"
            alt="Image acting as placeholder for the preview"
            className="w-28 aspect-auto m-auto"
          />
        )}
      </picture>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          type="outlined"
          title="Apply logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs font-normal px-2 py-1 rounded-md"
        />
        <Button
          type="filled"
          title="Apply texture"
          handleClick={() => readFile("full")}
          customStyles="text-xs font-normal px-2 py-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default FilePicker;