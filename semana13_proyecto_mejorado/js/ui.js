/*
  ============================================================
  Archivo: js/ui.js

  Este archivo maneja lo que el usuario ve:
  - Opciones de selects.
  - Mensajes de error.
  - Tabla de registros.
  - Estadísticas.
  - Notificaciones.

  No decide reglas de negocio. Solo presenta resultados.
  ============================================================
*/

window.AppUI = (() => {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  /*
    BLOQUE 1: Poblar selects y sugerencias.
    Evita escribir manualmente cada option en el HTML.
  */
  function populateBaseOptions() {
    const workshopSelect = $("#workshop");
    const scheduleSelect = $("#schedule");
    const municipalityList = $("#municipalitySuggestions");

    window.AppData.workshops.forEach((workshop) => {
      const option = document.createElement("option");
      option.value = workshop.value;
      option.textContent = workshop.label;
      workshopSelect.appendChild(option);
    });

    window.AppData.schedules.forEach((schedule) => {
      const option = document.createElement("option");
      option.value = schedule.value;
      option.textContent = schedule.label;
      scheduleSelect.appendChild(option);
    });

    window.AppData.municipalitySuggestions.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      municipalityList.appendChild(option);
    });
  }

  /*
    BLOQUE 2: Leer datos del formulario.
    Se centraliza aquí porque varios eventos necesitan la misma lectura.
  */
  function readFormData(form) {
    const formData = new FormData(form);
    return {
      fullName: formData.get("fullName"),
      documentId: formData.get("documentId"),
      age: formData.get("age"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      municipality: formData.get("municipality"),
      workshop: formData.get("workshop"),
      modality: formData.get("modality"),
      schedule: formData.get("schedule"),
      comments: formData.get("comments"),
      terms: formData.get("terms") === "on"
    };
  }

  /*
    BLOQUE 3: Mostrar errores campo por campo.
    Esta función conecta validateForm() con el HTML.
  */
  function renderValidation(results, touchedFields = null) {
    Object.entries(results).forEach(([fieldName, result]) => {
      if (touchedFields && !touchedFields.has(fieldName)) return;

      const field = $(`[name="${fieldName}"]`);
      const error = $(`#error-${fieldName}`);
      const wrapper = $(`[data-field-wrapper="${fieldName}"]`);

      if (!field || !error) return;

      field.setAttribute("aria-invalid", String(!result.valid));
      field.classList.toggle("is-invalid", !result.valid);
      field.classList.toggle("is-valid", result.valid && Boolean(window.AppValidators.clean(field.value)));
      if (wrapper) wrapper.classList.toggle("has-error", !result.valid);

      error.textContent = result.valid ? "" : result.message;
    });
  }

  function clearValidation() {
    $$(".field-error").forEach((item) => (item.textContent = ""));
    $$("input, select, textarea").forEach((field) => {
      field.removeAttribute("aria-invalid");
      field.classList.remove("is-invalid", "is-valid");
    });
  }

  /*
    BLOQUE 4: Enfocar primer campo inválido.
    Mejora la UX porque lleva al usuario directamente al problema.
  */
  function focusFirstInvalid(results) {
    const firstInvalid = Object.entries(results).find(([, result]) => !result.valid);
    if (!firstInvalid) return;

    const [fieldName] = firstInvalid;
    const field = $(`[name="${fieldName}"]`);
    if (field) field.focus();
  }

  /*
    BLOQUE 5: Barra de progreso.
    Calcula cuántos campos clave tienen algún valor.
  */
  function updateProgress(data) {
    const requiredFields = ["fullName", "documentId", "age", "phone", "email", "municipality", "workshop", "modality", "schedule", "terms"];
    const completed = requiredFields.filter((field) => {
      const value = data[field];
      return typeof value === "boolean" ? value : Boolean(window.AppValidators.clean(value));
    }).length;

    const percent = Math.round((completed / requiredFields.length) * 100);
    $("#progressLabel").textContent = `${percent}%`;
    $("#progressBar").style.width = `${percent}%`;
  }

  /*
    BLOQUE 6: Resumen en vivo.
    Ayuda a revisar lo escrito antes de guardar.
  */
  function renderSummary(data) {
    const workshop = window.AppData.workshops.find((item) => item.value === data.workshop);
    const schedule = window.AppData.schedules.find((item) => item.value === data.schedule);

    const summary = [
      ["Nombre", data.fullName || "Pendiente"],
      ["Documento", data.documentId || "Pendiente"],
      ["Contacto", data.phone || "Pendiente"],
      ["Correo", data.email || "Pendiente"],
      ["Municipio", data.municipality || "Pendiente"],
      ["Taller", workshop ? workshop.label : "Pendiente"],
      ["Horario", schedule ? schedule.label : "Pendiente"]
    ];

    $("#liveSummary").innerHTML = summary
      .map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`)
      .join("");
  }

  /*
    BLOQUE 7: Contador de caracteres.
  */
  function updateCommentCounter() {
    const comments = $("#comments");
    $("#commentCounter").textContent = `${comments.value.length}/180`;
  }

  /*
    BLOQUE 8: Tabla de registros.
  */
  function renderRecords(records) {
    const tbody = $("#recordsTableBody");

    if (!records.length) {
      tbody.innerHTML = `<tr><td class="empty-row" colspan="7">No hay registros guardados todavía.</td></tr>`;
      return;
    }

    tbody.innerHTML = records
      .map((record) => `
        <tr>
          <td>${escapeHtml(record.fullName)}</td>
          <td>${escapeHtml(record.documentId)}</td>
          <td>${escapeHtml(record.age)}</td>
          <td>${escapeHtml(record.phone)}</td>
          <td><span class="badge">${escapeHtml(record.workshopLabel)}</span></td>
          <td>${escapeHtml(record.modality)}</td>
          <td><button class="button button--danger" type="button" data-delete-record="${record.id}">Eliminar</button></td>
        </tr>
      `)
      .join("");
  }

  /*
    BLOQUE 9: Estadísticas simples.
    Sirven para comprobar que los datos guardados pueden convertirse en información útil.
  */
  function renderStats(records) {
    const total = records.length;
    const averageAge = total ? Math.round(records.reduce((sum, record) => sum + Number(record.age || 0), 0) / total) : 0;
    const presencial = records.filter((record) => record.modality === "presencial").length;
    const virtual = records.filter((record) => record.modality === "virtual").length;

    const stats = [
      [total, "Registros"],
      [averageAge || "-", "Edad promedio"],
      [presencial, "Presenciales"],
      [virtual, "Virtuales"]
    ];

    $("#statsGrid").innerHTML = stats
      .map(([value, label]) => `<article class="stat-card"><strong>${value}</strong><span>${label}</span></article>`)
      .join("");
  }

  /*
    BLOQUE 10: Notificación temporal.
  */
  function notify(message) {
    let toast = $("#toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  }

  /*
    BLOQUE 11: Registro de pruebas.
    Sirve como mini consola dentro de la página.
  */
  function updateTestLog(message) {
    const now = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    $("#testLog").textContent = `[${now}] ${message}`;
  }

  function fillForm(form, data) {
    Object.entries(data).forEach(([name, value]) => {
      const field = form.elements[name];
      if (!field) return;

      if (field.type === "checkbox") {
        field.checked = Boolean(value);
      } else {
        field.value = value;
      }
    });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  return {
    $,
    $$,
    populateBaseOptions,
    readFormData,
    renderValidation,
    clearValidation,
    focusFirstInvalid,
    updateProgress,
    renderSummary,
    updateCommentCounter,
    renderRecords,
    renderStats,
    notify,
    updateTestLog,
    fillForm,
    escapeHtml
  };
})();
