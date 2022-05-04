export const absInitialPoints = [
  { x: 1, y: 0, id: "abs_corner_topright" },
  { x: 0, y: 0, id: "abs_corner_topleft" },
  { x: 1, y: 1, id: "abs_corner_bottomright" },
  { x: 0, y: 1, id: "abs_corner_bottomleft" },
  { x: 0.487, y: 0.555 - 0.1, id: "umbilicus" },
  { x: 0.487, y: 0.37 - 0.07, id: "epigastrium" },
  { x: 0.558, y: 0.46 - 0.08, id: "luq" },
  { x: 0.565, y: 0.65 - 0.12, id: "llq" },
  { x: 0.488, y: 0.72 - 0.13, id: "suprapubic" },
  { x: 0.418, y: 0.65 - 0.12, id: "rlq" },
  { x: 0.418, y: 0.46 - 0.08, id: "ruq" },
  { x: 0.545, y: 0.22 - 0.07, id: "1" },
  { x: 0.435, y: 0.22 - 0.07, id: "2" },
  { x: 0.58, y: 0.3 - 0.08, id: "4" },
  { x: 0.66, y: 0.43 - 0.07, id: "5" },
  { x: 0.67, y: 0.65 - 0.12, id: "6" },
  { x: 0.64, y: 0.73 - 0.14, id: "7" },
  { x: 0.58, y: 0.83 - 0.14, id: "8" },
  { x: 0.487, y: 0.91 - 0.18, id: "9" },
  { x: 0.39, y: 0.83 - 0.14, id: "10" },
  { x: 0.32, y: 0.73 - 0.14, id: "11" },
  { x: 0.29, y: 0.65 - 0.12, id: "12" },
  { x: 0.31, y: 0.43 - 0.09, id: "13" },
  { x: 0.39, y: 0.3 - 0.07, id: "14" },
  { x: 0.48, y: 0.95, id: "all" },
  { x: 0.48, y: 0.85, id: "15" },
  { x: 0.233, y: 0.91, id: "16" },
  { x: 0.734, y: 0.91, id: "17" },
  { x: 0.734, y: 0.99, id: "18" },
  { x: 0.233, y: 0.99, id: "19" },
];

export const absValidRegion = [
  "epigastrium",
  "luq",
  "llq",
  "suprapubic",
  "rlq",
  "umbilicus",
  "ruq",
];
export default { absInitialPoints, absValidRegion };
