# ¿Como ejecutar dxftoedb?

```bash
python dxftoedb1.py
python dxftoedb2.py
python dxftoedb3.py
python dxftoedb4.py
```

## dxftoedb1

### Input

- Planos originales.
- Archivo de configuración.

### Descripción

- Detectar los layers y entidades indicados en la configuración y transformarlos a un formato pre definido.
- Agrupa los ejes según su orientación.

### Output

- Archivo excel con las coordenadas de los ejes.
- Dirctorio y archivos '/planos_dxftoedb/\*\_grilla.dxf' con planos dxf con los ejes capturados.

## dxftoedb2

### Input

- Archivo de configuración.
- Planos '/planos_dxftoedb/\*\_grilla.dxf'.
- Archivo excel con las coordenadas de los ejes revisadas y/o modificadas.

### Descripción

- Hace el rescate de las entidades que representan ejes, muros y vigas.
- Genera el dibujo preliminar con los elementos estrucurales que serán tranferidos al modelo ETABS.

### Output

- Archivos '/planos_dxftoedb/\*\_dxftoedb.dxf' con planos que incluyen los elementos estructurales en el formato requerido para su posterior exportación a ETABS.

## dxftoedb3

### Input

- Archivo de configuración.
- Planos '/planos_dxftoedb/\*\_dxftoedb.dxf' revisados y/o modificados.

### Descripción

- Construcción de archivo previo a la exportación a ETABS.

### Output

- Archivo \*.json

## dxftoedb4

### Input

- Archivo de configuración.
- Archivo \*.json

### Descripción

- Generar modelo ETABS.

### Output

- Archivo \*.edb
