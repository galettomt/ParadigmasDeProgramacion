import fs from "fs/promises";
import { validarTarea } from "../tipos/tipos.js";

export async function cargarTareas(rutaArchivo = "tasks.json") {
  try {
    // Lee el archivo de forma asincronica sin bloquear el hilo principal
    const data = await fs.readFile(rutaArchivo, "utf-8");

    // Convierte el texto JSON en un array de objetos
    const tareasRaw = JSON.parse(data);

    const validas = [];
    let descartadas = 0;

    // Recorre cada tarea y conserva solo las que cumplen el esquema
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
    // Archivo inexistente: no es grave, se arranca con una lista vacía
    if (error.code === "ENOENT") {
      console.log("Archivo no encontrado. Iniciando array vacío.");
      return [];
    }
    // JSON mal formado: se informa y se relanza el error
    if (error instanceof SyntaxError) {
      console.error(
        "El archivo tasks.json contiene JSON dañado o mal formado.",
      );
    }
    throw error;
  }
}

// Los '|| null' garantizan que ultimaEdicion y vencimiento se guarden como null si no tienen valor
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

  // 2. Serializar con 2 espacios de sangria (legibilidad)
  const jsonFormateado = JSON.stringify(datosLimpios, null, 2);

  // 3. Escribir asincronamente con await
  await fs.writeFile(rutaArchivo, jsonFormateado, "utf-8");
  console.log("[OK] tasks.json actualizado correctamente en disco.");
}
