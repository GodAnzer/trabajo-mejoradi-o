# Ruta de la actividad práctica

## Momento 1: reconocimiento

Abre el proyecto y responde en tu cuaderno o bitácora:

1. ¿Cuál es el propósito del formulario?
2. ¿Qué campos son obligatorios?
3. ¿Qué archivo contiene las reglas de validación?
4. ¿Qué archivo controla los estilos visuales?
5. ¿Dónde se guardan los registros?

## Momento 2: pruebas iniciales

Ejecuta el formulario sin modificar código y prueba:

| Prueba | Dato de entrada | Resultado esperado |
|---|---|---|
| Formulario vacío | Clic en validar sin escribir | Deben aparecer errores. |
| Edad inválida | 10 | Debe rechazar por edad mínima. |
| Celular inválido | 300abc | Debe rechazar letras. |
| Correo inválido | prueba.com | Debe pedir formato válido. |
| Registro válido | Datos correctos | Debe guardar en tabla. |
| Registro duplicado | Mismo documento/correo/celular | Debe rechazar duplicado. |

## Momento 3: intervención del código

Realiza mínimo tres cambios:

### Cambio obligatorio 1: validación

Modifica `js/validators.js`.

Ejemplos:

- Hacer más claro el mensaje de error del documento.
- Impedir símbolos en municipio.
- Cambiar la edad máxima.
- Exigir que el nombre tenga al menos dos palabras.

### Cambio obligatorio 2: UX visual

Modifica `css/styles.css`.

Ejemplos:

- Mejorar contraste de errores.
- Ajustar tamaño de botones.
- Cambiar estilos de `.is-valid` o `.is-invalid`.
- Mejorar diseño en celular.

### Cambio obligatorio 3: datos o estructura

Modifica `index.html` o `js/data.js`.

Ejemplos:

- Agregar una opción de taller.
- Agregar una sugerencia de municipio.
- Mejorar un texto de ayuda.
- Agregar una sección informativa.

## Momento 4: pruebas después de modificar

Después de modificar, repite pruebas y completa `evidencias/MATRIZ_PRUEBAS.md`.

## Momento 5: entrega

Entrega:

- Proyecto modificado en ZIP.
- Capturas en la carpeta `capturas/`.
- Matriz de pruebas diligenciada.
- Bitácora diligenciada.
- Informe final.
