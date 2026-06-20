/*
  ============================================================
  Archivo: css/styles.css

  Este archivo controla la experiencia visual del proyecto.
  No valida datos; su función es ayudar a que el usuario entienda
  el formulario, lea los mensajes y use la aplicación en diferentes
  tamaños de pantalla.
  ============================================================
*/

/*
  BLOQUE 1: Variables globales.
  Las variables permiten cambiar colores, sombras o tamaños desde un solo lugar.
*/
:root {
  --bg: #f5f7fb;
  --surface: #ffffff;
  --surface-soft: #eef4ff;
  --text: #172033;
  --muted: #637083;
  --primary: #2457c5;
  --primary-dark: #173d90;
  --primary-soft: #dbe7ff;
  --success: #087f5b;
  --success-soft: #ddf8ee;
  --warning: #b25f00;
  --warning-soft: #fff3d7;
  --danger: #c92a2a;
  --danger-soft: #ffe3e3;
  --border: #d8e0ec;
  --shadow: 0 18px 45px rgba(23, 32, 51, 0.12);
  --radius-xl: 26px;
  --radius-lg: 18px;
  --radius-md: 12px;
  --container: 1180px;
}

/*
  BLOQUE 2: Reinicio básico.
  box-sizing mejora el cálculo de anchos y evita errores visuales.
*/
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top left, #dbe7ff 0, transparent 32%), var(--bg);
  color: var(--text);
  line-height: 1.6;
}

button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
}

/*
  BLOQUE 3: Accesibilidad.
  El enlace aparece cuando el usuario navega con teclado.
*/
.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  background: var(--text);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  z-index: 50;
}

.skip-link:focus {
  top: 1rem;
}

/*
  BLOQUE 4: Encabezado.
  Presenta el proyecto con jerarquía visual clara.
*/
.hero {
  max-width: var(--container);
  margin: 0 auto;
  padding: 1.25rem 1rem 2rem;
}

.topbar {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 25px rgba(23, 32, 51, 0.06);
}

.topbar a {
  text-decoration: none;
  color: var(--muted);
  font-weight: 700;
  font-size: 0.92rem;
}

.topbar a:hover,
.topbar a:focus-visible {
  color: var(--primary);
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.75fr);
  gap: 1.25rem;
  align-items: stretch;
}

.hero__content,
.hero__card,
.panel,
.concept-card,
.challenge-card {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.hero__content {
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 4vw, 3rem);
}

.hero__content h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 4.7rem);
  line-height: 1;
  letter-spacing: -0.06em;
}

.hero__lead {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 800px;
}

.hero__card {
  border-radius: var(--radius-xl);
  padding: 1.5rem;
}

.eyebrow,
.section-kicker {
  margin: 0 0 0.45rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-size: 0.75rem;
  font-weight: 800;
}

.hero__actions,
.form-actions,
.record-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

/*
  BLOQUE 5: Botones.
  Los botones usan estilos consistentes y estados visibles al pasar el cursor.
*/
.button {
  border: 0;
  border-radius: 999px;
  padding: 0.82rem 1.05rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 12px 25px rgba(23, 32, 51, 0.16);
}

.button--primary {
  background: var(--primary);
  color: #ffffff;
}

.button--primary:hover,
.button--primary:focus-visible {
  background: var(--primary-dark);
}

.button--secondary {
  background: var(--primary-soft);
  color: var(--primary-dark);
}

.button--ghost {
  background: #ffffff;
  color: var(--text);
  border: 1px solid var(--border);
}

.button--warning {
  background: var(--warning-soft);
  color: var(--warning);
}

.button--danger {
  background: var(--danger-soft);
  color: var(--danger);
}

/*
  BLOQUE 6: Secciones y paneles.
  Organizan la información en bloques legibles.
*/
.section,
.app-shell {
  max-width: var(--container);
  margin: 0 auto;
  padding: 1rem;
}

.section__header {
  margin-bottom: 1rem;
  max-width: 760px;
}

.section__header h2,
.panel h2 {
  margin: 0;
  letter-spacing: -0.04em;
}

.concept-grid,
.challenge-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.concept-card,
.challenge-card {
  border-radius: var(--radius-lg);
  padding: 1.25rem;
}

.concept-card__number {
  display: inline-flex;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: var(--primary-soft);
  color: var(--primary-dark);
  align-items: center;
  justify-content: center;
  font-weight: 900;
}

.app-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(300px, 0.8fr);
  gap: 1rem;
  align-items: start;
}

.panel {
  border-radius: var(--radius-xl);
  padding: 1.35rem;
  margin-bottom: 1rem;
}

.panel--sticky {
  position: sticky;
  top: 1rem;
}

