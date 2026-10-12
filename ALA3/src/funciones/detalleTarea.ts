import { Tarea } from "../tipos/tipos";

export function detallesTarea(tarea: Tarea) {
  console.log(
    "\nEsta es la tarea que elegiste.\n-",
    tarea.titulo,
    "\nDescripcion: ",
    tarea.descripcion,
  );

  console.log("Estado: ", tarea.obtenerEstado());

  console.log(
    "Dificultad: ",
    tarea.obtenerDificultad(),
    "\n-------------------\n",
  );

  return;
}
