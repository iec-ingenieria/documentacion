// Las guías de "Recursos de aprendizaje" se muestran en un iframe y avisan su alto con postMessage;
// el iframe toma ese alto para que la página tenga un solo scroll. Como la guía no tiene scroll propio,
// un enlace interno (a una figura, por ejemplo) avisa la posición de su destino y la página baja hasta ahí,
// mostrando un botón para volver al punto de lectura.
(() => {
  const suave = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  let volverA = null, boton = null;
  function botonVolver() {
    if (boton) return boton;
    boton = document.createElement('button');
    boton.type = 'button';
    boton.textContent = '↩ Volver a donde estaba';
    Object.assign(boton.style, {
      position: 'fixed', right: '20px', bottom: '20px', zIndex: '10', display: 'none', border: '0',
      borderRadius: '999px', padding: '11px 18px', background: '#17222C', color: '#fff', cursor: 'pointer',
      font: '500 14px/1.2 system-ui, sans-serif', boxShadow: '0 8px 24px rgba(23,34,44,.3)',
    });
    boton.addEventListener('click', () => {
      window.scrollTo({top: volverA, behavior: suave()});
      boton.style.display = 'none';
    });
    document.body.appendChild(boton);
    return boton;
  }
  // Con la navegación instantánea de Material el <body> se conserva entre páginas: el botón no debe seguir a otra.
  if (window.document$) window.document$.subscribe(() => { if (boton) boton.style.display = 'none'; });
  window.addEventListener('message', e => {
    const d = e.data || {};
    for (const f of document.querySelectorAll('iframe.guia')) {
      if (f.contentWindow !== e.source) continue;
      if (typeof d.altoGuia === 'number') f.style.height = Math.ceil(d.altoGuia) + 'px';
      if (typeof d.irGuia === 'number') {
        const b = botonVolver();
        if (b.style.display === 'none') volverA = window.scrollY;   // con saltos encadenados se vuelve al punto original
        b.style.display = 'block';
        const cabecera = (document.querySelector('.md-header')?.offsetHeight ?? 56) + 24;
        window.scrollTo({top: f.getBoundingClientRect().top + window.scrollY + d.irGuia - cabecera, behavior: suave()});
      }
    }
  });
})();
