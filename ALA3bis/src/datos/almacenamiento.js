import fs from "fs/promises";
import { validarTarea } from "../tipos/tipos.js";

export async function cargarTareas(rutaArchivo = "tasks.json") {
  try {
    const data = await fs.readFile(rutaArchivo, "utf-8");
    const tareasRaw = JSON.parse(data);

    const validas = [];
    let descartadas = 0;

    for (const t of tareasRaw) {
      if (validarTarea(t)) {
        validas.push(t);
      } else {
        descartadas++;
      }
    }

    console.log(
      `\nLeidas: ${tareasRaw.length} | Validas: ${validas.length} | Omitidas: ${descartadas}`,
    );
    return validas;
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("Archivo no encontrado. Iniciando array vacío.");
      return [];
    }
    if (error instanceof SyntaxError) {
      console.error(
        "El archivo tasks.json contiene JSON dañado o mal formado.",
      );
    }
    throw error;
  }
}

export async function guardarTareas(rutaArchivo, tareas) {
  // 1. Limpiar campos auxiliares como 'id' que no están en el contrato
  const datosLimpios = tareas.map((t) => ({
    titulo: t.titulo,
    descripcion: t.descripcion !== undefined ? t.descripcion : null,
    estado: t.estado,
    creacion: t.creacion,
    ultimaEdicion: t.ultimaEdicion || null,
    vencimiento: t.vencimiento || null,
    dificultad: Number(t.dificultad),
  }));

  // 2. Serializar con 2 espacios de sangría (legibilidad)
  const jsonFormateado = JSON.stringify(datosLimpios, null, 2);

  // 3. Escribir asíncronamente con await
  await fs.writeFile(rutaArchivo, jsonFormateado, "utf-8");
  console.log("[OK] tasks.json actualizado correctamente en disco.");
}
