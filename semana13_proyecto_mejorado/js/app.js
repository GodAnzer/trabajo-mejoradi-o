/*
  ============================================================
  Archivo: js/app.js

  Este es el coordinador principal de la aplicación.
  Une los datos, las validaciones, el almacenamiento y la interfaz.

  Flujo general:
  1. El usuario escribe en el formulario.
  2. La aplicación lee los datos.
  3. Valida cada campo.
  4. Muestra errores o confirma que todo está correcto.
  5. Guarda en localStorage.
  6. Actualiza tabla y estadísticas.
  ============================================================
*/

(() => {
  const { $, $$ } = window.AppUI;
  const touchedFields = new Set();

  const form = $("#registrationForm");
  const searchInput = $("#searchRecords");

  /*
    BLOQUE 1: Inicializar la aplicación.
    Esta función se ejecuta cuando el documento está listo.
  */
  function init() {
    window.AppUI.populateBaseOptions();
    renderPageState();
    attachEvents();
    window.AppUI.updateTestLog("Proyecto cargado. Abre la consola del navegador y comienza a probar.");
    console.info("Semana 13: proyecto iniciado correctamente.");
  }

  /*
    BLOQUE 2: Conectar eventos.
    Los eventos permiten que la página reaccione cuando el usuario escribe, envía, limpia o exporta.
  */
  function attachEvents() {
    form.addEventListener("submit", handleSubmit);
    form.addEventListener("input", handleInput);
    form.addEventListener("change", handleInput);
    form.addEventListener("reset", handleReset);

    searchInput.addEventListener("input", handleSearch);

    $("#fillValidButton").addEventListener("click", () => loadExample(window.AppData.exampleValid, "Se cargó un ejemplo válido. Ahora presiona validar y guardar."));
    $("#fillInvalidButton").addEventListener("click", () => loadExample(window.AppData.exampleInvalid, "Se cargó un ejemplo inválido. Observa qué reglas fallan."));
    $("#clearRecordsButton").addEventListener("click", handleClearRecords);
    $("#exportJsonButton").addEventListener("click", handleExportJson);
    $("#exportCsvButton").addEventListener("click", handleExportCsv);

    $("#recordsTableBody").addEventListener("click", handleDeleteRecord);
  }

  /*
    BLOQUE 3: Entrada en tiempo real.
    Mientras el usuario escribe, se actualiza el resumen, el progreso y los errores de campos tocados.
  */
  function handleInput(event) {
    if (event.target.name) touchedFields.add(event.target.name);

    const data = window.AppUI.readFormData(form);
    const records = window.AppStorage.getRecords();
    const results = window.AppValidators.validateForm(data, records);

    window.AppUI.updateProgress(data);
    window.AppUI.renderSummary(data);
    window.AppUI.updateCommentCounter();
    window.AppUI.renderValidation(results, touchedFields);
  }

  /*
    BLOQUE 4: Envío del formulario.
    Este bloque representa el proceso técnico principal de la actividad.
  */
  function handleSubmit(event) {
    event.preventDefault();

    const data = window.AppUI.readFormData(form);
    const records = window.AppStorage.getRecords();
    const results = window.AppValidators.validateForm(data, records);

    Object.keys(results).forEach((field) => touchedFields.add(field));
    window.AppUI.renderValidation(results, touchedFields);

    if (!window.AppValidators.isValid(results)) {
      window.AppUI.notify(window.AppData.messages.invalid);
      window.AppUI.focusFirstInvalid(results);
      window.AppUI.updateTestLog("Validación fallida. Hay campos inválidos o duplicados.");
      console.warn("Validación fallida:", results);
      return;
    }

    const normalized = window.AppValidators.normalizeData(data);
    const record = window.AppStorage.createRecord(normalized);
    window.AppStorage.saveRecord(record);

    form.reset();
    touchedFields.clear();
    window.AppUI.clearValidation();
    renderPageState();

    window.AppUI.notify(window.AppData.messages.saved);
    window.AppUI.updateTestLog("Registro válido guardado correctamente.");
    console.info("Registro guardado:", record);
  }

  /*
    BLOQUE 5: Reiniciar formulario.
    Después de resetear, se actualiza el estado visual.
  */
  function handleReset() {
    window.setTimeout(() => {
      touchedFields.clear();
      window.AppUI.clearValidation();
      renderPageState();
      window.AppUI.updateTestLog("Formulario limpiado. Puedes iniciar una nueva prueba.");
    }, 0);
  }

  /*
    BLOQUE 6: Buscar registros.
    Permite comprobar que los datos guardados son consultables.
  */
  function handleSearch() {
    const term = window.AppValidators.normalizeSpaces(searchInput.value).toLowerCase();
    const records = window.AppStorage.getRecords();

    if (!term) {
      renderRecords(records);
      return;
    }

    const filtered = records.filter((record) => {
      const text = [
        record.fullName,
        record.documentId,
        record.phone,
        record.email,
        record.municipality,
        record.workshopLabel,
        record.modality,
        record.scheduleLabel
      ].join(" ").toLowerCase();

      return text.includes(term);
    });

    renderRecords(filtered);
    window.AppUI.updateTestLog(`Filtro aplicado. Resultados encontrados: ${filtered.length}.`);
  }

  /*
    BLOQUE 7: Cargar datos de ejemplo.
    Facilita probar rápidamente casos válidos e inválidos.
  */
  function loadExample(example, message) {
    window.AppUI.fillForm(form, example);
    Object.keys(example).forEach((field) => touchedFields.add(field));
    handleInput({ target: { name: "fullName" } });
    window.AppUI.notify(message);
    window.AppUI.updateTestLog(message);
  }

  /*
    BLOQUE 8: Borrar registros.
    Se pide confirmación para evitar pérdida accidental de evidencias.
  */
  function handleClearRecords() {
    const confirmed = confirm("¿Seguro que deseas borrar todos los registros guardados en este navegador?");
    if (!confirmed) return;

    window.AppStorage.clearRecords();
    renderPageState();
    window.AppUI.notify(window.AppData.messages.cleared);
    window.AppUI.updateTestLog("Registros borrados. El sistema quedó listo para nuevas pruebas.");
  }

  /*
    BLOQUE 9: Eliminar un registro individual.
  */
  function handleDeleteRecord(event) {
    const button = event.target.closest("[data-delete-record]");
    if (!button) return;

    window.AppStorage.deleteRecord(button.dataset.deleteRecord);
    renderPageState();
    window.AppUI.notify("Registro eliminado.");
    window.AppUI.updateTestLog("Se eliminó un registro individual de la tabla.");
  }

  /*
    BLOQUE 10: Exportaciones.
    Permiten transformar los datos en evidencia o insumo de análisis.
  */
  function handleExportJson() {
    const records = window.AppStorage.getRecords();
    window.AppStorage.downloadFile("registros_semana13.json", window.AppStorage.recordsToJson(records), "application/json");
    window.AppUI.notify(window.AppData.messages.exported);
  }

  function handleExportCsv() {
    const records = window.AppStorage.getRecords();
    window.AppStorage.downloadFile("registros_semana13.csv", window.AppStorage.recordsToCsv(records), "text/csv;charset=utf-8");
    window.AppUI.notify(window.AppData.messages.exported);
  }

  /*
    BLOQUE 11: Renderizado general.
    Actualiza resumen, progreso, tabla y estadísticas.
  */
  function renderPageState() {
    const data = window.AppUI.readFormData(form);
    const records = window.AppStorage.getRecords();

    window.AppUI.updateProgress(data);
    window.AppUI.renderSummary(data);
    window.AppUI.updateCommentCounter();
    renderRecords(records);
  }

  function renderRecords(records) {
    window.AppUI.renderRecords(records);
    window.AppUI.renderStats(records);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
