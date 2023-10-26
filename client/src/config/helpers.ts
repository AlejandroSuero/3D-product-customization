export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  if (!canvas) {
    console.error("There is no <canvas> to work with");
    return;
  }
  const dataUrl = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataUrl;
  link.download = "Your_customized_product.png"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const reader = (file: Blob) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise<string>((resolve, _) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result as string);
    fileReader.readAsDataURL(file);
  });
};

export const getContrastingColor = (color: string): string => {
  const hex = color[0] === "#" ? color.replace("#", "") : color;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? "black" : "white";
};