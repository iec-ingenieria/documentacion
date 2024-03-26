# Output

El output será el archivo <code>[nombre del proyecto]_vh.xlsx</code>

## Archivo Excel

El archivo excel de salida estará compuesto por las siguientes pestañas:

1. **INFO**

    Pestaña con resúmen informativo de lo que hay en las otras pestañas. Se incluye una tabla como esta:

    ```txt
      PESTAÑA       DESCRIPCION        FI   CORTE AXIAL
      -------------------------------------------------
        PRE     Esfuerzos combinados   NA    NA    NA
        VH0     Reporte de tensiones   NA    NA    NA
        VH1       Armadura de corte   0.60   V2    ✔
        VH2       Armadura de corte   0.75   V2    ✔
        VH3       Armadura de corte   0.60   V3    ✔
        VH4       Armadura de corte   0.75   V3    ✔
        VH5       Armadura de corte   0.60   V2    ✘
        VH6       Armadura de corte   0.75   V2    ✘
    ```

2. **PRE**

    Pestaña con los esfuerzos combinados

3. **VH1**

    Pestaña para revisión de armadura de corte en el plano del elemento estructural con Φ=0.6

4. **VH2**

    Pestaña para revisión de armadura de corte en el plano del elemento estructural con Φ=0.75

5. **VH3**

    Pestaña para revisión de armadura de corte fuera del plano del elemento estructural con Φ=0.60

6. **VH4**

    Pestaña para revisión de armadura de corte fuera del plano del elemento estructural con Φ=0.75

7. **VH5**

    Pestaña para revisión de armadura de corte en el plano del elemento estructural con Φ=0.6 pero sin considerar esfuerzo axial

8. **VH6**

    Pestaña para revisión de armadura de corte en el plano del elemento estructural con Φ=0.75 pero sin considerar esfuerzo axial
