import { prompt } from "../entrada/entrada.js";
import { Tarea } from "../tipos/tipos.js";

export const crearTarea = (tareas, id) => {
  let nombre;
  let desc;

  console.log("\nAGREGAR UNA TAREA\n");
  do {
    nombre = prompt("Ingrese la tarea a realizar\n> ");
    if (nombre === "") {
      console.log("\nERROR: campo vacio, ingrese un titulo.");
    }
  } while (nombre === "");
  desc = prompt("Ingrese la descripcion de " + nombre + "\n> ");
  const tarea = new Tarea(id, nombre, desc, "p", "1");

  tareas.push(tarea);

  console.log(
    "\n¡Tarea agregada correctamente!\nVolviendo al menu principal...",
  );
  return;
};
