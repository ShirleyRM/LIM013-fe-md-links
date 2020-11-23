const path = require("path");
const fs = require("fs");

//Función para validar existencia de la ruta
const existsPath = (ruta) => fs.existsSync(ruta);

// Función para validar si la ruta es absoluta:
const validatePath = (ruta) => path.isAbsolute(ruta);

// Función que convierte ruta relativa a absoluta
const convertPath = (ruta) => {
  let absPath;

  if (!path.isAbsolute(ruta)) {
    absPath = path.resolve(ruta);
  } else {
    absPath === false;
  }
  return absPath;
};
// console.log(convertPath("package.json"));

// Función para validar si es File
const isFile = (ruta) => fs.statSync(ruta).isFile();

// Función para validar si es Directory
const isDirectory = (ruta) => fs.statSync(ruta).isDirectory();

// Función para validar si es MarkDown
const isMd = (ruta) => path.extname(ruta) === ".md";
// console.log(isMd("README.md"));

module.exports = {
  existsPath,
  validatePath,
  convertPath,
  isFile,
  isDirectory,
  isMd,
};
