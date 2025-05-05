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
    Descarga la última versión del instalador de nuestro software desde aquí: <a href="https://drive.google.com/drive/folders/11jUxoF3O19u1abogZqwjrhSJzv9Ax_AS?usp=sharing" target="_blank">Descargar Instalador</a> 👈 (archivo con extensión <code>.whl</code>)
  </li>
  <li>
    Dentro de la carpeta <code>apps</code>, busca el archivo que tenga el número de versión más reciente y termine con la extensión <code>.whl</code>. Por ejemplo, <code>dxftoedb-1.0.0.post0-py3-none-any.whl</code>.
  </li>
  <li>
    Descarga el archivo
  </li>
  <li>
    Si no tienes acceso a la carpeta solicitalo al administrador con tu cuenta @iec.cl
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

