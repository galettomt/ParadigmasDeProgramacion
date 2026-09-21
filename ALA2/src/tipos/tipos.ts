export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: "p" | "e" | "t"; //p pendiente, e en curso, t terminada
  dificultad: "1" | "2" | "3"; //1 facil, 2 medio, 3 dificil
}
