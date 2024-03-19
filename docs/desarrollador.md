# Orden del proceso dxftoedb

## dxftoedb1

1 Solicita ingresa por ventana la carpeta de trabajo, en esa carpeta debe estar el archivo
project_settings.toml y las plantas en formato dxf que están indicada al interior del toml
en la llave ["Stories"]["Data"] del diccionario.

2 Rescata el path de esas plantas y les aplica un cambio a los nombres de capas según lo indicado en
project_settings.toml ["entidades"], con la funcion 'cambio_capa'.

'cambio_capa':

- crear_layers_iec
- configurar_lineas
- configurar_textos
- configurar_lwpolyline
- apagar_layers_innecesarios

y retorna las plantas con esas modificaciones

3 Rescata desde las nuevas plantas las coordenadas y nombres de ejes de todo el proyecto, y los escribe
en un excel para revisar las advertencias de nombre repetidos o de textos de nombres lejanos del fin de
la linea de eje, con la funcion 'ejes'

'ejes':

- captura_entidades
- reune_los_segmentos_de_un_eje
- asigna_los_rotulos_a_los_segmentos
- asigna_direccion_eje
- grilla_en_excel

guarda las plantas modificadas que han sido leidas en formato \*\_grilla.dxf

## dxftoedb2

1. Desde el directorio ya seleccionado en dxftoedb1 abre el archivo project_settings.toml para su lectura

2. abre las plantas \*\_grilla.dxf para modificarlo y el archivo excel que contiene la informacion de los ejes
   a dibujar, las guarda en \_ejes_corr.dxf" **_(ESTO ES ADICIONAL Y NO ESTA PRESENTE EN LA RAMA DESARROLLO)_**,
   con la funcion 'generar_plantas_con_ejes_corregidos'

'generar_plantas_con_ejes_corregidos':

- dibuja_ejes

3. lee load_patterns desde la llave presente en project_settings.toml.

4. Dibuja la planta que tiene todas las entidades de muros y vigas con su espesor, y las guarda en formato \_dxftoedb.dxf.
   Estas plantas pueden ser modificadas para optimizar el rescate de informacion, ya sea incorporando nuevas y/o corregiendo
   las ya rescatadas y visualizadas en plantas, esto se realiza con la funcion 'estructura'.

'estructura':

- rescatar_entidades: Crea lista de entidades de lineas de ejes, muros y vigas,
  y de textos de nombres de ejes y vigas.
- rescatar_info_texto: Crea lista de diccionario con todos los textos de vigas con su nombre y posicion.
- rescatar_coordenadas: rescata las coordenadas de las entidades de ejes, vigas y muros
- interseccion_de_ejes: Crea lista con todas las intersecciones de las lineas de ejes

Luego para cada eje de la lista coordenadas_ejes.

- box_contenedor_de_entidades: crea un box para buscar entidades que contenga ese eje.

Todo esto para vigas y muros.

- encontrar_entidades_en_caja
- encontrar_entidades_eje
- entidades_a_lista
- aplanar_entidades
- fusionar_segmentos
- ajuste_por_eje
- quita_lineas_cortas

- pone_espesor_muros
- pone_rotulo_vigas
- configurar_plano_nuevo

- dibujar_plano_base
- dibujar_tabla_cargas
- dibujo_muros_sin_espesor
- dibujo_muros_estructurales
- dibujo_vigas_estructurales
- guardar_planta

## dxftoedb3

Lee el dibujo dxf formato \_dxftoedb.dxf y crea un diccionario JSON con la información de todo elemento estructural
considerado en el proyecto

'dxftojson'

- calcular_cotas
- rescatar_secciones_losas
- rescatar_losas
- rescatar_muros_y_vigas
- ejes_desde_excel
- ponez: para vigas y muros
- categoriza_vigas: si es frame o shell
- espesores_de_muros
- remover_secciones_duplicadas: para las losas
- grilla_api
- definicion_secciones: escribe en JSON las secciones tipo frame y wall (shell)
- vigas_json
- muros_json2: escribe elementos tipo shell que previamente eran vigas frame
- muros_json2

## dxftoedb4

Realiza el ingreso de las secciones y elementos escritos en diccionario JSON en el modelo ETABS.

- etabs_connection
- draw

## Tolerancias

- ajuste_por_eje:
  tol_de_ajuste: float = 31.0
  Esta tolerancia es para dar una distancia máxima para mover puntos de lineas hacia una interseccion de eje.
