import { prompt } from "../entrada/entrada.js";
import { validarDificultad, ESTADOS } from "../tipos/tipos.js";

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

  let huboCambios = false;

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
      huboCambios = true;
    }
  }

  const nuevDesc = prompt("Ingresa la descripcion: ");

  if (nuevDesc !== "") {
    tareas[posicion].descripcion = nuevDesc.trim() === null ? "" : nuevDesc;
    huboCambios = true;
  }

  let nuevEstado;
  do {
    nuevEstado = prompt(
      "Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ",
    ).toLowerCase();

    if (nuevEstado !== "" && !(nuevEstado in ESTADOS)) {
      console.log("Error: Opcion invalida ");
    }
  } while (nuevEstado !== "" && !(nuevEstado in ESTADOS));

  if (nuevEstado !== "") {
    tareas[posicion].estado = ESTADOS[nuevEstado];
    huboCambios = true;
  }

  let nuevDif;
  do {
    nuevDif = prompt("Dificultad ([1] / [2] / [3]): ");
    if (nuevDif !== "" && !validarDificultad(Number(nuevDif))) {
      console.log("Error: Opcion invalida ");
    }
  } while (nuevDif !== "" && !validarDificultad(Number(nuevDif)));
  if (nuevDif !== "") {
    tareas[posicion].dificultad = Number(nuevDif);
    huboCambios = true;
  }

  if (huboCambios) {
    tareas[posicion].ultimaEdicion = new Date().toISOString();
  }

  console.log("\n¡Datos guardados!");
  return;
};
