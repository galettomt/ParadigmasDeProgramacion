import { tareas } from "../datos/datos";

export function detallesTarea() {
  for (let i = 0; i < tareas.length; i++) {
    console.log(
      "\nEsta es la tarea que elegiste.\n-",
      tareas[i].titulo,
      "\nDescripcion: ",
      tareas[i].descripcion,
    );

    if (tareas[i].estado.toLowerCase() === "p") {
      console.log("Estado: Pendiente");
    } else if (tareas[i].estado.toLowerCase() === "e") {
      console.log("Estado: En Curso");
    } else {
      console.log("Estado: Terminada");
    }

    console.log(
      "Dificultad: ",
      tareas[i].dificultad,
      "\n-------------------\n",
    );
  }

  return;
}
