(() => {
  const toggle = document.querySelector('.drawer-toggle');
  const drawer = document.querySelector('#site-drawer');
  const shade = document.querySelector('.drawer-shade');
  const close = document.querySelector('.drawer-close');
  let savedOverflow = '';
  const setOpen = open => {
    if (open === !drawer.hidden) return;
    drawer.hidden = shade.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '关闭文章导航' : '展开文章导航');
    if (open) { savedOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; close.focus(); }
    else { document.body.style.overflow = savedOverflow; toggle.focus(); }
  };
  toggle.addEventListener('click', () => setOpen(drawer.hidden));
  close.addEventListener('click', () => setOpen(false));
  shade.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', e => {
    if (drawer.hidden) return;
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'Tab') {
      const items = [...drawer.querySelectorAll('button,a[href]')];
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  const current = location.pathname.split('/').pop() || 'index.html';
  drawer.querySelectorAll('a').forEach(a => { if (a.getAttribute('href') === current) a.setAttribute('aria-current', 'page'); });
})();
