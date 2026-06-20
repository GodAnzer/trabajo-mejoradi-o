/*
  ============================================================
  Archivo: js/storage.js

  Este archivo controla el almacenamiento local.
  localStorage guarda datos en el navegador, no en una base de datos real.

  En un sistema profesional, esta capa sería reemplazada o complementada
  por una API y una base de datos con validación en backend.
  ============================================================
*/

window.AppStorage = (() => {
  const STORAGE_KEY = "semana13_registros_talleres";

  /*
    BLOQUE 1: Lectura segura.
    Si localStorage está vacío o corrupto, se devuelve un arreglo vacío.
  */
  function getRecords() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      console.error("No se pudieron leer los registros:", error);
      return [];
    }
  }

  /*
    BLOQUE 2: Escritura.
    Convierte el arreglo de registros en texto JSON para guardarlo.
  */
  function setRecords(records) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }

  /*
    BLOQUE 3: Crear un registro con metadatos.
    El id y la fecha ayudan a identificar cuándo se creó cada registro.
  */
  function createRecord(data) {
    return {
      id: window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : String(Date.now()),
      createdAt: new Date().toISOString(),
      ...data
    };
  }

  /*
    BLOQUE 4: Guardar nuevo registro.
    La validación se hace antes en validators.js; aquí solo se persiste.
  */
  function saveRecord(record) {
    const records = getRecords();
    records.push(record);
    setRecords(records);
    return record;
  }

  /*
    BLOQUE 5: Eliminar un registro por id.
  */
  function deleteRecord(id) {
    const updated = getRecords().filter((record) => record.id !== id);
    setRecords(updated);
    return updated;
  }

  /*
    BLOQUE 6: Borrar todos los registros.
    Útil para reiniciar pruebas.
  */
  function clearRecords() {
    localStorage.removeItem(STORAGE_KEY);
  }

  /*
    BLOQUE 7: Exportar JSON.
    JSON conserva la estructura de datos y es útil para análisis técnico.
  */
  function recordsToJson(records) {
    return JSON.stringify(records, null, 2);
  }

  /*
    BLOQUE 8: Exportar CSV.
    CSV es útil para abrir en hojas de cálculo.
  */
  function recordsToCsv(records) {
    const headers = ["nombre", "documento", "edad", "celular", "correo", "municipio", "taller", "modalidad", "horario", "fecha"];
    const rows = records.map((record) => [
      record.fullName,
      record.documentId,
      record.age,
      record.phone,
      record.email,
      record.municipality,
      record.workshopLabel,
      record.modality,
      record.scheduleLabel,
      record.createdAt
    ]);

    return [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(","))
      .join("\n");
  }

  /*
    BLOQUE 9: Descargar archivo generado desde el navegador.
  */
  function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  return {
    getRecords,
    setRecords,
    createRecord,
    saveRecord,
    deleteRecord,
    clearRecords,
    recordsToJson,
    recordsToCsv,
    downloadFile
  };
})();
