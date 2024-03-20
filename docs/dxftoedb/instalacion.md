<h1>Instalación</h1>

<p style="text-align: justify;">
  Sigue estos pasos para instalar y configurar correctamente el software. La instalación se divide en dos partes principales: la instalación de Python y la instalación de nuestro software mediante un archivo <code>.whl</code>.
</p>

<h2>Paso 1: Instalación de Python</h2>

<p style="text-align: justify;">
  Es fundamental comenzar con una instalación limpia de Python. Asegúrate de instalar la versión específica que nuestro software requiere para funcionar correctamente.
</p>

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

<div style="text-align: center;">
  <a href="../prepinchado/" style="display: inline-block; background-color: #EF7701; color: white; padding: 5px 10px; text-decoration: none; border-radius: 5px;">Siguiente: Prepinchado</a>
</div>
