// Mobile menu only. Loaded in <head>, so the "js" class is set before first paint
// (without JavaScript the nav simply stays open on phones).
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (!button || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('nav-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.textContent = open ? 'Close' : 'Menu';
  }

  button.addEventListener('click', function () {
    setOpen(!nav.classList.contains('nav-open'));
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
      setOpen(false);
      button.focus();
    }
  });
});
