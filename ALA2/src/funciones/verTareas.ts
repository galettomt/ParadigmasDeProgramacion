import { Tarea } from "../tipos/tipos";
import { prompt } from "../entrada/entrada";
import { editarTarea } from "./editarTarea";

export function VerTareas(tareas: Tarea[]) {
  let idDetalle: number;
  let opcion: number;

  if (tareas.length !== 0) {
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
        for (let i = 0; i < tareas.length; i++) {
          console.log("[", tareas[i].id, "] ", tareas[i].titulo);
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
        let seEncontroPendiente = false;

        for (let i = 0; i < tareas.length; i++) {
          if (tareas[i].estado.toLowerCase() === "p") {
            seEncontroPendiente = true;
            console.log("[", tareas[i].id, "] ", tareas[i].titulo);
          }
        }
        if (!seEncontroPendiente) {
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
        let seEncontroenCurso = false;
        for (let i = 0; i < tareas.length; i++) {
          if (tareas[i].estado.toLowerCase() === "e") {
            seEncontroenCurso = true;
            console.log("[", tareas[i].id, "] ", tareas[i].titulo);
          }
        }
        if (!seEncontroenCurso) {
          console.log("No tenes tareas En curso\n");
        } else {
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
        let seEncontroTerminada = false;

        for (let i = 0; i < tareas.length; i++) {
          if (tareas[i].estado.toLowerCase() === "t") {
            console.log("[", tareas[i].id, "] ", tareas[i].titulo);
            seEncontroTerminada = true;
          }
        }

        if (!seEncontroTerminada) {
          console.log("No tenes tareas Terminadas\n");
        } else {
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
