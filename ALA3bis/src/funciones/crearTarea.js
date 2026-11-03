import { prompt } from "../entrada/entrada.js";
import { Tarea } from "../tipos/tipos.js";

export const crearTarea = (tareas, id) => {
  let nombre;
  let desc;
  let dificultad;
  let vencimiento;

  console.log("\nAGREGAR UNA TAREA\n");
  do {
    nombre = prompt("Ingrese la tarea a realizar\n> ");
    if (nombre === "") {
      console.log("\nERROR: campo vacio, ingrese un titulo.");
    }
  } while (nombre === "");
  desc = prompt("Ingrese la descripcion de " + nombre + "\n> ");
  do {
    dificultad = prompt("Ingrese la dificultad de " + nombre + " (1-3)\n> ");
    if (!["1", "2", "3"].includes(dificultad)) {
      console.log(
        "\nERROR: dificultad invalida, ingrese un valor entre 1 y 3.",
      );
    }
  } while (!["1", "2", "3"].includes(dificultad));

  const fechaCreacion = new Date().toISOString();

  vencimiento = prompt(
    "Ingrese la fecha de vencimiento de " +
      nombre +
      " (YYYY-MM-DD) o deje en blanco si no tiene\n> ",
  );

  const tarea = new Tarea(
    id,
    nombre,
    desc,
    "p",
    dificultad,
    fechaCreacion,
    null,
    vencimiento || null,
  );

  tareas.push(tarea);

  console.log(
    "\n¡Tarea agregada correctamente!\nVolviendo al menu principal...",
  );
  return;
};
