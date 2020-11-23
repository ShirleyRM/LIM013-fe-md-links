const path = require("path");
const fs = require("fs");
const indexPath = require("./index.js");
const marked = require("marked");

//Función para recorrer directory y encontrar MD
const getMd = (ruta) => {
  let arrMd = [];

  if (indexPath.isFile(ruta)) {
    if (indexPath.isMd(ruta)) {
      arrMd.push(ruta);
    }
  } else {
    const readDir = fs.readdirSync(ruta);
    readDir.forEach((file) => {
      const pathMd = path.join(ruta, file);
      arrMd = arrMd.concat(getMd(pathMd));
    });
  }
  return arrMd;
};
// console.log(getMd('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\LIM013-fe-md-links\\Prueba'));

//Recorrer MD, extraer links e imprimirlos con renderer de Marked
const renderer = {
  link(href, title, text) {
    const object = {
      href,
      text,
      path: "",
    };
    console.log(object);
  },
};
marked.use({ renderer });

const getAllMd  = (ruta) => {
  const mdFiles = getMd(ruta);
  const arrMdLinks = [];
  mdFiles.forEach((allMd) => {
    const readMd = fs.readFileSync(allMd, 'utf-8');
    const toHtml = marked(readMd);
  });
  return arrMdLinks;
};
console.log(getAllMd('C:\\Users\\Shirley\\Desktop\\Projects LIM013\\LIM013-fe-md-links\\README.md'));

module.exports = { 
  getMd,
  getAllMd, 
};