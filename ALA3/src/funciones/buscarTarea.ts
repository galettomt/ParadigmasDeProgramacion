import { prompt } from "../entrada/entrada";
import { ListaDeTareas } from "../tipos/tipos";

export function buscarTarea(tareas: ListaDeTareas) {
  const busquedaTarea: string = (
    prompt("Introduce el titulo de una Tarea para buscarla:\n> ") ?? ""
  ).toLowerCase();

  let encontradas = tareas.buscarPorTitulo(busquedaTarea);

  console.log("Estas son las tareas relacionadas\n");
  for (const tarea of encontradas) {
    console.log("[", tarea.id, "] ", tarea.titulo);
  }

  if (encontradas.length === 0) {
    console.log("No hay tareas relacionadas con la busqueda\n");
  }
  return;
}
