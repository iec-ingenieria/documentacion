# Dxftoedb3

Dxftoedb3 es el tercer script de la aplicación. Su función es rescatar los datos desde los planos "../planos_dxftoedb/[nombre_plano]\_dxftoedb.dxf" y prepararlos para el último script que generará el modelo Etabs.

## Input

1. "../planos_dxftoedb/[nombre_plano]\_dxftoedb.dxf"

## Uso

Se debe ejecutar invocando el comando <code>dxftoedb3</code>

Luego de la ejecución se solicitará al usuario seleccionar la carpeta de trabajo. La carpeta de trabajo es donde está archivo de configuración project_settings.toml.

![dxftoedb3](../images/dxftoedb3.gif)

## Output

El resultado de la ejecución de dxftoedb3 es un archivo en formato JSON con los datos rescatados "../[codigo_proyecto].json".

!!! warning

    El archivo JSON puede ser modificado y los cambios se reflejarán en el modelo, sin embargo no tendrá respaldo en planos.
