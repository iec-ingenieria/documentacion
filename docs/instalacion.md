<h1>Instalación</h1>

<p style="text-align: justify;">
  Sigue estos pasos para instalar y configurar correctamente cualquier software IEC. La instalación se divide en dos partes principales: la instalación de Python y la instalación de nuestro software mediante un archivo <code>.whl</code>.
</p>

!!! hint

    Si ya tienes la versión de python requerida instalada puedes pasar directo al paso 2

<h2>Paso 1: Instalación de Python</h2>

<p style="text-align: justify;">
  Es fundamental comenzar con una instalación limpia de Python. Asegúrate de instalar la versión específica que nuestro software requiere para funcionar correctamente.
</p>

!!! warning

    Si tienes una versión distinta de python en tu computador de IEC deberás desinstalarla antes de instalar la versión indicada.
    Se recomienda luego de desinstalar hacer una limpieza de las variables de entorno relacionadas con la versión de python recién desinstalada

<ol style="text-align: justify;">
  <li>
    Descarga la versión <strong>3.11.8</strong> de Python desde el siguiente enlace:
    <a href="https://www.python.org/ftp/python/3.11.8/python-3.11.8-amd64.exe">Descargar Python 3.11.8</a> 👈
  </li>
  <li>
    Ejecuta el archivo descargado y sigue las instrucciones del instalador. Asegúrate de marcar la opción <strong>"Add Python 3.11 to PATH"</strong> durante la instalación para facilitar la ejecución de comandos de Python desde cualquier terminal.
  </li>
</ol>

<h2>Paso 2: Instalación del Software</h2>

<p style="text-align: justify;">
  Una vez instalado Python, el siguiente paso es instalar nuestro software utilizando el instalador de paquetes de Python (pip).
</p>

<ol style="text-align: justify;">
  <li>
    Descarga la última versión del instalador de nuestro software desde aquí: <a href="https://github.com/iec-ingenieria/dxftoedb/tree/main/dist" target="_blank">Descargar Instalador</a> 👈 (archivo con extensión <code>.whl</code>)
  </li>
  <li>
    Dentro de la carpeta <code>dist</code>, busca el archivo que tenga el número de versión más reciente y termine con la extensión <code>.whl</code>. Por ejemplo, <code>dxftoedb-1.0.0.post0-py3-none-any.whl</code>.
  </li>
  <li>
    Haz clic sobre el nombre del archivo. En la siguiente página, busca y haz clic en el botón <strong>"Download"</strong> o <strong>"Descargar archivo sin procesar"</strong> para descargar el archivo directamente a tu dispositivo.
  </li>
  <li>
    Abre una terminal o línea de comandos.
  </li>
  <li>
    Navega hasta la ubicación del archivo descargado. Puedes hacerlo utilizando el comando <code>cd</code> seguido de la ruta del directorio donde se encuentra el archivo. Por ejemplo:
    <pre style="background-color: #f5f5f5; padding: 10px;"><code>cd Downloads</code></pre>
  </li>
  <li>
    Una vez en el directorio correcto, instala el software ejecutando el siguiente comando en la terminal:
    <pre style="background-color: #f5f5f5; padding: 10px;"><code>python -m pip install nombre_del_archivo.whl</code></pre>
    Reemplaza <code>nombre_del_archivo.whl</code> con el nombre real del archivo que descargaste.
  </li>
</ol>

<p style="text-align: justify;">
  Sigue las instrucciones en pantalla para completar la instalación. Una vez finalizado, habrás instalado correctamente el software y estarás listo para comenzar a usarlo.
</p>

<h2>Reinstalación de Nuevas Versiones</h2>

<p style="text-align: justify;">
  Para garantizar que estás utilizando la versión más reciente y con mejoras de nuestro software, te recomendamos actualizar regularmente a la última versión disponible. Sigue estos pasos para desinstalar la versión anterior y realizar una instalación limpia de la nueva versión.
</p>

<h3>Desinstalación de la Versión Anterior</h3>

<p style="text-align: justify;">
  Antes de instalar una nueva versión, es importante desinstalar cualquier versión anterior del software para evitar conflictos. Aquí te mostramos cómo hacerlo de manera segura.
</p>

<ol style="text-align: justify;">
  <li>Asegúrate de cerrar el software y cualquier proceso relacionado que pueda estar en ejecución.</li>
  <li>Abre una terminal o línea de comandos.</li>
  <li>Ejecuta el siguiente comando para listar todas las instalaciones de Python y localizar el software que deseas desinstalar:
    <pre style="background-color: #f5f5f5; padding: 10px;"><code>python -m pip list</code></pre>
  </li>
  <li>Una vez que hayas identificado el nombre del software en la lista, utiliza el siguiente comando para desinstalarlo:
    <pre style="background-color: #f5f5f5; padding: 10px;"><code>python -m pip uninstall nombre_del_software</code></pre>
    Reemplaza <code>nombre_del_software</code> con el nombre exacto del software como aparece en la lista.
  </li>
  <li>Sigue las instrucciones en pantalla para completar la desinstalación.</li>
</ol>

<p style="text-align: justify;">
  Con la versión anterior desinstalada, ahora puedes proceder a instalar la nueva versión del software siguiendo los pasos descritos en la sección <strong>"Paso 2: Instalación del Software"</strong> de este documento.
</p>

<p style="text-align: justify;">
  Si experimentas cualquier inconveniente durante la desinstalación o instalación, por favor consulta la sección de soporte o contacta directamente a nuestro equipo de soporte técnico.
</p>
