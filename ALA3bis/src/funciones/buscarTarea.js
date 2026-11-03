import { prompt } from "../entrada/entrada.js";

export const buscarTarea = (tareas) => {
  const busqueda = prompt(
    "Introduce el titulo de una Tarea para buscarla:\n> ",
  ).toLowerCase();
  let encontrado = false;
  console.log("Estas son las tareas relacionadas\n");

  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].titulo.toLowerCase().indexOf(busqueda) !== -1) {
      console.log(
        "[",
        tareas[i].id,
        "] ",
        tareas[i].titulo,
        "| Estado:",
        tareas[i].obtenerEstado(),
      );
      encontrado = true;
    }
  }

  if (!encontrado) {
    console.log("No hay tareas relacionadas con la busqueda\n");
  }

  return;
};
