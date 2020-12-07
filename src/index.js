const path = require("path");
const fs = require("fs");

//Función para validar existencia de la ruta
const existsPath = (route) => fs.existsSync(route);
// console.log(existsPath("C:\\Users\\Laboratoria\\Desktop\\Project\\LIM013-fe-md-links\\Prue"));
// Función para validar si la ruta es absoluta:
const validatePath = (route) => path.isAbsolute(route);

// Función que convierte ruta relativa a absoluta
const convertPath = (route) => {
  let absPath;

  if (!path.isAbsolute(route)) {
    absPath = path.resolve(route);
  } 
  return absPath;
};

// Función para validar si es File
const isFile = (route) => fs.statSync(route).isFile();

// Función para validar si es Directory
const isDirectory = (route) => fs.statSync(route).isDirectory();

// Función para validar si es MarkDown  
const isMd = (route) => path.extname(route) === ".md";
// console.log(isMd("README.md"));
// console.log(isMd('C:\\Users\\Laboratoria\\Desktop\\Project\\LIM013-fe-md-links\\Prueba'));

module.exports = {
  existsPath,
  validatePath,
  convertPath,
  isFile,
  isDirectory,
  isMd,
};
 