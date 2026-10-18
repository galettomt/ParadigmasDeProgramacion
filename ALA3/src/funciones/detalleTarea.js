import { prompt } from "../entrada/entrada.js";
import { editarTarea } from "./editarTarea.js";

export const detalleTarea = (tarea, tareas) => {
  console.log(
    "\nEsta es la tarea que elegiste.\nTitulo: ",
    tarea.titulo,
    "\nDescripcion: ",
    tarea.descripcion,
  );

  console.log("Estado: ", tarea.obtenerEstado());

  console.log("Dificultad: ", tarea.obtenerDificultad());

  console.log("\n-------------------\n");

  let editar;
  do {
    editar = prompt(
      "Si deseas editarla, presiona E, o presiona 0 para volver.\n> ",
    );

    if (editar.toLowerCase() !== "e" && editar !== "0") {
      console.log("ERROR: opcion invalida, intente nuevamente.\n");
    }
  } while (editar.toLowerCase() !== "e" && editar !== "0");

  if (editar.toLowerCase() === "e") {
    editarTarea(tarea.id, tareas);
  } else {
    console.log("Volviendo...");
  }
  return;
};
