import { prompt } from "./entrada/entrada.js";
import { buscarTarea } from "./funciones/buscarTarea.js";
import { crearTarea } from "./funciones/crearTarea.js";
import { mostrarTarea } from "./funciones/mostrarTarea.js";

let op;
const tareas = [];
let id = 1;

do {
  console.log("\n¿Que deseas hacer?\n");

  op = parseInt(
    prompt(
      "[1] Ver mis tareas\n[2] Buscar una tarea\n[3] Agregar una tarea\n[0] Salir\n> ",
    ),
  );
  if (op < 0 || op > 3) {
    console.log("\nERROR: Opcion invalida, vuelva a elegir una opcion\n");
  }

  switch (op) {
    case 1:
      if (tareas.length === 0) {
        console.log("\nNo tenes ninguna tarea cargada.");
        break;
      }
      console.log("¿Que tareas deseas ver?\n");
      do {
        op = parseInt(
          prompt(
            "[1] Todas\n[2] Pendiente\n[3] En curso\n[4] Terminadas\n[0] Volver\n> ",
          ),
        );

        if (op < 0 || op > 4) {
          console.log("ERROR: opcion invalida, ingrese nuevamente.");
        }
      } while (op < 0 || op > 4);
      if (op === "0") {
        console.log("\nVolviendo...\n");
        break;
      }

      mostrarTarea(op, tareas); //si selecciona otra opcion que no sea 0, muestra las tareas

      break;
    case 2:
      if (tareas.length === 0) {
        console.log("\nNo tenes ninguna tarea cargada.");
        break;
      }
      buscarTarea(tareas);
      break;
    case 3:
      crearTarea(tareas, id);
      id++;

      break;
    case 0:
      console.log("\nSaliendo del sistema...\n");
      break;
  }
} while (op != 0);
