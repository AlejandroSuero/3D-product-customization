import { Button } from ".";

import type { Dispatch, SetStateAction } from "react";

const FilePicker = ({
  file,
  setFile,
  readFile
}: {
  file: File,
  setFile: Dispatch<SetStateAction<File>>,
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
          {!file ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          type="outlined"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-md font-normal px-2 py-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default FilePicker;