const fetch = require('node-fetch');
const getmd = require('./getmd.js')

const validation = (route) => {
  const links = getmd.getLinks(route);
  const arrPromises = links.map((link) => (fetch(link.href) 
      .then((response) => ({
        href: link.href,
        text: link.text,
        file: link.file,
        status: response.status,
        statusText: response.statusText,
      })))
      .catch(() => (
      {
        href: link.href,
        text: link.text,
        file: link.file,
        status: 500,
        statusText: 'Fail',
      }
      )))
      return Promise.all(arrPromises);
};

// validation("C:\\Users\\Laboratoria\\Desktop\\Project\\LIM013-fe-md-links\\Prueba").then((response) => console.log((response)));

module.exports = { validation };

// function suma(a, b) {
//   return a + b;
// }

// function resta(a, b) {
//   return a(5,7) - b;
// }

// console.log(resta(suma,5));