# Semana 13 — Taller práctico de validación de formularios, integridad de datos y UX

## Empieza aquí

Este proyecto está diseñado para abrirse en **Visual Studio Code** y practicar una actividad real de desarrollo web: **codificar, ejecutar, probar, ajustar y documentar** un formulario de inscripción.

La actividad trabaja tres ideas centrales:

1. **Validación de formularios:** comprobar que los datos ingresados cumplen reglas antes de guardarlos.
2. **Integridad de datos:** evitar información vacía, incoherente, duplicada o difícil de usar.
3. **Experiencia de usuario (UX):** ayudar al usuario con mensajes claros, diseño legible y retroalimentación útil.

## Qué vas a construir y modificar

El proyecto incluye una aplicación web llamada **Registro inteligente de talleres comunitarios**. La aplicación permite:

- Registrar participantes en talleres.
- Validar nombre, documento, edad, celular, correo, municipio, taller, modalidad y aceptación de condiciones.
- Mostrar errores claros debajo de cada campo.
- Guardar registros en el navegador con `localStorage`.
- Evitar duplicados por documento, correo o celular.
- Filtrar registros guardados.
- Mostrar estadísticas básicas.
- Exportar registros en JSON o CSV.
- Probar el sistema con casos válidos e inválidos.

## Archivos principales

```text
semana13_taller_practico_validacion_ux_profesional/
├── index.html                      # Estructura visual de la aplicación
├── css/styles.css                   # Diseño, responsive y estados visuales
├── js/data.js                       # Datos base: talleres, municipios y mensajes
├── js/validators.js                 # Reglas de validación e integridad de datos
├── js/storage.js                    # Guardado, lectura, eliminación y exportación
├── js/ui.js                         # Renderizado de errores, tabla, estadísticas y mensajes
├── js/app.js                        # Coordinador principal de la aplicación
├── docs/                            # Guías autónomas de estudio
├── evidencias/                      # Plantillas para entregar la actividad
├── tests/                           # Casos de prueba sugeridos
└── capturas/                        # Carpeta para guardar evidencias visuales
```

## Cómo abrirlo en VS Code

1. Descarga y descomprime el ZIP.
2. Abre VS Code.
3. Selecciona **File > Open Folder** o **Archivo > Abrir carpeta**.
4. Escoge la carpeta completa del proyecto.
5. Abre `README.md` y luego `docs/00_GUIA_AUTONOMA_ESTUDIANTE.md`.
6. Abre `index.html` en el navegador.

Puedes abrir el proyecto de dos formas:

- Forma sencilla: doble clic sobre `index.html`.
- Forma recomendada: instalar la extensión **Live Server** en VS Code, clic derecho sobre `index.html` y seleccionar **Open with Live Server**.

## Qué debes entregar

Al terminar, entrega una carpeta comprimida con:

- El proyecto modificado.
- Capturas de pruebas.
- Matriz de pruebas diligenciada.
- Bitácora de aprendizaje.
- Informe breve de cambios.

Las plantillas están en la carpeta `evidencias/`.

## Orden recomendado de lectura

1. `docs/00_GUIA_AUTONOMA_ESTUDIANTE.md`
2. `docs/01_EXPLICACION_BLOQUE_A_BLOQUE.md`
3. `docs/02_RUTA_ACTIVIDAD_PRACTICA.md`
4. `evidencias/MATRIZ_PRUEBAS.md`
5. `evidencias/BITACORA.md`
6. `evidencias/INFORME_ENTREGA.md`

## Reto central de la actividad

No basta con ejecutar el proyecto. Debes intervenirlo.

Debes realizar mínimo estas modificaciones:

1. Agregar o mejorar una validación.
2. Ajustar un elemento visual para mejorar la UX.
3. Probar el formulario con datos correctos e incorrectos.
4. Documentar qué cambiaste y por qué.

## Mensaje importante

Este proyecto no usa base de datos real ni servidor. Guarda datos en `localStorage`, que pertenece al navegador. En aplicaciones profesionales, las validaciones también deben repetirse en el backend para proteger la integridad de la información.
