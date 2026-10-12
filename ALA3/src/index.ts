import { prompt } from "./entrada/entrada";
import { tareas } from "./datos/datos";
import { buscarTarea } from "./funciones/buscarTarea";
import { VerTareas } from "./funciones/verTareas";
import { agregarTarea } from "./funciones/agregarTarea";

//---------------------------------

let opcion: number;

do {
  console.log("\n¿Que deseas hacer?\n");

  opcion = Number(
    prompt(
      "[1] Ver mis tareas\n[2] Buscar una tarea\n[3] Agregar una tarea\n[0] Salir\n> ",
    ),
  );

  if (opcion < 0 || opcion > 3) {
    console.log("\nERROR: Opcion invalida, vuelva a elegir una opcion\n");
  }

  switch (opcion) {
    case 1:
      VerTareas(tareas);
      break;

    case 2:
      buscarTarea(tareas);
      break;

    case 3:
      agregarTarea();
      break;

    case 0:
      console.log("\nSaliendo del sistema...\n");
      break;
  }
} while (opcion != 0);
