# Dxftoedb3

Dxftoedb3 es el tercer script de la aplicación. Su función es rescatar los datos desde los planos "../planos_dxftoedb/[nombre_plano]\_dxftoedb.dxf" y prepararlos para el último script que generará el modelo Etabs.

## Input

1. "../planos_dxftoedb/[nombre_plano]\_dxftoedb.dxf"

## ¿Como ejecutar dxftoedb1?

Se debe ejecutar como cualquier script de python en la línea de comandos.

<p align="center">
  <img src="../images/dxftoedb3.gif" style="max-width:100%;">
</p>

## Output

El resultado de la ejecución de dxftoedb3 es un archivo en formato JSON con los datos rescatados "../[codigo_proyecto].json".

!!! warning

    El archivo JSON puede ser modificado y los cambios se reflejarán en el modelo, sin embargo no tendrá respaldo en planos.
