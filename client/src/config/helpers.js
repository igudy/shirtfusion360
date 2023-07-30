// Function to download image
export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


// Read content of a file as a data URL
export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });


  // Working with colors
export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};


// CODE EXPLAINED
// This code exports three utility functions related to working with images and colors:

// 1. `downloadCanvasToImage`:
//    This function is used to download the content of a canvas element as an image file (PNG format). Here's what the function does step by step:
//    - It selects the first canvas element on the page using `document.querySelector("canvas")`.
//    - It gets the data URL of the canvas content using `canvas.toDataURL()`. The data URL represents the image data as a base64-encoded string.
//    - It creates a new anchor (`<a>`) element using `document.createElement("a")`.
//    - It sets the `href` attribute of the anchor element to the data URL obtained earlier.
//    - It sets the `download` attribute of the anchor element to "canvas.png", which will be the default name of the downloaded file.
//    - It appends the anchor element to the document body using `document.body.appendChild(link)`.
//    - It programmatically clicks the anchor element using `link.click()`, triggering the download of the image file.
//    - Finally, it removes the anchor element from the document body using `document.body.removeChild(link)`.

// 2. `reader`:
//    This function is a utility to read the content of a file as a data URL. It takes a file object as input and returns a promise that resolves with the data URL representing the file's content. Here's what the function does step by step:
//    - It creates a new `FileReader` object using `new FileReader()`.
//    - It sets up an `onload` event handler for the `FileReader` object. When the file is fully read, the event handler will be executed.
//    - It uses `fileReader.readAsDataURL(file)` to read the content of the provided file as a data URL.
//    - Once the reading is complete, the `onload` event handler resolves the promise with the result (`fileReader.result`), which is the data URL representing the file content.

// 3. `getContrastingColor`:
//    This function calculates the contrasting color (either "black" or "white") that should be used based on a given background color. The function takes a color string (in hexadecimal format with or without the "#" symbol) as input and returns either "black" or "white". Here's how the function works:
//    - It removes the "#" character from the color string (if present) to get the hexadecimal value.
//    - It converts the hexadecimal value to its RGB component values (red, green, and blue).
//    - It calculates the brightness of the color using a weighted average of the RGB values. The brightness value ranges from 0 to 255, where higher values represent brighter colors.
//    - Depending on the brightness value, it returns "black" for darker colors and "white" for lighter colors, aiming to provide good readability for text or elements on the given background color.

// These utility functions can be helpful when working with images and colors in web development projects.
