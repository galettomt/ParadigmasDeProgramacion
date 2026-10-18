export type Estado = "p" | "e" | "t"; //p pendiente, e en curso, t terminada
export type Dificultad = "1" | "2" | "3"; //1 facil, 2 medio, 3 dificil

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: Estado;
  dificultad: Dificultad;
  cambiarEstado(estado: Estado): Tarea;
  obtenerEstado(): string;
  obtenerDificultad(): string;
}

export interface TareaConstructor {
  new (
    id: number,
    titulo: string,
    descripcion?: string,
    estado?: Estado,
    dificultad?: Dificultad,
  ): Tarea;
  prototype: Tarea;
}

export interface ListaDeTareas {
  nombre: string;
  tareas: Tarea[];
  siguienteId: number;
  total: number;
  nombreLista: string;
  agregar(titulo: string, descripcion?: string): Tarea;
  buscarPorId(id: number): Tarea | undefined;
  buscarPorTitulo(texto: string): Tarea[];
  filtrarPorEstado(estado: Estado): Tarea[];
  eliminar(id: number): boolean;
}
