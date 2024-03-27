# Dxftoedb2

Dxftoedb2 es el segundo script de la aplicación. Su función es leer los planos generados del paso anterior para encontrar los elementos estructurales y representarlos mediante una línea característica que pasa por el eje de coordenadas correspondiente. En esta etapa también se genera la tabla de propiedades y cargas de las losas.

## Input

1. Planos "../planos_dxftoedb/[nombre_plano]\_grilla.dxf"
2. Archivo "../grilla_RXXXX.xlsx"

## Uso

Se debe ejecutar invocando el comando `dxftoedb2`

![dxftoedb2](../images/dxftoedb2a.gif)

## Output

El resultado de la ejecución de dxftoedb2 es la generación de los planos "../planos_dxftoedb/[nombre_plano]\_dxftoedb.dxf". Estos son planos de trabajo, en los que se debe ajustar los elementos estructurales y cargas que finalmente llegarán al modelo Etabs.

![dxftoedb2](../images/dxftoedb2a.png)

!!! warning

    Al editar un plano, se debe guardar en formato **Autocad 2010 ASCI DXF (.dxf)**


    ![dxftoedb2](../images/save_as.png)

### Elementos estructurales

Los elementos estructurales en el plano están representados por líneas y un texto representativo de la sección.

- El usuario debe ajustar el inicio y fin de las líneas para determinar las dimensiones de los elementos estructurales.
- El usuario debe ajustar el texto de la sección para representar adecuadamente la sección transversal.

#### Muros

Los muros son líneas en la capa "MUROS_etabs" de color calipso.

![Muros](../images/dxftoedb2b.png)

#### Vigas

Las vigas son líneas en la capa "VIGAS_etabs" de color amarillo.

![Vigas](../images/dxftoedb2c.png)

#### Columnas

EN DESARROLLO ...

### Losas y cargas

Las losas y cargas están directamente relacionadas ya que en un mismo procedimiento se agregan tanto las losas como las cargas.

A cada plano se le ha incorporado una tabla de propiedades y cargas como la siguiente.

![Propiedades y Cargas](../images/dxftoedb2d.png)

- En el plano correspondiente, el usuario debe identificar las distintas losas existentes y modificar sus propiedades de acuerdo a sus características.
- El usuario debe dibujar elementos tipo "hatch" y asignarle al elemento el color correspondiente de la tabla.

![Losas y Cargas](../images/dxftoedb2b.gif)
