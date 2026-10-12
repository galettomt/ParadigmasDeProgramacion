import { ListaDeTareas } from "../tipos/tipos";
import { prompt } from "../entrada/entrada";
import { editarTarea } from "./editarTarea";

export function VerTareas(tareas: ListaDeTareas) {
  let idDetalle: number;
  let opcion: number;

  if (tareas.total !== 0) {
    console.log("¿Que tareas deseas ver?\n");
    do {
      opcion = Number(
        prompt(
          "[1] Todas\n[2] Pendiente\n[3] En curso\n[4] Terminadas\n[0] Volver\n> ",
        ),
      );

      if (opcion < 0 || opcion > 4) {
        console.log("ERROR: opcion invalida, ingrese nuevamente.\n");
      }
    } while (opcion < 0 || opcion > 4);

    switch (opcion) {
      case 1:
        console.log("Estas son TODAS tus tareas.\n");
        for (const tarea of tareas.tareas) {
          console.log("[", tarea.id, "] ", tarea.titulo);
        }

        console.log("\n¿Deseas ver los detalles de alguna?");
        idDetalle = Number(
          prompt("Introduzca el NUMERO para verla o 0 para volver\n> "),
        );
        if (idDetalle === 0) {
          console.log("\nVolviendo...\n");
          break;
        } else {
          editarTarea(idDetalle, tareas);
        }

        break;

      case 2:
        console.log("Estas son tus tareas PENDIENTES.\n");
        const pendientes = tareas.filtrarPorEstado("p");

        for (const tareas of pendientes) {
          console.log("[", tareas.id, "] ", tareas.titulo);
        }
        if (pendientes.length === 0) {
          console.log("No tenes tareas Pendientes\n");
        } else {
          console.log("¿Deseas ver los detalles de alguna?");
          idDetalle = Number(
            prompt("Introduzca el NUMERO para verla o 0 para volver\n> "),
          );

          if (idDetalle === 0) {
            console.log("\nVolviendo...\n");
            break;
          } else {
            editarTarea(idDetalle, tareas);
          }
        }

        break;

      case 3:
        console.log("Estas son todas tus tareas EN CURSO.\n");

        const enCurso = tareas.filtrarPorEstado("e");

        for (const tareas of enCurso) {
          console.log("[", tareas.id, "] ", tareas.titulo);
        }
        if (enCurso.length === 0) {
          console.log("No tenes tareas En Curso\n");
        } else {
          console.log("¿Deseas ver los detalles de alguna?");
          idDetalle = Number(
            prompt("Introduzca el NUMERO para verla o 0 para volver\n> "),
          );

          if (idDetalle === 0) {
            console.log("\nVolviendo...\n");
            break;
          } else {
            editarTarea(idDetalle, tareas);
          }
        }

        break;

      case 4:
        console.log("Estas son todas tus tareas TERMINADAS\n");

        const terminadas = tareas.filtrarPorEstado("t");

        for (const tareas of terminadas) {
          console.log("[", tareas.id, "] ", tareas.titulo);
        }
        if (terminadas.length === 0) {
          console.log("No tenes tareas Terminadas\n");
        } else {
          console.log("¿Deseas ver los detalles de alguna?");
          idDetalle = Number(
            prompt("Introduzca el NUMERO para verla o 0 para volver\n> "),
          );

          if (idDetalle === 0) {
            console.log("\nVolviendo...\n");
            break;
          } else {
            editarTarea(idDetalle, tareas);
          }
        }

        break;
    }
    return;
  }
  console.log("\nNo tenes ninguna tarea cargada.\n");
}