.panel__heading {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.panel__heading--wrap {
  flex-wrap: wrap;
}

/*
  BLOQUE 7: Formulario.
  La estructura visual ayuda a comprender qué datos pertenecen a cada grupo.
*/
.form {
  display: grid;
  gap: 1.2rem;
}

.fieldset {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1rem;
}

.fieldset legend {
  padding: 0 0.5rem;
  font-weight: 900;
  color: var(--primary-dark);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.field {
  display: grid;
  gap: 0.35rem;
}

.field--wide {
  grid-column: 1 / -1;
}

.field--checkbox {
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px dashed var(--border);
  border-radius: var(--radius-lg);
  background: #fbfdff;
}

.field--checkbox .field-error {
  grid-column: 2;
}

label {
  font-weight: 800;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0.85rem;
  background: #ffffff;
  color: var(--text);
  outline: none;
  transition: border 0.16s ease, box-shadow 0.16s ease, background 0.16s ease;
}

textarea {
  resize: vertical;
}

input[type="checkbox"] {
  width: auto;
  margin-top: 0.25rem;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px var(--primary-soft);
}

.field-help,
.field-counter,
.field-error {
  margin: 0;
  font-size: 0.86rem;
}

.field-help,
.field-counter {
  color: var(--muted);
}

.field-error {
  min-height: 1.2rem;
  color: var(--danger);
  font-weight: 800;
}

/*
  BLOQUE 8: Estados de validación.
  is-valid e is-invalid conectan la lógica JS con señales visuales.
*/
.is-valid {
  border-color: var(--success) !important;
  background: var(--success-soft);
}

.is-invalid {
  border-color: var(--danger) !important;
  background: var(--danger-soft);
}

/*
  BLOQUE 9: Progreso y resumen.
*/
.progress-card {
  min-width: 140px;
  display: grid;
  gap: 0.35rem;
  color: var(--primary-dark);
  font-weight: 900;
}

.progress-bar {
  height: 0.55rem;
  border-radius: 999px;
  background: var(--primary-soft);
  overflow: hidden;
}

.progress-bar span {
  display: block;
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: var(--primary);
  transition: width 0.2s ease;
}

.summary-list {
  display: grid;
  gap: 0.65rem;
  margin: 0;
}

.summary-list div {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 0.5rem;
  padding-bottom: 0.55rem;
  border-bottom: 1px solid var(--border);
}

.summary-list dt {
  color: var(--muted);
  font-weight: 800;
}

.summary-list dd {
  margin: 0;
}

.check-list {
  padding-left: 1.2rem;
}

.check-list li {
  margin-bottom: 0.45rem;
}

.check-list--compact {
  margin-bottom: 0;
}

.test-log {
  min-height: 5rem;
  border-radius: var(--radius-md);
  padding: 0.85rem;
  background: #101828;
  color: #e6edf7;
  font-family: "Cascadia Code", "Fira Code", Consolas, monospace;
  font-size: 0.88rem;
  white-space: pre-wrap;
}

/*
  BLOQUE 10: Tabla y estadísticas.
*/
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 1rem 0;
}

.stat-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1rem;
  background: #fbfdff;
}

.stat-card strong {
  display: block;
  font-size: 1.6rem;
  color: var(--primary-dark);
}

.stat-card span {
  color: var(--muted);
  font-weight: 700;
}

.search-box {
  display: grid;
  gap: 0.25rem;
  min-width: min(100%, 260px);
}

.search-box span {
  font-size: 0.82rem;
  color: var(--muted);
}

.table-wrapper {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 820px;
  background: #ffffff;
}

th,
td {
  text-align: left;
  padding: 0.8rem;
  border-bottom: 1px solid var(--border);
}

th {
  background: var(--surface-soft);
  color: var(--primary-dark);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.empty-row {
  text-align: center;
  color: var(--muted);
  padding: 1.2rem;
}

.badge {
  display: inline-flex;
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  font-size: 0.78rem;
  font-weight: 900;
  background: var(--primary-soft);
  color: var(--primary-dark);
}

.toast {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  max-width: min(420px, calc(100% - 2rem));
  background: #101828;
  color: #ffffff;
  padding: 1rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(1rem);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 80;
}

.toast.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.footer {
  max-width: var(--container);
  margin: 1rem auto 2rem;
  padding: 1rem;
  color: var(--muted);
  text-align: center;
}

/*
  BLOQUE 11: Responsive.
  Permite que la práctica funcione en pantallas pequeñas.
*/
@media (max-width: 920px) {
  .hero__grid,
  .app-shell,
  .concept-grid,
  .challenge-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .panel--sticky {
    position: static;
  }

  .topbar {
    border-radius: var(--radius-lg);
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .form-grid,
  .summary-list div {
    grid-template-columns: 1fr;
  }

  .hero,
  .section,
  .app-shell {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .hero__content,
  .hero__card,
  .panel {
    border-radius: 18px;
  }

  .record-actions,
  .form-actions,
  .hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }
}


/* Mejoras agregadas */
input:focus, select:focus, textarea:focus{
  outline: 2px solid var(--primary);
}
button{
  transition: transform .2s ease;
}
button:hover{
  transform: translateY(-2px);
}
