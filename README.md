# documentacion

Vidriera pública de `iec-apps`, el monorepo (privado) de las herramientas de
revisión estructural de IEC. Este repo no contiene código ni la fuente de la
documentación: existe porque `iec-apps` es privado y tanto el sitio como los
releases tienen que ser públicos.

- **Sitio de documentación**: <https://iec-ingenieria.github.io/documentacion/>.
  Se sirve desde la rama `gh-pages`, que el CI de `iec-apps` reescribe solo en
  cada push a `main` que toque `docs/`. No editar esa rama a mano.
- **Releases**: <https://github.com/iec-ingenieria/documentacion/releases>.
  Cada versión lleva el wheel `iec_apps-X.Y.Z-py3-none-any.whl` y un
  `manifest.json` que las apps instaladas consultan al arrancar para
  actualizarse solas. Cómo instalar: página *Instalación* del sitio.

La fuente de la documentación vive en `iec-apps/docs/` (con su `mkdocs.yml`).
Esta rama `main` solo contiene este README; la documentación previa a la
consolidación en `iec-apps` (hasta mayo de 2026) sigue disponible en la
historia de git.
