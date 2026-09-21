import { prompt } from "../entrada/entrada";
import { Tarea } from "../tipos/tipos";
import { detallesTarea } from "./detalleTarea";

export function editarTarea(id: number, tareas: Tarea[]) {
  let editar: string;
  let nuevoNombre: string;
  let nuevaDescripcion: string;
  let nuevoEstado: string;
  let nuevaDificultad: string;
  let encontrada = false;

  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id === id) {
      encontrada = true;

      detallesTarea();

      do {
        editar =
          prompt(
            "Si deseas editarla, presiona E, o presiona 0 para volver.\n> ",
          ) ?? "0";

        if (editar.toLowerCase() !== "e" && editar !== "0") {
          console.log("ERROR: opcion invalida, intente nuevamente.\n");
        }
      } while (editar.toLowerCase() !== "e" && editar !== "0");

      if (editar.toLowerCase() === "e") {
        console.log("\nEstas editando la tarea ", tareas[i].titulo);
        console.log(
          "- Si deseas mantener los valores de un atributo, simplemente dejalo en blanco",
        );
        console.log(
          "- Si deseas dejar en blanco un atributo, escribe un espacio",
        );

        nuevoNombre = prompt("Ingresa el titulo: ") ?? "";
        if (nuevoNombre === "") {
          // Si no ingresa nada, no se modifica
        } else if (nuevoNombre.trim() === "") {
          tareas[i].titulo = ""; //Si ingresa espacio, queda en blanco
        } else {
          tareas[i].titulo = nuevoNombre; //si ingresa valor nuevo, se modifica
        }

        nuevaDescripcion = prompt("Ingresa la descripcion: ") ?? "";

        if (nuevaDescripcion === "") {
          // Si no ingresa nada, no se modifica
        } else if (nuevaDescripcion.trim() === "") {
          tareas[i].descripcion = "";
        } else {
          tareas[i].descripcion = nuevaDescripcion;
        }

        do {
          nuevoEstado =
            prompt("Estado ([P]endiente / [E]n curso / [T]erminada): ") ?? "";
          if (
            nuevoEstado.toLowerCase() !== "p" &&
            nuevoEstado.toLowerCase() !== "e" &&
            nuevoEstado.toLowerCase() !== "t" &&
            nuevoEstado.toLowerCase() !== ""
          ) {
            console.log("Error: Opcion invalida ");
          }
        } while (
          nuevoEstado.toLowerCase() !== "p" &&
          nuevoEstado.toLowerCase() !== "e" &&
          nuevoEstado.toLowerCase() !== "t" &&
          nuevoEstado.toLowerCase() !== ""
        );
        if (nuevoEstado === "") {
          // Si no ingresa nada, no se modifica
        } else if (nuevoEstado.trim() === "") {
          tareas[i].estado = "p"; //Si ingresa espacio, queda en su valor default [P]endiente
        } else {
          const estado = nuevoEstado.toLowerCase();

          if (estado === "p" || estado === "e" || estado === "t") {
            tareas[i].estado = estado;
          }
        }

        do {
          nuevaDificultad = prompt("Dificultad ([1] / [2] / [3]): ") ?? "";
          if (
            nuevaDificultad !== "1" &&
            nuevaDificultad !== "2" &&
            nuevaDificultad !== "3" &&
            nuevaDificultad !== ""
          ) {
            console.log("Error: Opcion invalida ");
          }
        } while (
          nuevaDificultad !== "1" &&
          nuevaDificultad !== "2" &&
          nuevaDificultad !== "3" &&
          nuevaDificultad !== ""
        );
        if (nuevaDificultad === "") {
          // Si no ingresa nada, no se modifica
        } else if (nuevaDificultad.trim() === "") {
          tareas[i].dificultad = "1"; //Si ingresa espacio, queda en su valor default [1]facil
        } else {
          const dificultad = nuevaDificultad;

          if (dificultad === "1" || dificultad === "2" || dificultad === "3") {
            tareas[i].dificultad = dificultad;
          }
        }

        console.log("\n¡Datos guardados!\n");

        break;
      } else if (editar === "0") {
        console.log("Volviendo...");
        break;
      }
    }
  }
  if (!encontrada) {
    console.log("No existe una tarea con ese ID.");
  }
  return;
}
