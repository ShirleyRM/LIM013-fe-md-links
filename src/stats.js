const { getLinks } = require("./getMd");

const  stats = (arrMdLinks) => {
  const total = arrMdLinks.length;
  const unique = [...new Set(arrMdLinks.map((link) => link.href))].length;
  return  `
    `   
}