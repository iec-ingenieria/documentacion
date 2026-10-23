// Las guías de "Recursos de aprendizaje" se muestran en un iframe y avisan su alto con postMessage;
// el iframe toma ese alto para que la página tenga un solo scroll.
window.addEventListener('message', e => {
  const alto = e.data && e.data.altoGuia;
  if (typeof alto !== 'number') return;
  for (const f of document.querySelectorAll('iframe.guia')) {
    if (f.contentWindow === e.source) f.style.height = Math.ceil(alto) + 'px';
  }
});
