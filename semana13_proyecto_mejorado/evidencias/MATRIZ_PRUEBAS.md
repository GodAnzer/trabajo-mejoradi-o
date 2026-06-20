# Matriz de pruebas manuales

Completa esta tabla con tus resultados reales.

| ID | Caso de prueba | Datos usados | Resultado esperado | Resultado obtenido | ¿Pasó? | Evidencia |
|---|---|---|---|---|---|---|
| P01 | Enviar formulario vacío | Sin datos | Debe mostrar errores en campos obligatorios | | Sí / No | |
| P02 | Nombre inválido | `Ana 123` | Debe rechazar números en el nombre | | Sí / No | |
| P03 | Documento inválido | `12A` | Debe rechazar letras | | Sí / No | |
| P04 | Edad menor a 13 | `10` | Debe rechazar por edad mínima | | Sí / No | |
| P05 | Celular con letras | `300abc` | Debe rechazar letras | | Sí / No | |
| P06 | Celular corto | `300123` | Debe pedir 10 dígitos | | Sí / No | |
| P07 | Correo inválido | `correo.com` | Debe pedir formato válido | | Sí / No | |
| P08 | Municipio corto | `A` | Debe pedir mínimo 3 caracteres | | Sí / No | |
| P09 | Registro correcto | Datos completos válidos | Debe guardar en tabla | | Sí / No | |
| P10 | Registro duplicado | Mismo documento/correo/celular | Debe rechazar duplicado | | Sí / No | |
| P11 | Exportar JSON | Clic en exportar JSON | Debe descargar archivo JSON | | Sí / No | |
| P12 | Exportar CSV | Clic en exportar CSV | Debe descargar archivo CSV | | Sí / No | |

## Conclusión de pruebas

Escribe qué pruebas fallaron, qué corregiste y qué aprendiste.

Respuesta:
