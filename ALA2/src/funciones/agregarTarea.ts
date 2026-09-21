import { prompt } from "../entrada/entrada";
import { tareas } from "../datos/datos";

let id: number = 1;

export function agregarTarea() {
  let titulo: string;
  let descripcion: string;

  console.log("\nAGREGAR UNA TAREA\n");
  do {
    titulo = prompt("Ingrese la tarea a realizar\n> ") ?? "";
    if (titulo === "") {
      console.log("\nERROR: campo vacio, ingrese un titulo.");
    }
  } while (titulo === "");
  descripcion = prompt("Ingrese la descripcion de " + titulo + "\n> ") ?? "";

  tareas.push({
    id,
    titulo,
    descripcion,
    estado: "p",
    dificultad: "1",
  });
  id++;

  console.log(
    "\n¡Tarea agregada correctamente!\nVolviendo al menu principal...\n",
  );
  return;
}
