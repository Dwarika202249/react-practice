import { useEffect, useState } from "react";
import "./randomcolor.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #673947
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    // console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfColor]);

  return (
    <>
      <h1 className="project2" style={{color: color, textAlign: 'center'}}>PROJECT 2 - RANDOM COLOR GENERATOR</h1>
    <div className="container" style={{ background: color }}>
      <div className="btnContainer">
        <button onClick={() => setTypeOfColor("hex")} className="hexBtn">
          Create HEX Color
        </button>
        <button onClick={() => setTypeOfColor("rgb")} className="rgbBtn">
          Create RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className="randomBtn"
        >
          Generate Random Color
        </button>
      </div>
      <div className="detailsContainer">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
    </>
  );
};

export default RandomColor;
