(function () {
  // Bộ lọc SVG làm mép mực con dấu hơi loang, không quá sắc nét
  var defs = document.createElement('div');
  defs.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  defs.innerHTML =
    '<svg><filter id="ink"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3"/>' +
    '<feDisplacementMap in="SourceGraphic" scale="2.2"/></filter></svg>';
  document.body.appendChild(defs);

  function rng(seed) {
    var s = 0;
    for (var i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
    return function () {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  // Con dấu tròn: data-top (chữ chạy vòng), data-center (các dòng, ngăn bằng |), data-size
  var uid = 0;
  document.querySelectorAll('.stamp').forEach(function (el) {
    var id = 'sp' + (uid++);
    var size = +(el.dataset.size || 176);
    var color = el.dataset.color || '#c8102e';
    var top = el.dataset.top || '';
    var lines = (el.dataset.center || '').split('|');
    var rot = el.dataset.rot || (rng(top)() * 24 - 12).toFixed(1);
    var fs = top.length > 34 ? 13.5 : 15.5;
    var center = lines.map(function (t, i) {
      var y = 100 + (i - (lines.length - 1) / 2) * 17 + 5;
      var w = (lines.length > 1 && i === 0) || lines.length === 1 ? 700 : 700;
      var f = t.length > 14 ? 9.5 : t.length > 10 ? 12 : 14.5;
      return '<text x="100" y="' + y + '" text-anchor="middle" font-size="' + f + '" font-weight="' + w + '">' + t + '</text>';
    }).join('');
    el.innerHTML =
      '<svg width="' + size + '" height="' + size + '" viewBox="0 0 200 200" style="transform:rotate(' + rot + 'deg)">' +
      '<defs><path id="' + id + '" d="M100,174 a74,74 0 1,1 0,-148 a74,74 0 1,1 0,148"/></defs>' +
      '<g fill="none" stroke="' + color + '"><circle cx="100" cy="100" r="95" stroke-width="5"/>' +
      '<circle cx="100" cy="100" r="88" stroke-width="1.4"/><circle cx="100" cy="100" r="56" stroke-width="1.6"/></g>' +
      '<g fill="' + color + '" font-family="Arial, Helvetica, sans-serif">' +
      '<text font-size="' + fs + '" font-weight="700"><textPath href="#' + id + '" startOffset="50%" text-anchor="middle" textLength="395" lengthAdjust="spacing">' + top + '</textPath></text>' +
      '<text x="100" y="166" text-anchor="middle" font-size="12">★</text>' +
      center + '</g></svg>';
  });

  // Chữ ký tay mực xanh, sinh từ tên để mỗi người một kiểu nhưng ổn định giữa các lần tải
  document.querySelectorAll('.sig').forEach(function (el) {
    var r = rng(el.dataset.seed || 'x');
    var w = 160, h = 76;
    var paths = [
      'M10,50 C8,20 40,8 44,30 C47,48 22,58 18,44 C14,30 40,26 52,40 C58,47 60,30 66,32 C72,34 68,48 76,44 C84,40 86,26 92,30 C98,34 94,48 102,46 C112,43 118,30 128,34 C138,38 120,58 96,60 C70,62 40,58 22,62',
      'M16,56 C20,30 26,10 34,12 C42,14 30,44 28,54 C36,36 48,24 54,34 C58,42 50,52 58,48 C66,44 70,30 78,34 L80,46 C86,34 94,30 98,38 C102,46 108,40 116,32 C124,24 140,26 146,22 M24,64 C60,58 100,60 150,52',
      'M12,40 C24,38 30,14 40,16 C50,18 40,52 36,58 C34,62 44,40 58,36 C68,33 62,50 70,48 C80,45 82,34 90,36 C96,38 92,50 100,48 C110,44 112,30 122,30 C130,30 128,46 138,42 C146,38 150,30 154,28 M30,60 Q90,48 150,56'
    ];
    var d = paths[Math.floor(r() * paths.length)];
    var rot = (r() * 10 - 6).toFixed(1), sx = (0.9 + r() * 0.2).toFixed(2);
    el.innerHTML = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" style="overflow:visible;transform:rotate(' + rot + 'deg) scaleX(' + sx + ')">' +
      '<path d="' + d + '" fill="none" stroke="#1d3c8f" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".88"/></svg>';
  });

  // Watermark "BẢN MẪU" trên mọi trang
  var wmText = 'BẢN MẪU · BÀI TẬP MÔN QUẢN TRỊ DỰ ÁN CNTT';
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="460" height="300">' +
    '<text x="230" y="160" transform="rotate(-28 230 150)" text-anchor="middle" font-family="Arial" font-size="17" font-weight="700" fill="rgba(170,40,30,0.085)">' +
    wmText + '</text></svg>';
  var url = 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) + '")';
  document.querySelectorAll('.page').forEach(function (p) {
    var d = document.createElement('div');
    d.className = 'wm';
    d.style.setProperty('--wm', url);
    p.appendChild(d);
  });

  var count = document.querySelector('.count');
  if (count) count.textContent = document.querySelectorAll('.page').length + ' trang';

  var btn = document.querySelector('[data-print]');
  if (btn) btn.addEventListener('click', function () { window.print(); });

  // Thu nhỏ trang A4 cho vừa màn hình hẹp
  function fit() {
    var box = document.querySelector('.pages');
    if (!box) return;
    document.querySelectorAll('.page').forEach(function (p) {
      p.style.zoom = 1;
      var z = Math.min(1, (box.clientWidth - 24) / p.offsetWidth);
      p.style.zoom = z;
    });
  }
  window.addEventListener('resize', fit);
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('.page').forEach(function (p) { p.style.zoom = 1; });
  });
  window.addEventListener('afterprint', fit);
  fit();
})();
