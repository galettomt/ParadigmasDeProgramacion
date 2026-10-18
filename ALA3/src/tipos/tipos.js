export const ESTADOS = {
  p: "Pendiente",
  e: "En Curso",
  t: "Terminada",
};
export function validarEstado(estado) {
  return estado === "p" || estado === "e" || estado === "t";
}

export const DIFICULTADES = {
  1: "Facil",
  2: "Medio",
  3: "Dificil",
};
export function validarDificultad(dificultad) {
  return dificultad === "1" || dificultad === "2" || dificultad === "3";
}

export function Tarea(id, titulo, descripcion, estado, dificultad) {
  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.estado = estado;
  this.dificultad = dificultad;
}

Tarea.prototype.obtenerEstado = function () {
  return ESTADOS[this.estado];
};
Tarea.prototype.obtenerDificultad = function () {
  return DIFICULTADES[this.dificultad];
};
