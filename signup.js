(function () {
  var f = document.getElementById('signup');
  if (!f) return;
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var em = f.querySelector('input[name=email]').value;
    fetch(f.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: em, src: f.querySelector('input[name=src]').value })
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d.ok) {
          f.innerHTML = '<p style="color:hsl(258 80% 45%);font-weight:600;margin:0">You are on the list. Your first digest arrives Tuesday morning.</p>';
        } else { throw new Error('bad'); }
      })
      .catch(function () {
        window.location.href = 'mailto:hello@grantbrief.org?subject=Start%20my%20free%20digest&body=' + encodeURIComponent(em);
      });
  });
})();
