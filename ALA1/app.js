//EJERCICIO 3 -> TAREAS

const prompt = require("readline-sync").question;
//---------------------------------

const tareas = [];
let id = 1;
let opcion, op;
let detalle;

/*----------Funciones-----------*/
const editarTarea = (id) => {
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id === id) {
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

      do {
        editar = prompt(
          "Si deseas editarla, presiona E, o presiona 0 para volver.\n> ",
        );

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

        const nuevNomb = prompt("Ingresa el titulo: ");
        if (nuevNomb === "") {
          tareas[i].titulo = tareas[i].titulo;
        } else if (nuevNomb.trim() === "") {
          tareas[i].titulo = ""; //Si ingresa espacio queda en blanco
        } else {
          tareas[i].titulo = nuevNomb;
        }

        const nuevDesc = prompt("Ingresa la descripcion: ");
        if (nuevDesc === "") {
          tareas[i].descripcion = tareas[i].descripcion;
        } else if (nuevDesc.trim() === "") {
          tareas[i].descripcion = "";
        } else {
          tareas[i].descripcion = nuevDesc;
        }
        //const nuevEstado;
        do {
          nuevEstado = prompt(
            "Estado ([P]endiente / [E]n curso / [T]erminada): ",
          );
          if (
            nuevEstado.toLowerCase() !== "p" &&
            nuevEstado.toLowerCase() !== "e" &&
            nuevEstado.toLowerCase() !== "t" &&
            nuevEstado.toLowerCase() !== ""
          ) {
            console.log("Error: Opcion invalida ");
          }
        } while (
          nuevEstado.toLowerCase() !== "p" &&
          nuevEstado.toLowerCase() !== "e" &&
          nuevEstado.toLowerCase() !== "t" &&
          nuevEstado.toLowerCase() !== ""
        );
        if (nuevEstado === "") {
          tareas[i].estado = tareas[i].estado.toLowerCase();
        } else if (nuevEstado.trim() === "") {
          tareas[i].estado = "p";
        } else {
          tareas[i].estado = nuevEstado.toLowerCase();
        }

        const nuevDif = prompt("Dificultad ([1] / [2] / [3]): ");
        if (nuevDif === "") {
          tareas[i].dificultad = tareas[i].dificultad;
        } else if (nuevDif.trim() === "") {
          tareas[i].dificultad = "";
        } else {
          tareas[i].dificultad = nuevDif;
        }

        console.log("\n¡Datos guardados!\n");

        break;
      } else if (editar === "0") {
        console.log("Volviendo...");
      }
    }
  }
};
/*----------finFunciones-----------*/

do {
  console.log("\n¿Que deseas hacer?\n");

  opcion = parseInt(
    prompt(
      "[1] Ver mis tareas\n[2] Buscar una tarea\n[3] Agregar una tarea\n[0] Salir\n> ",
    ),
  );
  if (opcion < 0 || opcion > 3) {
    console.log("\nERROR: Opcion invalida, vuelva a elegir una opcion\n");
  }

  switch (opcion) {
    case 1:
      if (tareas.length === 0) {
        console.log("\nNo tenes ninguna tarea cargada.\n");
        break;
      } else {
        console.log("¿Que tareas deseas ver?\n");
        do {
          op = parseInt(
            prompt(
              "[1] Todas\n[2] Pendiente\n[3] En curso\n[4] Terminadas\n[0] Volver\n> ",
            ),
          );

          if (op < 0 || op > 4) {
            console.log("ERROR: opcion invalida, ingrese nuevamente.\n");
          }
        } while (op < 0 || op > 4);
        if (op === "0") {
          console.log("\nVolviendo...\n");

          break;
        }

        switch (op) {
          case 1:
            console.log("Estas son TODAS tus tareas.\n");
            for (let i = 0; i < tareas.length; i++) {
              console.log("[", tareas[i].id, "] ", tareas[i].titulo);
            }

            console.log("\n¿Deseas ver los detalles de alguna?");
            detalle = parseInt(
              prompt("Introduzca el NUMERO para verla o 0 para volver\n> "),
            );
            let idEncontrado = false;
            for (let i = 0; i < tareas.length; i++) {
              if (detalle === tareas[i].id) {
                idEncontrado = true;
              }
            }
            if (!idEncontrado) {
              console.log("\nERROR: Id no encontrado.");
            }
            if (detalle !== 0 && idEncontrado) {
              editarTarea(detalle);
            } else {
              console.log("\nVolviendo...\n");
              break;
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
              detalle = parseInt(
                prompt("Introduzca el NUMERO para verla o 0 para volver\n> "),
              );

              if (detalle !== 0) {
                editarTarea(detalle);
              } else {
                console.log("\nVolviendo...\n");
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
              console.log("\n¿Deseas ver los detalles de alguna?");
              detalle = parseInt(
                prompt("Introduzca el NUMERO para verla o 0 para volver\n> "),
              );
            }

            if (detalle !== 0) {
              editarTarea(detalle);
            } else {
              console.log("\nVolviendo...\n");
            }

            break;
          case 4:
            console.log("Estas son todas tus tareas TERMINADAS\n");
            let seEncontroTerminada = false;

            for (let i = 0; i < tareas.length; i++) {
              seEncontroTerminada = true;
              if (tareas[i].estado.toLowerCase() === "t") {
                console.log("[", tareas[i].id, "] ", tareas[i].titulo);
              }
            }

            if (!seEncontroTerminada) {
              console.log("No tenes tareas Terminadas\n");
            }

            break;
        }
      }
      break;
    case 2:
      const busqueda = prompt(
        "Introduce el titulo de una Tarea para buscarla:\n> ",
      ).toLowerCase();
      let encontrado = false;
      console.log("Estas son las tareas relacionadas\n");

      for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].titulo.toLowerCase().indexOf(busqueda) !== -1) {
          console.log("[", tareas[i].id, "] ", tareas[i].titulo);
          encontrado = true;
        }
      }

      if (!encontrado) {
        console.log("No hay tareas relacionadas con la busqueda\n");
      }
      break;
    case 3:
      console.log("\nAGREGAR UNA TAREA\n");
      do {
        nombre = prompt("Ingrese la tarea a realizar\n> ");
        if (nombre === "") {
          console.log("\nERROR: campo vacio, ingrese un titulo.");
        }
      } while (nombre === "");
      desc = prompt("Ingrese la descripcion de " + nombre + "\n> ");
      const tarea = {
        id: id,
        titulo: nombre,
        descripcion: desc,
        estado: "p", //p pendiente, e en curso, t terminada
        dificultad: "1", //1 facil, 2 medio, 3 dificil
      };

      tareas.push(tarea);
      id++;

      console.log(
        "\n¡Tarea agregada correctamente!\nVolviendo al menu principal...\n",
      );

      break;
    case 0:
      console.log("\nSaliendo del sistema...\n");
      break;
  }
} while (opcion != 0);
