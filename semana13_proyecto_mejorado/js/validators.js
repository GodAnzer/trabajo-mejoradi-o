/*
  ============================================================
  Archivo: js/validators.js

  Este archivo contiene las reglas de validación.
  Aquí se decide si un dato es aceptado o rechazado.

  Conceptos clave:
  - Validación: revisar reglas antes de guardar.
  - Integridad: evitar datos incorrectos, incompletos o duplicados.
  - UX: devolver mensajes comprensibles para que el usuario pueda corregir.
  ============================================================
*/

window.AppValidators = (() => {
  /*
    BLOQUE 1: Funciones auxiliares.
    Estas funciones limpian datos para compararlos de forma más segura.
  */
  function clean(value) {
    return String(value ?? "").trim();
  }

  function normalizeSpaces(value) {
    return clean(value).replace(/\s+/g, " ");
  }

  function normalizeEmail(value) {
    return clean(value).toLowerCase();
  }

  function onlyDigits(value) {
    return clean(value).replace(/\D/g, "");
  }

  function result(valid, message = "") {
    return { valid, message };
  }

  /*
    BLOQUE 2: Validación del nombre.
    Regla aplicada:
    - Debe estar diligenciado.
    - Debe tener mínimo 2 palabras.
    - No debe contener números.
  */
  function validateFullName(value) {
    const name = normalizeSpaces(value);

    if (!name) return result(false, "Escribe el nombre completo del participante.");
    if (name.length < 6) return result(false, "El nombre es demasiado corto. Usa mínimo 6 caracteres.");
    if (/\d/.test(name)) return result(false, "El nombre no debe contener números.");
    if (name.split(" ").length < 2) return result(false, "Incluye mínimo nombre y apellido.");

    return result(true);
  }

  /*
    BLOQUE 3: Validación del documento.
    Esta regla apoya la integridad porque el documento sirve para detectar duplicados.
  */
  function validateDocumentId(value) {
    const digits = onlyDigits(value);

    if (!clean(value)) return result(false, "Escribe el número de documento.");
    if (digits !== clean(value)) return result(false, "El documento solo debe contener números.");
    if (digits.length < 6 || digits.length > 12) {
      return result(false, "El documento debe tener entre 6 y 12 dígitos.");
    }

    return result(true);
  }

  /*
    BLOQUE 4: Validación de edad.
    Regla aplicada: edad entre 13 y 80 años.
  */
  function validateAge(value) {
    const age = Number(value);

    if (!clean(value)) return result(false, "Escribe la edad del participante.");
    if (!Number.isInteger(age)) return result(false, "La edad debe ser un número entero.");
    if (age < 13) return result(false, "La edad mínima permitida es 13 años.");
    if (age > 80) return result(false, "La edad máxima permitida es 80 años.");

    return result(true);
  }

  /*
    BLOQUE 5: Validación del celular.
    Regla aplicada: exactamente 10 dígitos.
  */
  function validatePhone(value) {
    const raw = clean(value);
    const digits = onlyDigits(value);

    if (!raw) return result(false, "Escribe el número de celular.");
    if (digits !== raw) return result(false, "El celular no debe contener letras, espacios ni símbolos.");
    if (digits.length !== 10) return result(false, "El celular debe tener exactamente 10 dígitos.");
    if (!/^3/.test(digits)) return result(false, "En Colombia, el número celular normalmente inicia por 3.");

    return result(true);
  }

  /*
    BLOQUE 6: Validación de correo.
    Se usa una expresión regular sencilla para comprobar formato básico.
  */
  function validateEmail(value) {
    const email = normalizeEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!email) return result(false, "Escribe un correo electrónico.");
    if (!emailPattern.test(email)) return result(false, "El correo debe tener un formato válido. Ejemplo: nombre@dominio.com.");

    return result(true);
  }

  /*
    BLOQUE 7: Validación del municipio o vereda.
    Esta regla evita guardar ubicaciones vacías o demasiado ambiguas.
  */
  function validateMunicipality(value) {
    const municipality = normalizeSpaces(value);

    if (!municipality) return result(false, "Escribe el municipio, barrio o vereda.");
    if (municipality.length < 3) return result(false, "El municipio o vereda debe tener mínimo 3 caracteres.");
    if (/^[0-9]+$/.test(municipality)) return result(false, "El municipio o vereda no puede ser solo números.");

    return result(true);
  }

  /*
    BLOQUE 8: Validaciones de selección.
    Sirven para asegurar que el estudiante no deje opciones obligatorias sin elegir.
  */
  function validateRequiredSelect(value, fieldName) {
    if (!clean(value)) return result(false, `Selecciona una opción para ${fieldName}.`);
    return result(true);
  }

  /*
    BLOQUE 9: Validación de observaciones.
    Es opcional, pero si se escribe, debe respetar el límite definido en HTML.
  */
  function validateComments(value) {
    const comments = clean(value);
    if (comments.length > 180) return result(false, "Las observaciones no pueden superar 180 caracteres.");
    return result(true);
  }

  /*
    BLOQUE 10: Validación de consentimiento.
    Un checkbox también puede ser parte de la integridad del proceso.
  */
  function validateTerms(value) {
    if (!value) return result(false, "Debes confirmar el uso académico de la información.");
    return result(true);
  }

  /*
    BLOQUE 11: Validación de duplicados.
    Compara el registro actual con los ya guardados.
    Se revisan documento, correo y celular porque suelen identificar a una persona.
  */
  function validateDuplicates(data, records) {
    const documentId = onlyDigits(data.documentId);
    const phone = onlyDigits(data.phone);
    const email = normalizeEmail(data.email);

    const duplicated = records.find((record) => {
      return record.documentId === documentId || record.phone === phone || record.email === email;
    });

    if (!duplicated) return {};

    const errors = {};
    if (duplicated.documentId === documentId) errors.documentId = result(false, "Ya existe un registro con este documento.");
    if (duplicated.phone === phone) errors.phone = result(false, "Ya existe un registro con este celular.");
    if (duplicated.email === email) errors.email = result(false, "Ya existe un registro con este correo.");
    return errors;
  }

  /*
    BLOQUE 12: Validación completa del formulario.
    Esta función reúne todas las reglas y devuelve un objeto de resultados.
  */
  function validateForm(data, records = []) {
    const results = {
      fullName: validateFullName(data.fullName),
      documentId: validateDocumentId(data.documentId),
      age: validateAge(data.age),
      phone: validatePhone(data.phone),
      email: validateEmail(data.email),
      municipality: validateMunicipality(data.municipality),
      workshop: validateRequiredSelect(data.workshop, "el taller"),
      modality: validateRequiredSelect(data.modality, "la modalidad"),
      schedule: validateRequiredSelect(data.schedule, "el horario"),
      comments: validateComments(data.comments),
      terms: validateTerms(data.terms)
    };

    const duplicateErrors = validateDuplicates(data, records);
    return { ...results, ...duplicateErrors };
  }

  function isValid(results) {
    return Object.values(results).every((item) => item.valid);
  }

  /*
    BLOQUE 13: Normalización antes de guardar.
    Guardar datos limpios facilita búsquedas, reportes y exportaciones.
  */
  function normalizeData(data) {
    const workshop = window.AppData.workshops.find((item) => item.value === data.workshop);
    const schedule = window.AppData.schedules.find((item) => item.value === data.schedule);

    return {
      fullName: normalizeSpaces(data.fullName),
      documentId: onlyDigits(data.documentId),
      age: Number(data.age),
      phone: onlyDigits(data.phone),
      email: normalizeEmail(data.email),
      municipality: normalizeSpaces(data.municipality),
      workshop: data.workshop,
      workshopLabel: workshop ? workshop.label : data.workshop,
      modality: data.modality,
      schedule: data.schedule,
      scheduleLabel: schedule ? schedule.label : data.schedule,
      comments: clean(data.comments),
      terms: Boolean(data.terms)
    };
  }

  return {
    clean,
    normalizeSpaces,
    normalizeEmail,
    onlyDigits,
    validateForm,
    isValid,
    normalizeData
  };
})();
