# **Compresión**

Cuando la base de una columna resiste únicamente carga axial de compresión, el pedestal debe ser lo suficientemente grande para soportar las fuerzas transferidas desde la placa base, considerando el límite de carga del hormigón. Además, la placa base debe tener un espesor adecuado para cumplir con el límite de fluencia.

## **Estado de carga**

Para este estado de carga, la aplicación verificará tanto el aplastamiento del hormigón como el espesor de la placa base.

![compresion_axial_esfuerzos](../images/anclajes/compresion_axial_esfuerzos.png)

## **Verificación del aplastamiento del hormigón**

![aplastamiento_hormigon_verificacion](../images/anclajes/aplastamiento_hormigon_verificacion.png)

La tensión de soporte máxima del hormigón armado para el diseño de tensión admisible (ASD) está dada por:

![tension_soporte_maximo_asd_ha](../images/anclajes/tension_soporte_maximo_asd_ha.png)

La tensión en la placa base provocada por el estado de carga está dada por la carga axial dividida por el área de la placa:

![tension_en_placa](../images/anclajes/tension_en_placa.png)

## **Verificación del espesor de la placa base**

![verificacion_placa_compresion_axial](../images/anclajes/verificacion_placa_compresion_axial.png)

La presión de apoyo provoca la flexión de la placa base en secciones críticas, dependiendo del tipo de columna. (En la imagen superior se muestran las secciones y distancias críticas para una columna tipo W-Shapes). Para calcular el espesor mínimo requerido, se deben determinar estas distancias críticas.

![distancia_critica_m](../images/anclajes/distancia_critica_m.png)

donde:

N = largo de la placa

d = largo de la columna

![distancia_critica_n](../images/anclajes/distancia_critica_n.png)

donde:

B = ancho de la placa

bf = ancho de la columna

![distancia_critica_lambda_n_prima](../images/anclajes/distancia_critica_lambda_n_prima.png)

donde:

![lambda](../images/anclajes/lambda.png)

![x_para_lamba](../images/anclajes/x_para_lamba.png)

Finalmente el espesor mínimo se calcula con la siguiente fórmula:

![espesor_min_placa_compresion_axial](../images/anclajes/espesor_min_placa_compresion_axial.png)

donde:

_l_ es el valor máximo entre las distancias críticas m, n y λn'




