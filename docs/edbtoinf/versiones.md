# Versiones EDBTOINF

## V1.1.0

### Novedades

#### NCh433 — Soporte suelo F

- Soporte completo para suelo F: parámetros avanzados (S, T0, T', n, p, A0) configurables desde la GUI con validación.
- Carga de espectro de sitio Sa(T) y Sde(T) (formato TXT/CSV con auto-detección de unidad desde el header).
- Tooltips explicativos en cada parámetro y marcas (*) en los campos obligatorios.
- Validación en vivo: warning visible apenas faltan campos obligatorios al elegir suelo F.

#### Correcciones de drift y corte máximo

- Corrección importante: el drift ahora usa R1 cuando corte máximo controla (NCh433 5.9.2). Antes usaba R\*\* y subestimaba el drift.
- Eliminado bug de doble corrección en desplazamientos cuando corte_max controlaba.

#### Rediseño UX/UI

- Interfaz tipo wizard en 3 tabs (Modelo / Parámetros / Niveles).
- Modal con barra de progreso durante carga de EDB y generación del informe.
- Diálogos themed (info, error, confirmación) consistentes con `ttkbootstrap`.
- Tab de log con tags coloreados según contenido (info / warning / error / propuesta / detalle).
- Logo IEC como ícono de la ventana y los modales.

#### Propuestas automáticas al cargar EDB

- **Categoría / Zona / Suelo NCh433**: detectados desde el nombre del espectro (convención IEC `C<cat>Z<zona>S<suelo>`, por ejemplo `CIIZ2SC`).
- **H₀**: propuesto desde cotas de pisos `P*` (excluye subterráneos `S*` y salas de máquina `SM*`).
- **Líneas resistentes X / Y**: estimadas leyendo piers + columnas (con rotación local de cada una) + braces (con cosenos directores 3D), agrupando por eje con tolerancia 1m, contando los que toman ≥5% del corte capturado, y tomando la mediana sobre pisos torre confiables. Reporta los nombres de los grids del modelo en el log.

#### Persistencia y calidad de vida

- Parámetros guardados por proyecto en archivo oculto `.<codigo>_params.json` y recargados al volver al EDB.
- Recordar última carpeta del filedialog (separado para EDB y espectros) en `~/.edbtoinf_state.json`.
- Modal final con botones "Abrir PDF" y "Copiar ruta" (open con handler default del SO + clipboard).
- Pre-flight check: avisa si el PDF está bloqueado por otro proceso (visor abierto) antes de gastar tiempo en el análisis.
- Auto-carga del archivo `.drift` previo si existe; sino genera propuesta automática.

#### Performance

- CQC vectorizado con NumPy (de doble loop `itertools.product` a operaciones matriciales).
- `import comtypes` movido a top-level (deja de pagar el lookup en cada carga).
- `matplotlib` usa backend `Agg` (silencia warnings de threading y mejora estabilidad).

#### Logs limpios

- 300+ líneas "Descartado para drift adicional" reemplazadas por una única línea de resumen.
- `stdout` y `stderr` van solo al tab Log (no se duplica a la consola).
- Salto de línea entre prints para mejor legibilidad.

#### Bugs corregidos

- `_cargar_params`: los overrides de suelo F no se recargaban porque los entries en `disabled` ignoraban `delete`/`insert` programáticos. Ahora se hacen 2 pasadas: combos primero (que disparan los handlers para habilitar) y luego los entries.
- Detección de caso sísmico: `endswith("x")` excluía `ExE` por terminar en "e". Corregido a listas explícitas en orden de preferencia.
- Restauración del setup de output ETABS al final de la propuesta de líneas (antes dejaba estado inválido y rompía el rescate posterior con `could not convert string to float: 'Ex'`).
- `nombres_funciones_espectro`: tomaba `LoadName` (`U1`) en vez del nombre real del espectro (`FuncName`).
- Tolerancia numérica en validación de amplificación modal.

#### Build y dependencias

- Migración a `uv` como source of truth: `uv.lock` versionado, `requirements.txt` y `dev-requirements.txt` eliminados.
- Versionado homologado con `dxftoedb` / `edbtopre`: `version_scheme = "guess-next-dev"` y versiones via git tags `X.Y.Z`.
- `comtypes` actualizado a `1.4.16`.

## V1.0.5

### Novedades

- Corrección error en calculo de drift cuando estados dinámicos se llama Ex y Ey en vez de Sx y Sy.

## V1.0.4

### Novedades

- Corrección error en que porcentaje de corte basal respecto del peso sísmico estaba mal calculado para dirección Y.
- Corrección error en que para edificios controlados por corte máximo, no se consideraba adecuadamente el coeficiente de importancia en el reporte.

## V1.0.3

### Novedades

- Corrección error en versión 1.0.2: No se detectaba factores de reducción cuando torsión accidental se ingresa como excentricidad aplicada directo a los sismos.

## V1.0.2

### Novedades

- Corrección error en versión 1.0.1

## V1.0.1

### Novedades

- Compatibilidad con DXFTOEDB para estados de carga sísmicos llamados ExE, EyE, Ex y Ey
- Errores menores de tipeo en la interfaz

## V1.0.0

### Novedades

- Primera versión en instalable solo con python
- Actualización de dependencias para compatibilidad con software IEC
