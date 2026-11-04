export const ESTADOS = {
  p: "PENDING", // Pendiente
  e: "IN-PROGRESS", // En curso
  t: "FINISHED", // Terminada
  c: "CANCELED", // Cancelada
};

export function validarEstado(estado) {
  return Object.values(ESTADOS).includes(estado);
}

export const NOMBRES_ESTADOS = {
  PENDING: "Pendiente",
  "IN-PROGRESS": "En curso",
  FINISHED: "Terminada",
  CANCELED: "Cancelada",
};

export const DIFICULTADES = {
  1: "Facil",
  2: "Medio",
  3: "Dificil",
};

export function validarDificultad(dificultad) {
  return [1, 2, 3].includes(dificultad);
}

export function Tarea(
  id,
  titulo,
  descripcion,
  estado,
  dificultad,
  creacion = new Date().toISOString(),
  ultimaEdicion = null,
  vencimiento = null,
) {
  this.id = id;
  this.titulo = titulo;
  this.descripcion = descripcion;
  this.estado = estado;
  this.dificultad = dificultad;
  this.creacion = creacion;
  this.ultimaEdicion = ultimaEdicion;
  this.vencimiento = vencimiento;
}

Tarea.prototype.obtenerEstado = function () {
  return NOMBRES_ESTADOS[this.estado];
};
Tarea.prototype.obtenerDificultad = function () {
  return DIFICULTADES[this.dificultad];
};

export function validarTarea(t) {
  if (!validarDificultad(t.dificultad)) return false;
  if (t.descripcion !== null && typeof t.descripcion !== "string") return false;
  if (
    !t.titulo ||
    typeof t.titulo !== "string" ||
    t.titulo.trim() === "" ||
    t.titulo.length > 100
  )
    return false;
  if (!validarEstado(t.estado)) return false;

  if (!t.creacion || isNaN(Date.parse(t.creacion))) return false;
  if (t.ultimaEdicion !== null && isNaN(Date.parse(t.ultimaEdicion)))
    return false;
  if (t.vencimiento !== null && isNaN(Date.parse(t.vencimiento))) return false;

  return true;
}
