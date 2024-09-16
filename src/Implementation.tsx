import React, { FC, useState, useEffect } from "react";
import { FloorPlanToggles } from "./FloorPlanToggles";
import { ReactComponent as Logo } from "./assets/floor_plan.svg";
import { LOCATION_IDS } from "./constants/floorplan";

export const Implementation: FC = () => {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const applyColor = (color: string) => {
    LOCATION_IDS.forEach((id) => {
      document.getElementById(id)!.style.fill = color;
    });
  };

  const handleColorChange = (color: string) => {
    setColor(color);
  };

  useEffect(() => {
    if (color) {
      applyColor(color);
    }
  }, [color]);

  return (
    <>
      <FloorPlanToggles
        defaultColor={color}
        handleToggle={handleToggle}
        handleColorChange={handleColorChange}
      />
      <div>
      <Logo className={`svg ${toggle ? "rotate-svg" : "original-svg"}`} /> 
        {/* comment by Rakesh: we could use classnames library here */}
      </div>
    </>
  );
};
