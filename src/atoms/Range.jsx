import React from "react";

function Range({ percent, label }) {
  const percentColor = () => {
    if (percent < 50) {
      return `rgb(239 68 68)`;
    } else if (percent >= 50 && percent <= 70) {
      return `rgb(255 220 0)`;
    } else {
      return `rgb(34 197 94)`;
    }
  };
  const inputStyle = {
    background: `linear-gradient(to right,${percentColor()} ${percent}%, #fff ${percent}%)`,
  };
  return (
    <div className="w-full text-white text-[11px] font-semibold flex items-center justify-between h-max">
      <div className="w-1/2">
        <span>{label}: </span>
      </div>
      <div className="w-1/2 flex items-center  justify-end gap-3">
        <input type="range" className="ranges" style={inputStyle} />
        <span className="font-bold">{percent}</span>
      </div>
    </div>
  );
}

export default Range;
