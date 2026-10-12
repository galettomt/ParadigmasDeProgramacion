import {
  Tarea as TipoTarea,
  TareaConstructor,
  Estado,
  Dificultad,
} from "../tipos/tipos";

export const ESTADOS = {
  p: "Pendiente",
  e: "En curso",
  t: "Terminada",
};

export const DIFICULTADES = {
  "1": "Facil",
  "2": "Medio",
  "3": "Dificil",
};

// FUNCION CONSTRUCTORA
export const Tarea = function (
  this: TipoTarea,
  id: number,
  titulo: string,
  descripcion: string = "",
  estado: Estado = "p",
  dificultad: Dificultad = "1",
) {
  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.estado = estado;
  this.dificultad = dificultad;
} as unknown as TareaConstructor;
export type Tarea = TipoTarea;

// METODOS COMPARTIDOS
const metodosTarea = {
  obtenerEstado(this: TipoTarea) {
    return ESTADOS[this.estado];
  },
  obtenerDificultad(this: TipoTarea) {
    return DIFICULTADES[this.dificultad];
  },
  // Tapa (pisa) el toString que viene de Object.prototype
  toString(this: TipoTarea) {
    return (
      "[" +
      this.id +
      "] " +
      this.titulo +
      " - " +
      this.obtenerEstado() +
      " (" +
      this.obtenerDificultad() +
      ")"
    );
  },
};

// Se copian al prototipo de Tarea, todas las tareas los heredan
Object.assign(Tarea.prototype, metodosTarea);

// Forma equivalente, asignando directamente al prototipo
Tarea.prototype.cambiarEstado = function (this: TipoTarea, estado: Estado) {
  this.estado = estado;
  return this;
};
