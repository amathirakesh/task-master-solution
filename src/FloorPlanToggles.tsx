import React, { FC, useMemo } from "react";
import { getRandomHexColor, hexColorToGeneralName } from "./utils/colors";

interface FloorPlanTogglesProps {
  handleToggle: () => void;
  handleColorChange: (color: string) => void;
  defaultColor?: string;
}

export const FloorPlanToggles: FC<FloorPlanTogglesProps> = ({
  handleToggle,
  handleColorChange,
  defaultColor,
}) => {
  const colorPalette = useMemo(() => {
    let colorPalette = new Array(10);
    for (let key = 0; key < 10; key++) {
      const color = getRandomHexColor();
      colorPalette[key] = {
        color,
        label: hexColorToGeneralName(color),
      };
    }

    return Object.freeze(colorPalette);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleColorChange(e.target.value);
  };

  return (
    <>
      <div className="floor-plan-toggles">
        <div className="floor-plan-toggles__item">
          <p>Rotate floor plan</p>
          <button onClick={handleToggle}>Toggle</button>
        </div>
        <div className="floor-plan-toggles__item">
          <p>Location color</p>
          <select
            onChange={handleChange}
            value={defaultColor ? defaultColor : ""}
          >
            <option value="">Select</option>
            {colorPalette.map(({ color, label }) => (
              <option key={color} value={color}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
