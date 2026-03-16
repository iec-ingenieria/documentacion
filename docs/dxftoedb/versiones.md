# Versiones Dxftoedb

## 📚 Índice

- [Versiones Dxftoedb](#versiones-dxftoedb)
  - [📚 Índice](#-índice)
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
