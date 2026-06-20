# Guía autónoma del estudiante

## Actividad

**Semana 13 — Taller práctico: validación de formularios, integridad de datos y experiencia de usuario UX**

Esta guía está escrita para que puedas leerla y avanzar sin depender de una explicación oral. El objetivo es que abras el proyecto en Visual Studio Code, comprendas qué hace cada parte, modifiques el código, ejecutes pruebas y entregues evidencias.

---

## 1. Qué vas a aprender

En esta actividad vas a practicar tres competencias técnicas:

### Validación de formularios

Validar significa comprobar que los datos escritos por el usuario cumplen reglas antes de guardar o procesar la información.

Ejemplo:

- El nombre no debe estar vacío.
- El celular debe tener exactamente 10 dígitos.
- El correo debe tener formato válido.
- La edad debe estar dentro de un rango permitido.

### Integridad de datos

La integridad de datos busca que la información sea correcta, completa, coherente y útil.

Un dato puede dañar la integridad cuando:

- Está vacío.
- Tiene formato incorrecto.
- Está duplicado.
- No corresponde al tipo esperado.
- No sirve para tomar decisiones.

### Experiencia de usuario UX

La UX se relaciona con qué tan fácil, clara y cómoda es la interacción de una persona con el sistema.

Un formulario con buena UX:

- Explica qué debe escribirse.
- Muestra errores claros.
- Evita mensajes genéricos como “Error”.
- Guía al usuario para corregir.
- Funciona bien en computador y celular.

---

## 2. Qué contiene el proyecto

El proyecto simula un sistema de inscripción a talleres comunitarios. El usuario llena un formulario, el sistema valida la información y, si todo está correcto, guarda el registro en el navegador.

La aplicación incluye:

- Formulario con campos obligatorios.
- Reglas de validación personalizadas.
- Mensajes de error debajo de cada campo.
- Barra de progreso.
- Resumen en vivo.
- Tabla de registros.
- Filtro de búsqueda.
- Estadísticas.
- Exportación en JSON y CSV.

---

## 3. Qué debes hacer paso a paso

### Paso 1: abrir el proyecto

1. Descomprime el ZIP.
2. Abre la carpeta en VS Code.
3. Revisa la estructura del proyecto.
4. Abre `index.html` en el navegador.

### Paso 2: explorar sin modificar

Antes de cambiar código, prueba el formulario como usuario.

Haz estas pruebas iniciales:

- Enviar el formulario vacío.
- Escribir un celular con letras.
- Escribir un celular con menos de 10 dígitos.
- Escribir una edad menor a 13.
- Escribir un correo sin `@`.
- Enviar un registro correcto.
- Intentar registrar nuevamente el mismo documento, celular o correo.

Anota qué ocurre en cada caso.

### Paso 3: entender los archivos principales

| Archivo | Función |
|---|---|
| `index.html` | Define la estructura del formulario y las secciones de la página. |
| `css/styles.css` | Controla colores, tamaños, distribución y estados visuales. |
| `js/data.js` | Guarda listas de talleres, horarios, municipios y mensajes. |
| `js/validators.js` | Contiene las reglas que aceptan o rechazan datos. |
| `js/storage.js` | Guarda, lee, elimina y exporta datos usando `localStorage`. |
| `js/ui.js` | Muestra errores, tabla, estadísticas, resumen y notificaciones. |
| `js/app.js` | Coordina todos los archivos y responde a eventos del usuario. |

### Paso 4: modificar el proyecto

Debes realizar mínimo tres modificaciones:

1. Mejorar una validación.
2. Ajustar un elemento visual de UX.
3. Documentar y probar tus cambios.

Ejemplos válidos:

- Cambiar el mínimo de caracteres del nombre.
- Exigir que el municipio no contenga símbolos.
- Mejorar el mensaje de error del correo.
- Cambiar colores de campos inválidos.
- Mejorar el diseño responsive.
- Agregar una nueva opción de taller.
- Agregar una nueva sugerencia de municipio.

### Paso 5: probar después de modificar

Después de cada cambio, vuelve al navegador y prueba.

Nunca entregues un cambio que no hayas probado.

Debes tomar capturas de:

- Proyecto abierto en VS Code.
- Formulario ejecutándose en navegador.
- Formulario con errores.
- Formulario con registro correcto.
- Tabla de registros funcionando.
- Consola del navegador sin errores.
- Código modificado.

### Paso 6: completar evidencias

Diligencia estos archivos:

- `evidencias/MATRIZ_PRUEBAS.md`
- `evidencias/BITACORA.md`
- `evidencias/INFORME_ENTREGA.md`

---

## 4. Cómo saber si tu trabajo está bien

Tu entrega debe demostrar que:

- Entiendes qué hace el proyecto.
- Ejecutaste la aplicación correctamente.
- Modificaste código real.
- Aplicaste validación de datos.
- Probaste casos válidos e inválidos.
- Corregiste o mejoraste algo.
- Puedes explicar tus decisiones.

---

## 5. Recomendación final

No trabajes por ensayo y error sin anotar. Cada vez que cambies una línea importante, escribe en la bitácora:

- Qué cambiaste.
- En qué archivo lo cambiaste.
- Por qué lo cambiaste.
- Cómo comprobaste que funcionó.

Esa documentación es parte del aprendizaje técnico.
