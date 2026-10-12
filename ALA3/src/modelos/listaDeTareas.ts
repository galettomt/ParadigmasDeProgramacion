import { ListaDeTareas as TipoLista, Dificultad, Estado } from "../tipos/tipos";
import { Tarea } from "./tarea";

const protoLista: TipoLista = {
  nombre: "",
  tareas: [],
  siguienteId: 1,

  get total() {
    return this.tareas.length;
  },

  get nombreLista() {
    return this.nombre;
  },
  set nombreLista(valor: string) {
    if (valor.trim() === "") {
      console.log("ERROR: el nombre no puede estar vacio.");
      return;
    }
    this.nombre = valor.trim();
  },

  agregar(titulo: string, descripcion: string = "") {
    const tarea = new Tarea(this.siguienteId, titulo, descripcion, "p", "1");
    this.siguienteId++;
    this.tareas.push(tarea);
    return tarea;
  },

  buscarPorId(id: number) {
    return this.tareas.find((t) => t.id === id);
  },

  buscarPorTitulo(texto: string) {
    const busqueda = texto.toLowerCase();
    return this.tareas.filter(
      (t) => t.titulo.toLowerCase().indexOf(busqueda) !== -1,
    );
  },

  filtrarPorEstado(estado: Estado) {
    return this.tareas.filter((t) => t.estado === estado);
  },

  eliminar(id: number) {
    const i = this.tareas.findIndex((t) => t.id === id);
    if (i === -1) return false;
    this.tareas.splice(i, 1);
    return true;
  },
};

// Object.create(protoLista): crea un objeto cuyo prototipo es protoLista
export function crearLista(nombre: string): TipoLista {
  const lista: TipoLista = Object.create(protoLista);
  lista.nombre = nombre;
  // Propiedades propias: si no, todas las listas compartirian las del prototipo
  lista.tareas = [];
  lista.siguienteId = 1;
  return lista;
}
