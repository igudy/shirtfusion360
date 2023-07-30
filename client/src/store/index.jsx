import { proxy } from "valtio"

const state = proxy({
  intro: true,
  color: "#EFBD48", // Enclose the hexadecimal value in quotes
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
})

export default state
