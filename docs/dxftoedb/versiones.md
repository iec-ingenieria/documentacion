# Versiones Dxftoedb

## 📚 Índice

- [Versiones Dxftoedb](#versiones-dxftoedb)
  - [📚 Índice](#-índice)
  - [V1.5.0](#v150)
  - [V1.4.0](#v140)
  - [V1.3.1](#v131)
  - [V1.3.0](#v130)
    - [🆕 Cambios principales](#-cambios-principales)
    - [🛠️ Herramientas Lisp](#️-herramientas-lisp)
  - [V1.2.5](#v125)
  - [V1.2.4](#v124)
  - [V1.2.3](#v123)
  - [V1.2.2](#v122)
  - [V1.2.1](#v121)
  - [V1.2.0](#v120)
  - [V1.1.0](#v110)
    - [Novedades](#novedades)
  - [V1.0.2](#v102)
    - [Novedades](#novedades-1)
  - [V1.0.1](#v101)
    - [Novedades](#novedades-2)
  - [V1.0.0](#v100)
    - [Novedades](#novedades-3)

---

## V1.5.0

### 🆕 Cambios principales

  - **Plano PEJES dedicado para ejes**: nuevo campo `Stories.archivo_ejes` en `project_settings.toml`. Cuando se define (ej: `archivo_ejes = "PEJES"`), `dxftoedb1` extrae los ejes solo desde ese plano y genera el Excel de grilla en una sola corrida. Elimina el flujo manual previo de doble ejecución de `dxftoedb1` y renombrado del Excel.
  - **Conectividad estructural en T-junctions**: muros y vigas se dividen automáticamente en cada cruce con elementos perpendiculares, generando nodos compartidos para que los elementos queden estructuralmente conectados en ETABS.
  - **Extensión a intersecciones**: muros y vigas se extienden hasta la intersección con elementos perpendiculares cercanos (tolerancia configurable vía `Estructura.tol_extension_interseccion`, default 25 cm). Cierra gaps entre elementos que en el dibujo terminaban antes del cruce.
  - **Empalme automático muro–viga**: cuando un muro y una viga adyacentes del mismo eje terminan en posiciones distintas (gap < 15 cm), la viga se ajusta al endpoint del muro. El muro define la frontera real (viene de las caras DXF) y la viga lo respeta. Elimina los traslapes visibles en muro→viga→muro.
  - **Vigas recortadas por muros superpuestos**: cuando una viga y un muro coexisten en el mismo eje (ej: cambio de elevación de losa), la viga se recorta para no superponerse. El muro prevalece; los trozos de viga < 30 cm post-resta se descartan.
  - **Reconstrucción de vigas partidas por achura**: cuando el calculista rompe una viga en el dibujo para representar un cambio de espesor de losa, las tapas cortas se filtran y dejan caras sin par. Si la cara sobreviviente toca a los muros/vigas contiguos, se reconstruye un par virtual interpolando la cara faltante para obtener una viga continua.
  - **Filtro eje-más-cercano**: cuando hay ejes paralelos cercanos (ej: ejes N y N1), cada cara de muro/viga se asigna solo al eje más próximo. Evita la duplicación de elementos cuando dos ejes paralelos compiten por las mismas caras.
  - **Snap automático de nodos**: endpoints de muros/vigas de ejes distintos que convergen al mismo punto se unifican (tolerancia 5 cm) para garantizar nodos compartidos en el DXF y ETABS.

### 🐛 Correcciones

  - **Pisos compartidos**: pisos que apuntan al mismo DXF (ej: P01 y P02 con `P01Y02.dxf`) ya no pierden uno de los pisos en la generación del modelo.
  - **Muros fantasma en ejes diagonales**: nuevo filtro de distancia perpendicular al eje (50 cm) evita que un muro sea capturado por un eje vecino diagonal de ángulo similar.
  - **MUROS_sin_espesor**: muros cuyo espesor no se puede medir ya no se dibujan (eran falsos positivos en zonas con ejes diagonales).
  - **Tapas de muros perpendiculares**: filtro de largo mínimo (40 cm) descarta segmentos espurios provenientes de tapas paralelas a ejes diagonales.
  - **Retornos geométricos**: caras cortas (<80 cm) sin contraparte en muros se descartan como retornos geométricos en lugar de procesarse como muros reales.
  - **Segmentos cortos post-split**: artefactos de ~46 cm creados por la diferencia entre `ajuste_por_eje` y el split en intersecciones reales se absorben en su vecino collineal del mismo eje.
  - **Alineación al centro de tapas**: muros y vigas ahora se ubican exactamente en el centro de sus tapas (antes quedaban ~0.7 cm desplazados con tapas verticales sobre ejes diagonales).
  - **Muros que sobrepasan sus tapas**: el algoritmo de reconstrucción de vigas partidas ya no conecta elementos separados por un vano (la reconstrucción solo aplica cuando la cara sin par toca físicamente a los vecinos, gap ≈ 0).
  - **Generación con `archivo_ejes`**: con el campo definido, ahora se guardan todos los `_grilla.dxf` (no solo el del PEJES), para que `dxftoedb2` encuentre el plano de cada piso.
  - **Compatibilidad ezdxf Cython**: funciones de intersección 2D (`intersection_line_line_2d`) reciben `Vec2` explícitos. Versiones con aceleración Cython rechazaban `Vec3` con `TypeError`.
  - **Rótulos de ejes quebrados**: matching bipartito recupera los rótulos perdidos en ejes con vértices compartidos.
  - **Coordenadas en Excel de grilla**: ahora se escriben como números con 2 decimales (antes eran strings, rompiendo filtros y ordenamiento).
  - **Pier/spandrel**: tolerancia relajada (1e-3 m) para que la asignación funcione correctamente con la imprecisión float de la conversión cm→m.
  - **Tabla de cargas dxftoedb3**: corregidos `ZeroDivisionError`, `IndexError` silencioso, y refactorizado de O(n²) a O(n) en `encuentra_max_x_y_max_y`.

### 🛠️ Mejoras internas

  - **Pipeline paralelo path-based**: todos los stages (cambio_capa, ejes, grilla_corregida, estructura) procesan plantas en paralelo via `ProcessPoolExecutor`, pasando paths entre stages en vez de objetos `Drawing`. Elimina I/O duplicado.
  - **dxftojson optimizado**: regex precompilados, índice espacial para búsqueda de textos en O(1), construcción de índice y dicts por layer en una sola pasada.
  - **Refactor de `analisis.py`**: complejidad McCabe reducida a ≤5 mediante extracción de helpers (`_fusion_colineal`, `_fusion_por_extremo`, etc.). Comparaciones con distancia² evitan `sqrt()` en hot paths.
  - **Tolerancias documentadas**: cada constante `_TOL_*`/`_MIN_*` en `analisis.py` tiene docstring explicando el valor elegido, el caso típico que cubre y los riesgos de subir/bajar.
  - **Nuevos utilitarios**: `procesar_en_paralelo` (wrapper de ProcessPool con fallback secuencial), `IndiceEspacialTextos` (búsqueda grid-based), `distancia_al_cuadrado_entre_dos_puntos`.
  - **Tests de integración**: cobertura completa del pipeline `dxftoedb1→3` en R3707 y R4447 (ortogonal y diagonal), incluyendo verificaciones específicas de las correcciones aplicadas (viga sobre muro, viga partida por achura, puente no conecta muros separados).

## V1.4.0

### 🆕 Cambios principales

  - Migración de gestión de proyecto a `uv`.
  - Reemplazo de `print()` por logging estructurado en todos los módulos.
  - Simplificación y limpieza general del código: extracción de constantes, helpers reutilizables y eliminación de código muerto.

### 🐛 Correcciones

  - Fix: error de división por cero en función `busqueda_de_texto` al procesar ecuación de la recta.
  - Fix: condiciones de viento en generación de combinaciones verificaban variable incorrecta.
  - Fix: comparación de coordenadas por string reemplazada por `math.isclose` con tolerancia.
  - Fix: typo "Masorry" corregido a "Masonry" en códigos de materiales.

### 🛠️ Mejoras internas

  - Centralización de validación de settings en función compartida `validar_llaves_settings`.
  - Constantes de materiales y secciones extraídas a nivel de módulo para mejor mantenimiento.
  - Versionado corregido: esquema `guess-next-dev`, archivo `_version.py` removido del repositorio.
  - 42 tests nuevos cubriendo las mejoras implementadas.

## V1.3.1


  - Valor por defecto para bending de losas en tabla de planos de cargas 0.25.


## V1.3.0

### 🆕 Cambios principales

  - Mejoras en rescate de textos de vigas.
  - Combinaciones no lineales detectan automaticamente el estado de carga CM.
  - Bordes de losa, hoyos y vanos llegan al plano cargas para facilitar el pinchado de zonas de carga.
  - Generación automática de piers y spandrels usando un algorítmo básico.
  - Capacidad de ejecutar un análisis automático al terminar la generación del modelo.

### 🛠️ Herramientas Lisp

  - Nuevas herramientas complementarias para instalar en Bricscad.
  - Motes: búsqueda de nodos cercanos.
  - Prelosa: Generación de polilíneas para usar en zonas de carga.

## V1.2.5

  - Mejoramiento de presición en intersección de elementos.

## V1.2.4

  - Corrección de errores relacionados con los hatch de cargas.

## V1.2.3

  - Manejo de errores respecto de los colores de los hatch. Cuando no se detecta un color, no se dibuja esa losa.
  - Se ha modificado la categorización de vigas: cuando una viga tiene el estado 'warning 99.9/99.9', no será categorizada automáticamente para evitar su conversión a shell. En su lugar, deberá ser revisada manualmente en el modelo.
  - Se elimina el archivo de salida .log.

## V1.2.2

  - Fix: Corrección de error de lectura de Hatch, evitando interrupción de la ejecución cuando Hatch es del tipo "EdgePath". Hatch válidos son de tipo "PolylinePath".

## V1.2.1

  - Actualización de dependencias para ser consistente con el resto del software IEC.

## V1.2.0

  - Corrección Bug que provocaba en algunos computadores la interrupción del script en dxftoedb4.
  - Actualizaciónm documentación para las nuevas rutas a los planos generados.
  - Se elimina la posibilidad de indicar los modificadores de rigidez para frames desde project_setting (configuración avanzada).

## V1.1.0

### Novedades

- Corrección de errores menores.
- Valor por defecto para el factor de forma de Largo/Alto de las vigas igual a 2. Este valor se utiliza para definir si una viga se modela como Shell o como Frame.
- Se incorporan la visualización de arranques en los planos de estructura, necesarios para referencia de vigas.
- Nuevo proceso adicional para la búsqueda de espesor de muros, resuelve problema de muros T.
- Nuevas carpetas para agrupar los planos en cada etapa del proceso.
- Cambio en project_settings.toml:
    - Nombre de llave [cargas] ahora [Cargas]

```toml
  [Cargas]
```

    * Se agrega espesor de losa tipo por piso en [Stories][Data]

```toml
     [Stories]
        BaseElevation = -1.5
        Data = [
        ["p01", 2.5, "01", "G30",0.15],
        ["p02", 2.5, "02", "G30",0.16],
      ]
```

## V1.0.2

### Novedades

- Se fusionan los scripts dxftoedb3 y dxftoedb4 en uno solo llamado dxftoedb4
- Se divide el script dxftoedb2 en dxftoedb2 (para elementos estructurales) y dxftoedb3 (para losas y cargas)
- Mensaje de error a usuario cuando se indica un material no soportado
- Mensaje de advertencia a usuario cuando se indica suelo tipo F
- Hormigón indicado en project_settings.toml para cada piso se está inyectando en la tabla de cargas de los planos '_dxftoedb' en la planta correspondiente
- Documentación para configuración básica y avanzada

- Corrección de errores:
    - Error que no permitía agregar nuevos load patterns además de los por defecto

## V1.0.1

### Novedades

- Entidades por defecto. Con esto ya no es necesario poner las entidades en project_settings.toml a menos que se necesite usar otros nombres de layers
- Dxftoedb3 solicita el directorio de trabajo con un cuadro de diálogo, para poder independizar dxftoedb 1 y 2 de dxftoedb 3 y 4. Esto con el fin de separar efectivamente las etapas de prepinchado de la de definición de elementos estructurales
- Manejo del caso en que archivo excel se queda abierto al intentar correr por segunda vez dxftoedb1

## V1.0.0

### Novedades

- Primera versión en python
