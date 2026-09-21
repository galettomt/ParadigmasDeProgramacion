import { prompt } from "../entrada/entrada";
import { Tarea } from "../tipos/tipos";

export function buscarTarea(tareas: Tarea[]) {
  let busquedaTarea: string;
  let encontrado = false;

  busquedaTarea = (
    prompt("Introduce el titulo de una Tarea para buscarla:\n> ") ?? ""
  ).toLowerCase();
  console.log("Estas son las tareas relacionadas\n");
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].titulo.toLowerCase().indexOf(busquedaTarea) !== -1) {
      console.log("[", tareas[i].id, "] ", tareas[i].titulo);
      encontrado = true;
    }
  }

  if (!encontrado) {
    console.log("No hay tareas relacionadas con la busqueda\n");
  }
  return;
}
