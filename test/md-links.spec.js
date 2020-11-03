const testPath = require('../index.js');

const stats = 'C:\\Users\\Shirley\\Desktop\\Projects LIM013\\LIM013-fe-md-links\\README.md';
const directory = '\\Users\\Shirley';

// Test para la función que convierte ruta relativa a absoluta
describe('Debería validar si es una ruta', () => {
  const pathAbsolute = 'C:\\Users\\Shirley\\Desktop\\Projects LIM013\\LIM013-fe-md-links\\README.md';
  it('should be a function', () => {
    expect(typeof testPath.convertPath).toBe('function');
  });
  it('should return an absolute path', () => {
    expect(testPath.convertPath(pathAbsolute)).toBe(pathAbsolute);
  });
  it('should convert a relative path to an absolute path', () => {
    const relativePath = './README.md';
    expect(testPath.convertPath(relativePath)).toBe(pathAbsolute);
  });
});

//Test para validar si es file
describe('should validate if the path is a file', () =>{
  it('should validate if its a function', () => {
    expect(typeof testPath.isFile).toBe('function');
  });
  it('should return true if its a file',() => {
    expect(testPath.isFile(stats)).toEqual(true);
  });
  it('should return false if its a directory', () => {
    expect(testPath.isFile(directory)).toEqual(false);
  });
});

//Test para validar si es directory
describe('should validate if the path is a directory', () =>{
  it('should validate if its a function', () => {
    expect(typeof testPath.isDirectory).toBe('function');
  });
  it('should return true if its a directory',() => {
    expect(testPath.isDirectory(directory)).toEqual(true);
  });
  it('should return false if its a file', () => {
    expect(testPath.isDirectory(stats)).toEqual(false);
  });
});

//Test para validar si es MD
describe('should validate if the path is MarkDown', () =>{
  it('should validate if its a function', () => {
    expect(typeof testPath.isMd).toBe('function');
  });
  it('should return true if it is MarkDown',() => {
    expect(testPath.isMd(stats)).toEqual(true);
  });
  it('should return false if is not MarkDown', () => {
    expect(testPath.isMd(directory)).toEqual(false);
  });
});