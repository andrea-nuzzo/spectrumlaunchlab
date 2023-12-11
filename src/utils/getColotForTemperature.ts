export function getColorForTemperature(value: number) {
    if (value >= 100) return '#ff8a80'; // pink/red
    else if (value >= 85) return '#ffcc80'; // orange/gold
    else if (value >= 70) return '#fff9c4'; // mellow yellow
    else if (value >= 55) return '#c5e1a5'; // lime/teal
    else if (value >= 40) return '#80deea'; // turquoise/blue
    else if (value >= 25) return '#0277bd'; // navy blue
    else if (value >= 10) return '#b3e5fc'; // light gray/blue
    else if (value >= 0) return '#e1f5fe'; // barely there blue/white
    else if (value >= -60) return '#ffffff'; // white for extreme cold
    else return '#000000'; // default color if none of the conditions are met
  }