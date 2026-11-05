(function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var tiles = document.querySelectorAll('.recent-works-tile');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      buttons.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on);
      });
      tiles.forEach(function (t) {
        var tags = (t.dataset.tags || '').split(' ');
        t.hidden = !(f === 'all' || tags.indexOf(f) > -1);
      });
    });
  });
})();
