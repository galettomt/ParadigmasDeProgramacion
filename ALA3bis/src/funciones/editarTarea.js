import { prompt } from "../entrada/entrada.js";
import { validarEstado, validarDificultad } from "../tipos/tipos.js";

export const editarTarea = (id, tareas) => {
  let posicion = -1;

  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id === id) {
      posicion = i;
      break;
    }
  }

  if (posicion === -1) {
    console.log("ERROR: ID no encontrado");
    return;
  }

  console.log("\nEstas editando la tarea ", tareas[posicion].titulo);
  console.log(
    "- Si deseas mantener los valores de un atributo, simplemente dejalo en blanco",
  );
  console.log("- Si deseas dejar en blanco un atributo, escribe un espacio");

  const nuevNomb = prompt("Ingresa el titulo: ");

  if (nuevNomb !== "") {
    if (nuevNomb.trim() === "") {
      console.log("Se mantendra el titulo anterior");
    } else if (nuevNomb.trim().length > 100) {
      console.log(
        "Error: El titulo no puede tener mas de 100 caracteres, se mantendra el titulo anterior",
      );
    } else {
      tareas[posicion].titulo = nuevNomb.trim();
      tareas[posicion].ultimaEdicion = new Date().toISOString();
    }
  }

  const nuevDesc = prompt("Ingresa la descripcion: ");

  if (nuevDesc !== "") {
    tareas[posicion].descripcion = nuevDesc.trim() === null ? "" : nuevDesc;
  }

  let nuevEstado;
  do {
    nuevEstado = prompt(
      "Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ",
    ).toLowerCase();

    if (nuevEstado !== "" && !validarEstado(nuevEstado)) {
      console.log("Error: Opcion invalida ");
    }
  } while (nuevEstado !== "" && !validarEstado(nuevEstado));

  if (nuevEstado !== "") {
    tareas[posicion].estado = nuevEstado.trim() === null ? "" : nuevEstado;
  }

  let nuevDif;
  do {
    nuevDif = prompt("Dificultad ([1] / [2] / [3]): ");
    if (nuevDif !== "" && !validarDificultad(nuevDif)) {
      console.log("Error: Opcion invalida ");
    }
  } while (nuevDif !== "" && !validarDificultad(nuevDif));
  if (nuevDif !== "") {
    tareas[posicion].dificultad = nuevDif.trim() === null ? "" : nuevDif;
  }

  console.log("\n¡Datos guardados!");
  return;
};
