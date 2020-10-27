const path = require ('path');
const absolutePath ='C:\\Users\\Shirley\\Desktop\\Projects LIM013\\Projects-FE-LIM013\\LIM013-fe-md-links\\README.md';
const relativePath = './README.md';
// console.log(path.isAbsolute(relativePath));
// path.isAbsolute('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\Projects-FE-LIM013\\LIM013-fe-md-links\\README.md');


// Validar si la ruta es absoluta:
const validatePathIsAbsolute = (ruta) => {
  const result = path.isAbsolute(ruta);
  return result
};
// console.log(validatePathIsAbsolute(relativePath));


// Transformar path relativa a absoluta:
// const relativeToAbsolute = path.resolve('./README.md');
// console.log(relativeToAbsolute);


//Función que convierte cualquier ruta relativa a absoluta
const relativeToAbsolute = (ruta) => {
const absPath = path.resolve(ruta);
// console.log(path.resolve(ruta));
  return absPath;
};
// console.log(relativeToAbsolute('./mdlinks.js'));


// Validar si es archivo o directorio
const fs = require ('fs');
const stats = fs.statSync('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\Projects-FE-LIM013\\LIM013-fe-md-links\\README.md');
// console.log(' is directory? ' + stats.isDirectory ('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\Projects-FE-LIM013\\LIM013-fe-md-links\\README.md'));
// console.log(' is file? ' + stats.isFile ('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\Projects-FE-LIM013\\LIM013-fe-md-links\\README.md'));


// Función para validar si es MD
const isMd = (mdPath) => {
  const validateMd = path.parse(mdPath).ext === '.md';
    return validateMd
  };
  //console.log(' is Md? ' + isMd ('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\Projects-FE-LIM013\\LIM013-fe-md-links\\README.md'));


  // Si es MD almacenar en un array
  let mdArr = ['C:\\Users\\Shirley\\Desktop\\Projects LIM013\\Projects-FE-LIM013\\LIM013-fe-md-links\\README.md']
  // console.log(mdArr.length);


  //Recorrer array
  mdArr.forEach(function (element, index) {
    // console.log(element, index);
  })



