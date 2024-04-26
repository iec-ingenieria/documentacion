# Versiones Dxftoedb

## V1.1.0

### Novedades
- Corrección de errores menores.
- Valor por defecto para el factor de forma de Largo/Alto de las vigas igual a 2. Este valor se utiliza para definir si una viga se modela como Shell o como Frame.
- Se incorporan la visualización de arranques en los planos de estructura, necesarios para referencia de vigas.
- Nuevo proceso adicional para la búsqueda de espesor de muros, resuelve problema de muros T.
- Nuevas carpetas para agrupar los planos en cada etapa del proceso
- Cambio en project_settings.toml:
    * Nombre de llave [cargas] ahora [Cargas]
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
