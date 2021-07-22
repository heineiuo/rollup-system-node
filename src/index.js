const { System } = require("systemjs");
const path = require("path");

global.__dirname = __dirname;

global.require = function (name) {
  return require(name);
};

System.import(
  "http://localhost:8080/src/a-module-require-fs.system.js"
).then((res) => {
  res.reddir();
}).catch(e => {
  if (e.name.startsWith('FetchError')) {
    console.error('npm run http-serve first')
  } else {
    console.error(e)
  }
});
