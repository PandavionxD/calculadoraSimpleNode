const { multiplicar } = require("./helpers/multiplicar");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    type: "number",
    describe: "Base tiene que ser un número y por defecto es 5",
  })
  .option("l", {
    alias: "limit",
    demandOption: true,
    default: 10,
    describe: "Limite de numero de la multiplicacion - default = 10",
    type: "number",
  })
  .option("s", {
    alias: "show",
    default: false,
    type: "boolean",
  })
  .check((argv, options) => {
    if (isNaN(argv.l)) {
      throw new Error("Limite tiene que ser un número");
    }
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("Base tiene que se un número");
    }
    return true;
  }).argv;

// console.log(process.argv)
// console.log(argv);

// console.clear();
let num = argv.b;
let limit = argv.l;
let show = argv.s;
multiplicar(num, limit, show)
  .then((msj) => console.log(msj, "creado".toUpperCase().magenta))
  .catch((error) => console.log(error));
