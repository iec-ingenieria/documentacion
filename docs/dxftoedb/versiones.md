# Versiones Dxftoedb

## V1.0.2

### Novedades

- Corrección de errores:
    - Error que no permitía agregar nuevos load patterns además de los por defecto

- Mensaje de error a usuario cuando se indica un material no soportado
- Mensaje de advertencia a usuario cuando se indica suelo tipo F
- Hormigón indicado en project_settings.toml para cada piso se está inyectando en la tabla de cargas de los planos '_dxftoedb' en la planta correspondiente

## V1.0.1

### Novedades

- Entidades por defecto. Con esto ya no es necesario poner las entidades en project_settings.toml a menos que se necesite usar otros nombres de layers
- Dxftoedb3 solicita el directorio de trabajo con un cuadro de diálogo, para poder independizar dxftoedb 1 y 2 de dxftoedb 3 y 4. Esto con el fin de separar efectivamente las etapas de prepinchado de la de definición de elementos estructurales
- Manejo del caso en que archivo excel se queda abierto al intentar correr por segunda vez dxftoedb1

## V1.0.0

### Novedades

- Primera versión en python
