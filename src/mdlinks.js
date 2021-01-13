const index = require("./index.js");
const { getLinks } = require("./getMd.js");
const { getMd } = require("./getMd.js");
const { validation } = require("./validate.js");

const mdLinks = (route, {validate}) =>
  new Promise((resolve, reject) => {
    let arrAllMd = [];
    if (!index.existsPath(route)) {
      reject('la ruta no existe');
    }
    if (index.validatePath(route)) {
      arrAllMd = getLinks(route);
    }else{
      arrAllMd = getLinks(index.convertPath(route));
    }
    if (validate === true) {
      arrAllMd = validation(route);
      arrAllMd.then((validateLinks) => resolve(validateLinks));
    }else{
      console.log(arrAllMd);
      resolve(arrAllMd);
    }  
});   
    
mdLinks('C:\\Users\\Laboratoria\\Desktop\\FE-Projects\\LIM013-fe-md-links\\Prueba', {validate: false}).then((validatelinks) => {console.log(validatelinks)}); 

module.exports = { mdLinks };