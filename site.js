(function () {
  // scroll reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }
  // mobile sticky CTA
  var bar = document.createElement('div');
  bar.className = 'mobile-cta';
  bar.innerHTML = '<span>Free sample issue</span><a class="btn btn-sm" href="#signup">Get it</a>';
  document.body.appendChild(bar);
  var last = false;
  addEventListener('scroll', function () {
    var hero = document.getElementById('signup');
    if (!hero) return;
    var past = scrollY > hero.getBoundingClientRect().height + 400;
    var atForm = hero.getBoundingClientRect().bottom > 0 && hero.getBoundingClientRect().top < innerHeight;
    var show = past && !atForm;
    if (show !== last) { bar.classList.toggle('show', show); last = show; }
  }, { passive: true });
})();
