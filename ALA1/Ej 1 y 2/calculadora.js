//EJERCICIO 2 -> CALCULADORA

const readline = require("readline");
// Creamos la interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//---------------------------------

rl.question("Ingrese una operacion -> '+', '-', '*', '/'\n-> ", (operacion) => {
  switch (operacion) {
    case "+":
      rl.question("Ingrese un numero: ", (num1) => {
        rl.question("Ingrese otro numero: ", (num2) => {
          let res = Number(num1) + Number(num2);
          console.log("El resultado es: ", res);
          rl.close();
        });
      });
      break;

    case "-":
      rl.question("Ingrese un numero: ", (num1) => {
        rl.question("Ingrese otro numero: ", (num2) => {
          let res = Number(num1) - Number(num2);
          console.log("El resultado es: ", res);
          rl.close();
        });
      });
      break;

    case "*":
      rl.question("Ingrese un numero: ", (num1) => {
        rl.question("Ingrese otro numero: ", (num2) => {
          let res = Number(num1) * Number(num2);
          console.log("El resultado es: ", res);
          rl.close();
        });
      });
      break;

    case "/":
      rl.question("Ingrese un numero: ", (num1) => {
        rl.question("Ingrese otro numero: ", (num2) => {
          let res = Number(num1) / Number(num2);
          console.log("El resultado es: ", res);
          rl.close();
        });
      });
      break;

    default:
      console.log("Operacion invalida");

      break;
  }
});
