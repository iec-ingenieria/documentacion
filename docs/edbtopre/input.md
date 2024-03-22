# Input

## Matriz de combinación

El primer paso es definir la matriz de combinación para los estados de carga del proyecto.

En la primera línea se colocan los estados de carga separados por ",". A continuación van las filas de los coeficientes por los que se multiplica el estado de carga en la combinación respectiva.

Una vez definida la matriz se debe cargar indicando la ruta al archivo.

Por ejemplo <code>matriz.set</code>:

```txt
PP,     CM,    SC,     SX,     SY,    TAX,    TAY
1.2    1.2    1.6     0.0     0.0     0.0     0.0
1.4    1.4    0.0     0.0     0.0     0.0     0.0
1.2    1.2    1.0     1.4     0.0     1.4     0.0
1.2    1.2    1.0     1.4     0.0    -1.4     0.0
1.2    1.2    1.0    -1.4     0.0     1.4     0.0
1.2    1.2    1.0    -1.4     0.0    -1.4     0.0
1.2    1.2    1.0     0.0     1.4     0.0     1.4
1.2    1.2    1.0     0.0     1.4     0.0    -1.4
1.2    1.2    1.0     0.0    -1.4     0.0     1.4
1.2    1.2    1.0     0.0    -1.4     0.0    -1.4
0.9    0.9    0.0     1.4     0.0     1.4     0.0
0.9    0.9    0.0     1.4     0.0    -1.4     0.0
0.9    0.9    0.0    -1.4     0.0     1.4     0.0
0.9    0.9    0.0    -1.4     0.0    -1.4     0.0
0.9    0.9    0.0     0.0     1.4     0.0     1.4
0.9    0.9    0.0     0.0     1.4     0.0    -1.4
0.9    0.9    0.0     0.0    -1.4     0.0     1.4
0.9    0.9    0.0     0.0    -1.4     0.0    -1.4
```

!!! warning

    Se debe respetar el formato del archivo comletamente

!!! hint

    Puedes venir a hacer copy/paste a esta página para tener el formato correcto

## Modelo ETABS

Se debe ingresar la ruta a cada uno de los models ETABS desde lo que se extraerán los estados de carga respectivos

## Estados de carga

Finalmente se deben indicar los estados de carga que se extraerán de cada modelo. Deben ir separados por espacio y los nombres deben coincidir exactamente con los del modelo.

!!! hint

    Es necesario que estén ejecutados solo los estados de carga que se extraerán de los modelos
