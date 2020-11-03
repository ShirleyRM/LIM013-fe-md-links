const path = require('path'); // módulo que nos ayuda a interactucar con paths y files
const fs = require('fs'); // módulo para trabajar con el sistema de archivos
// const jsdom = require ( "jsdom" ); para recorrer archivos
// const { JSDOM } =  jsdom;

// const pathRel = './README.md';
// const pathAb =  'C:\\Users\\Shirley\\Desktop\\Projects LIM013\\LIM013-fe-md-links\\README.md';
// const pathC = 'C:\Users\Shirley\Desktop\Projects LIM013\LIM013-fe-md-links\example.md';

// Función para validar si existe ruta
const isApath = (ruta) => fs.existsSync(ruta);

// Función para validar si la ruta es absoluta:
// const validatePathIsAbsolute = (ruta) => {
//   const result = path.isAbsolute(ruta);
//   return result
// }

// console.log(validatePathIsAbsolute(relativePath));

// Transformar path relativa a absoluta:
// const relativeToAbsolute = path.resolve('./README.md');
// console.log(relativeToAbsolute);

// Función que convierte ruta relativa a absoluta
const convertPath = (ruta) => {
  let absPath
  const cwd = process.cwd();
  if (!path.isAbsolute(ruta)) {
  return path.join(cwd,ruta)
  } else {
    absPath = ruta;
  }
  return absPath;
}

// Función para validar si es file
const isFile = (ruta) => fs.statSync(ruta).isFile();

// Función para validar si es directory
const isDirectory = (ruta) => {
  let pathDirectory = false;
  if (path.parse(ruta).ext === '') {
    pathDirectory = true;
  }
  return pathDirectory;
};

// Función para validar si es MD
const isMd = (ruta) => {
  let validateMd = false;
  if (path.parse(ruta).ext === '.md') {
    validateMd = true;
  }
  return validateMd;
};
// console.log(' is Md? ' + isMd ('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\LIM013-fe-md-links\\README.md'));

// Si es MD almacenar en un array
let mdArr = ['C:\\Users\\Shirley\\Desktop\\Projects LIM013\\LIM013-fe-md-links\\README.md']
// console.log(mdArr.length);

//Recorrer array
mdArr.forEach(function (element, index) {
  // console.log(element, index);
});

// const stats = fs.statSync('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\LIM013-fe-md-links\\README.md');
// console.log(' is directory? ' + stats.isDirectory ('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\LIM013-fe-md-links\\README.md'));

module.exports = { isApath, convertPath, isFile, isDirectory, isMd };
