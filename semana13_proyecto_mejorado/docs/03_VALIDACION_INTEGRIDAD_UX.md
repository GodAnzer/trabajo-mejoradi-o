# Validación, integridad de datos y UX

## 1. Validación

La validación revisa que un dato cumpla una regla.

Ejemplos:

| Campo | Regla |
|---|---|
| Nombre | No vacío, mínimo dos palabras, sin números. |
| Documento | Solo números, entre 6 y 12 dígitos. |
| Edad | Número entero entre 13 y 80. |
| Celular | Exactamente 10 dígitos, inicia por 3. |
| Correo | Formato válido con `@` y dominio. |
| Taller | Selección obligatoria. |

## 2. Integridad de datos

La integridad busca que los datos sirvan realmente.

Un sistema puede verse bien, pero si guarda datos incorrectos, no es confiable.

Ejemplo de dato con baja integridad:

```text
Nombre: a
Celular: 123
Correo: hola
Edad: diez
```

Ejemplo de dato con mejor integridad:

```text
Nombre: Ana María Pérez Gómez
Celular: 3001234567
Correo: ana.perez@example.com
Edad: 16
```

## 3. UX en formularios

La UX mejora cuando el sistema ayuda al usuario.

### Mala UX

```text
Error.
```

### Mejor UX

```text
El celular debe tener exactamente 10 dígitos y no debe contener letras.
```

El segundo mensaje permite corregir.

## 4. Validación en frontend y backend

Este proyecto valida en frontend porque usa HTML, CSS y JavaScript en el navegador.

En proyectos reales también se debe validar en backend, porque el usuario puede manipular el navegador.

## 5. Lo que debes observar en este proyecto

- Cómo JavaScript detecta errores.
- Cómo CSS muestra visualmente campos válidos o inválidos.
- Cómo se evitan duplicados.
- Cómo se guía al usuario con textos de ayuda.
- Cómo se documentan pruebas.
