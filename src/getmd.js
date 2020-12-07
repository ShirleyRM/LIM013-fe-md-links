const path = require("path");
const fs = require("fs");
const index = require("./index.js");
const marked = require("marked");

//Función para recorrer directory y encontrar MD
const getMd = (route) => {
  let arrMd = [];

  if (index.isFile(route)) {
    if (index.isMd(route)) {
      arrMd.push(route);
    }
  } else {
    const readDir = fs.readdirSync(route);
    readDir.forEach((file) => {
      const pathMd = path.join(route, file);
      arrMd = arrMd.concat(getMd(pathMd));
    });
  }
  return arrMd;
};
// console.log(getMd("C:\\Users\\Laboratoria\\Desktop\\Project\\LIM013-fe-md-links\\Prueba"));


const getLinks = (route) => {
  const arrayMd = getMd(route);
  const arrMdLinks = [];
  arrayMd.forEach((file) => {
    const mdText = (pathMd) => fs.readFileSync(pathMd, "utf-8");
    const renderer = new marked.Renderer()
    renderer.link = 
    (href, title, text) => {
        const object = {
          href,
          text,
          file,
        };
        arrMdLinks.push(object);
      };
      marked(mdText(file), {renderer});
    });
  
  return arrMdLinks;
  };
// console.log(getLinks('C:\\Users\\Laboratoria\\Desktop\\Project\\LIM013-fe-md-links\\README.md'));

module.exports = {
  getMd,
  getLinks,
};
