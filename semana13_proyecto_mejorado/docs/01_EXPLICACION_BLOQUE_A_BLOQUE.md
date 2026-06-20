# Explicación bloque a bloque del proyecto

Este documento te ayuda a entender qué hace cada archivo y cada bloque importante del proyecto.

---

## 1. `index.html` — Estructura de la aplicación

El archivo HTML define qué elementos existen en la página. No decide si un dato es correcto; solo prepara la estructura para que CSS la diseñe y JavaScript la haga interactiva.

### Bloque de configuración

Incluye `DOCTYPE`, `html lang="es"`, `meta charset`, `viewport`, título y enlace CSS.

Sirve para que el navegador interprete correctamente el documento y la página se adapte a diferentes pantallas.

### Bloque de encabezado

Presenta el nombre de la actividad, el tema y los objetivos. Ayuda a que el estudiante entienda desde el inicio qué va a practicar.

### Bloque conceptual

Explica validación, integridad de datos y UX. Este bloque conecta la práctica con el sentido técnico de la actividad.

### Bloque del formulario

Contiene campos como nombre, documento, edad, celular, correo, municipio, taller, modalidad y horario.

Cada campo tiene:

- `label`: texto visible que indica qué debe escribir el usuario.
- `input`, `select` o `textarea`: espacio de entrada.
- `field-help`: ayuda breve.
- `field-error`: lugar donde JavaScript muestra errores.

### Bloque de acciones

Contiene botones para validar, limpiar, cargar ejemplo válido y cargar ejemplo inválido.

Estos botones permiten practicar pruebas sin tener que escribir datos manualmente todo el tiempo.

### Bloque de registros

Muestra los datos guardados en una tabla. Sirve para comprobar si el sistema guardó correctamente la información.

---

## 2. `css/styles.css` — Diseño y UX visual

CSS no valida datos, pero ayuda a que el usuario entienda la interfaz.

### Variables globales

En `:root` se definen colores, radios, sombras y medidas. Esto permite mantener coherencia visual.

### Estados de validación

Las clases `.is-valid` e `.is-invalid` cambian el aspecto de los campos según el resultado de JavaScript.

Esto ayuda al usuario a identificar visualmente si un dato está correcto o debe corregirse.

### Diseño responsive

Las reglas `@media` ajustan la página para pantallas pequeñas. Esto es clave para UX porque muchos usuarios trabajan desde celular.

---

## 3. `js/data.js` — Datos base

Este archivo contiene listas y mensajes reutilizables.

Ejemplos:

- Lista de talleres.
- Lista de horarios.
- Sugerencias de municipios.
- Ejemplo válido.
- Ejemplo inválido.
- Mensajes generales.

Si quieres agregar un nuevo taller, este es un archivo adecuado para hacerlo.

---

## 4. `js/validators.js` — Validación e integridad de datos

Este es uno de los archivos más importantes de la práctica.

Aquí están las reglas que definen si un dato se acepta o se rechaza.

### Funciones auxiliares

- `clean()`: elimina espacios innecesarios.
- `normalizeSpaces()`: reduce espacios repetidos.
- `normalizeEmail()`: convierte el correo a minúsculas.
- `onlyDigits()`: deja solo números.

Estas funciones ayudan a comparar y guardar datos de forma más limpia.

### Validaciones principales

- `validateFullName()`: revisa nombre completo.
- `validateDocumentId()`: revisa documento numérico.
- `validateAge()`: revisa rango de edad.
- `validatePhone()`: revisa celular de 10 dígitos.
- `validateEmail()`: revisa formato de correo.
- `validateMunicipality()`: revisa municipio o vereda.
- `validateRequiredSelect()`: revisa opciones obligatorias.
- `validateTerms()`: revisa consentimiento.

### Validación de duplicados

`validateDuplicates()` revisa si ya existe un documento, correo o celular igual.

Esto es integridad de datos porque evita guardar varias veces a la misma persona.

### Normalización

`normalizeData()` prepara la información antes de guardarla. Por ejemplo, limpia espacios y convierte la edad en número.

---

## 5. `js/storage.js` — Almacenamiento local

Este archivo maneja `localStorage`.

`localStorage` permite guardar datos en el navegador, pero no es una base de datos real.

Funciones principales:

- `getRecords()`: obtiene registros.
- `setRecords()`: guarda registros.
- `createRecord()`: crea un registro con id y fecha.
- `saveRecord()`: añade un registro.
- `deleteRecord()`: elimina un registro.
- `clearRecords()`: borra todos.
- `recordsToJson()`: prepara exportación JSON.
- `recordsToCsv()`: prepara exportación CSV.

---

## 6. `js/ui.js` — Interfaz de usuario

Este archivo actualiza lo que ves en pantalla.

Funciones importantes:

- `renderValidation()`: muestra errores debajo de los campos.
- `focusFirstInvalid()`: lleva el cursor al primer campo con error.
- `updateProgress()`: actualiza la barra de progreso.
- `renderSummary()`: muestra resumen en vivo.
- `renderRecords()`: pinta la tabla.
- `renderStats()`: muestra estadísticas.
- `notify()`: muestra mensajes temporales.

---

## 7. `js/app.js` — Coordinador principal

Este archivo une todo.

Cuando el usuario envía el formulario:

1. Detiene el envío automático.
2. Lee los datos.
3. Llama a `validateForm()`.
4. Muestra errores si existen.
5. Normaliza los datos si son válidos.
6. Crea el registro.
7. Guarda en `localStorage`.
8. Actualiza tabla y estadísticas.

Este archivo representa el flujo de una aplicación web interactiva.
