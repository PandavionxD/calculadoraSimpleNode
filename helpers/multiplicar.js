const fs = require("fs");

let msj = "";

const multiplicar = async (num = 5, limit = 10, show = false) => {
  try {
    for (let index = 1; index < limit + 1; index++) {
      msj += `${num} * ${index}  = ${num * index}\n`;
    }

    if (show === true) {
      console.log("=====================================");
      console.log(`Tabla del ${num}`);
      console.log("=====================================");
      console.log(msj);
    }

    fs.writeFileSync(`./data/tabla del ${num}.txt`, msj);
    return `Tabla de ${num}.txt creada con exito`;
  } catch (error) {
    throw new Error("Ups salio un error 😥");
  }
};

module.exports = {
  multiplicar,
};
