# Input

## Archivo Geo

Se debe ingresar la ruta al archivo **geo** generado con [edbtopre](../edbtopre/introduccion.md).

## Archivo Pre

Se debe ingresar la ruta al archivo **pre** generado con [edbtopre](../edbtopre/introduccion.md).

## Fy

Tensión de fluencia del acero en ton/m².

Se asigna un valor por defecto de 42000 ton/m².

## Observaciones

- Tensión de compresión en secciones HA es proporcional a f'c
- No se incluyen las secciones metálicas en vh1
- Código para tipo de estribo en vh1:
    - **M**: malla simple
    - **D**: doble malla
    - **T**: triple malla
    - **C**: cuádruple malla
    - **Q**: quíntuple malla
    - **S**: séxtuple malla
    - **H**: séptuple malla
    - **O**: óctuple malla
