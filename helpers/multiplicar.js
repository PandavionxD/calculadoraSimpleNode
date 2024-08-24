const fs = require("fs");
const colors = require("colors")

let msj = "";

const multiplicar = async (num = 5, limit = 10, show = false) => {
  try {
    for (let index = 1; index < limit + 1; index++) {
      msj += `${num} ${"*".red} ${index}  ${"=".red} ${num * index}\n`;
    }

    if (show === true) {
      console.log("=====================================".blue);
      console.log(`Tabla del ${num}`.blue);
      console.log("=====================================".blue);
      console.log(msj);
    }

    fs.writeFileSync(`./data/tabla del ${num}.txt`, msj);
    return `Tabla de ${num}.txt creada con exito`.magenta;
  } catch (error) {
    throw new Error("Ups salio un error 😥");
  }
};

module.exports = {
  multiplicar,
};
