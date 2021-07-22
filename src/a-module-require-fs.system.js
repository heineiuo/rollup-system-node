System.register([], function (_export, _context) {
  var dep;
  function reddir() {
    const result = require("fs").readdirSync(__dirname);
    console.log("readdir result", result);
  }

  return {
    setters: [
      function (_dep) {
        dep = _dep;
      },
    ],
    execute: function () {
      _export({
        reddir,
      });
    },
  };
});
