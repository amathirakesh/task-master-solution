import {cssColors} from "../constants/colors";
const nearestColor = require('nearest-color');

/*No need to edit or delete this*/
const colorMatcher = nearestColor.from(cssColors);

/*No need to edit or delete this*/
export const hexColorToGeneralName  = (hexColor: string) => {
    const nearest = colorMatcher(hexColor);

    return nearest.name;
}

/*No need to edit or delete this*/
export const getRandomHexColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return hexColor;
}

export interface ColorPalette {
    color: string;
    label: string;
}

export const getColorPalette = (): ColorPalette[] => {
    let colorPalette = new Array(10);
    for(let key=0; key<10; key++) {
        const color = getRandomHexColor();
        colorPalette[key] = {
            color,
            label: hexColorToGeneralName(color)
        };
    }

    return colorPalette;
}