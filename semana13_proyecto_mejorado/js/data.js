/*
  ============================================================
  Archivo: js/data.js

  Este archivo guarda datos base de la aplicación.
  No valida, no pinta la interfaz y no guarda registros.
  Su propósito es centralizar opciones reutilizables.
  ============================================================
*/

window.AppData = {
  workshops: [
    { value: "agricultura-digital", label: "Agricultura digital" },
    { value: "programacion-web", label: "Programación web inicial" },
    { value: "emprendimiento", label: "Emprendimiento comunitario" },
    { value: "ia-basica", label: "Introducción a inteligencia artificial" }
  ],

  schedules: [
    { value: "manana", label: "Mañana" },
    { value: "tarde", label: "Tarde" },
    { value: "sabado", label: "Sábado" }
  ],

  municipalitySuggestions: [
    "El Progreso",
    "San José",
    "La Esperanza",
    "Santa Elena",
    "La Primavera",
    "Buenos Aires"
  ],

  exampleValid: {
    fullName: "Ana María Pérez Gómez",
    documentId: "1023456789",
    age: "16",
    phone: "3001234567",
    email: "ana.perez@example.com",
    municipality: "El Progreso",
    workshop: "programacion-web",
    modality: "presencial",
    schedule: "tarde",
    comments: "Tengo disponibilidad después de clase.",
    terms: true
  },

  exampleInvalid: {
    fullName: "Ana 123",
    documentId: "12A",
    age: "10",
    phone: "300abc",
    email: "correo-sin-arroba",
    municipality: "A",
    workshop: "",
    modality: "",
    schedule: "",
    comments: "x".repeat(181),
    terms: false
  },

  messages: {
    saved: "Registro guardado correctamente. Ahora revisa la tabla de registros.",
    invalid: "Hay campos por corregir. Revisa los mensajes debajo de cada campo.",
    duplicate: "No se guardó el registro porque ya existe un documento, correo o celular igual.",
    cleared: "Se borraron los registros guardados en este navegador.",
    exported: "Archivo exportado. Revisa la carpeta de descargas del navegador."
  }
};
