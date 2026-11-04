import { prompt } from "../entrada/entrada.js";
import { detalleTarea } from "./detalleTarea.js";
import { ESTADOS } from "../tipos/tipos.js";

const mostrarListaTareas = (tareas, estado) => {
  let encontrado = false;
  for (let i = 0; i < tareas.length; i++) {
    if (estado === "" || tareas[i].estado === estado) {
      console.log(
        "[",
        tareas[i].id,
        "]",
        tareas[i].titulo,
        "| Estado:",
        tareas[i].obtenerEstado(),
      );
      encontrado = true;
    }
  }
  if (!encontrado) {
    console.log("\nNo hay tareas para mostrar.");
  }

  return encontrado;
};

const seleccionarTarea = (tareas, estado) => {
  let detalle = parseInt(
    prompt("Introduzca el NUMERO para verla o 0 para volver\n> "),
  );

  if (detalle === 0) {
    console.log("\nVolviendo...\n");
    return;
  }

  let posicion = -1;

  for (let i = 0; i < tareas.length; i++) {
    if (
      tareas[i].id === detalle &&
      (estado === "" || tareas[i].estado === estado)
    ) {
      posicion = i;
      break;
    }
  }

  if (posicion === -1) {
    console.log("ERROR: ID no encontrado en esta lista");
    return;
  }

  detalleTarea(tareas[posicion], tareas);
};

export const mostrarTarea = (op, tareas) => {
  switch (op) {
    case 1:
      console.log("Estas son TODAS tus tareas.\n");

      if (mostrarListaTareas(tareas, "")) {
        console.log("\n¿Deseas ver los detalles de alguna?");
        seleccionarTarea(tareas, "");
      }

      break;
    case 2:
      console.log("Estas son tus tareas PENDIENTES.\n");

      if (mostrarListaTareas(tareas, ESTADOS.p)) {
        console.log("\n¿Deseas ver los detalles de alguna?");
        seleccionarTarea(tareas, ESTADOS.p);
      }

      break;
    case 3:
      console.log("Estas son todas tus tareas EN CURSO.\n");

      if (mostrarListaTareas(tareas, ESTADOS.e)) {
        console.log("\n¿Deseas ver los detalles de alguna?");
        seleccionarTarea(tareas, ESTADOS.e);
      }

      break;
    case 4:
      console.log("Estas son todas tus tareas TERMINADAS\n");

      if (mostrarListaTareas(tareas, ESTADOS.t)) {
        console.log("\n¿Deseas ver los detalles de alguna?");
        seleccionarTarea(tareas, ESTADOS.t);
      }

      break;
    case 5:
      console.log("Estas son todas tus tareas CANCELADAS\n");

      if (mostrarListaTareas(tareas, ESTADOS.c)) {
        console.log("\n¿Deseas ver los detalles de alguna?");
        seleccionarTarea(tareas, ESTADOS.c);
      }

      break;
  }
  return;
};
