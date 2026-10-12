(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  function close() { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 10); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  document.getElementById('ano').textContent = new Date().getFullYear();

  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el, i) { el.style.transitionDelay = (i % 3) * 80 + 'ms'; io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }
})();
