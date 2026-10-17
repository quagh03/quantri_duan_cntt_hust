(function () {
  var storageKey = document.body.dataset.storageKey || '';
  var form = document.getElementById('pmo-form');

  function fieldsRoot() {
    // include toolbar selects/checkboxes (gate / peer mode / stakeholder group)
    return document.body;
  }

  function collect(root) {
    var data = {};
    if (!root) return data;
    root.querySelectorAll('input[name], textarea[name], select[name]').forEach(function (el) {
      var key = el.name;
      if (!key) return;
      if (el.type === 'checkbox' || el.type === 'radio') {
        if (el.type === 'radio') {
          if (el.checked) data[key] = el.value;
        } else {
          data[key] = el.checked;
        }
      } else {
        data[key] = el.value;
      }
    });
    return data;
  }

  function restore(root, data) {
    if (!root || !data) return;
    root.querySelectorAll('input[name], textarea[name], select[name]').forEach(function (el) {
      var key = el.name;
      if (!key || !(key in data)) return;
      if (el.type === 'checkbox') {
        el.checked = !!data[key];
      } else if (el.type === 'radio') {
        el.checked = data[key] === el.value;
      } else {
        el.value = data[key];
      }
    });
  }

  function save() {
    if (!storageKey) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(collect(fieldsRoot())));
    } catch (e) { /* ignore quota */ }
  }

  function load() {
    if (!storageKey) return;
    try {
      var raw = localStorage.getItem(storageKey);
      if (raw) restore(fieldsRoot(), JSON.parse(raw));
    } catch (e) { /* ignore */ }
  }

  function snapshotExampleDefaults() {
    var map = {};
    document.querySelectorAll('[data-ll-example="1"] input, [data-ll-example="1"] textarea, [data-ll-example="1"] select').forEach(function (el) {
      if (!el.name) return;
      if (el.type === 'checkbox' || el.type === 'radio') map[el.name] = el.checked;
      else map[el.name] = el.value;
    });
    return map;
  }

  var exampleDefaults = snapshotExampleDefaults();

  function restoreExampleDefaults() {
    Object.keys(exampleDefaults).forEach(function (key) {
      document.querySelectorAll('[name="' + key + '"]').forEach(function (el) {
        if (el.type === 'checkbox' || el.type === 'radio') el.checked = !!exampleDefaults[key];
        else el.value = exampleDefaults[key];
      });
    });
  }

  function clearSaved() {
    if (storageKey) {
      try { localStorage.removeItem(storageKey); } catch (e) {}
    }
    if (form) form.reset();
    var printOnlyEl = document.getElementById('print-only-gate');
    if (printOnlyEl) printOnlyEl.checked = true;
    var printOnlyLl = document.getElementById('print-only-ll');
    if (printOnlyLl) printOnlyLl.checked = true;
    var gateSel = document.getElementById('gate-select');
    if (gateSel) gateSel.value = 'gate-g0g1';
    var peerSel = document.getElementById('peer-mode');
    if (peerSel) peerSel.value = 'pulse';
    var groupSel = document.getElementById('stakeholder-group');
    if (groupSel) groupSel.value = 'A';
    var llTabSel = document.getElementById('ll-tab');
    if (llTabSel) llTabSel.value = 'onepager';
    restoreExampleDefaults();
    if (typeof window.__pmoAfterReset === 'function') window.__pmoAfterReset();
  }

  var printBtn = document.querySelector('[data-print]');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  var clearBtn = document.querySelector('[data-clear]');
  if (clearBtn) clearBtn.addEventListener('click', function () {
    if (confirm('Xóa toàn bộ dữ liệu đã điền trên trang này?')) clearSaved();
  });

  load();
  if (form) {
    form.addEventListener('change', save);
    form.addEventListener('input', save);
  }
  document.querySelector('.bar') && document.querySelector('.bar').addEventListener('change', save);

  /* ---- Gate selector (E.1) ---- */
  var gateSelect = document.getElementById('gate-select');
  var printOnly = document.getElementById('print-only-gate');

  function showGate(id, scroll) {
    document.querySelectorAll('.gate-panel').forEach(function (p) {
      p.classList.toggle('active', p.id === id);
    });
    document.querySelectorAll('.side a[data-gate]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-gate') === id);
    });
    if (gateSelect) gateSelect.value = id;
    if (scroll !== false) {
      var target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    syncPrintMode();
  }

  function syncPrintMode() {
    if (!printOnly) {
      document.body.classList.add('print-all-gates');
      document.body.classList.remove('print-one-gate');
      return;
    }
    if (printOnly.checked) {
      document.body.classList.add('print-one-gate');
      document.body.classList.remove('print-all-gates');
    } else {
      document.body.classList.add('print-all-gates');
      document.body.classList.remove('print-one-gate');
    }
  }

  if (gateSelect) {
    gateSelect.addEventListener('change', function () { showGate(gateSelect.value); save(); });
    document.querySelectorAll('.side a[data-gate]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        showGate(a.getAttribute('data-gate'));
        save();
      });
    });
    showGate(gateSelect.value || 'gate-g0g1', false);
  }
  if (printOnly) {
    printOnly.addEventListener('change', function () { syncPrintMode(); save(); });
    syncPrintMode();
  }

  /* ---- Peer mode toggle (E.2) ---- */
  var peerMode = document.getElementById('peer-mode');
  function showPeerMode() {
    var mode = peerMode ? peerMode.value : 'pulse';
    document.querySelectorAll('.mode-panel').forEach(function (p) {
      p.classList.toggle('active', p.dataset.mode === mode);
    });
  }
  if (peerMode) {
    peerMode.addEventListener('change', function () { showPeerMode(); save(); });
    showPeerMode();
    window.__pmoAfterReset = function () { showPeerMode(); };
  }

  /* ---- Stakeholder group (E.3) ---- */
  var groupSelect = document.getElementById('stakeholder-group');
  function showGroup() {
    var g = groupSelect ? groupSelect.value : 'A';
    document.querySelectorAll('.group-panel').forEach(function (p) {
      p.classList.toggle('active', p.dataset.group === g);
    });
  }
  if (groupSelect) {
    groupSelect.addEventListener('change', function () { showGroup(); save(); });
    showGroup();
    window.__pmoAfterReset = function () { showGroup(); };
  }

  if (gateSelect) {
    window.__pmoAfterReset = function () {
      showGate(gateSelect.value || 'gate-g0g1', false);
      syncPrintMode();
    };
  }

  /* ---- Lessons tabs (E.5) ---- */
  var llTab = document.getElementById('ll-tab');
  var printOnlyLl = document.getElementById('print-only-ll');
  var logRowSeq = 100;

  function showLlTab(id, scroll) {
    var tab = id || (llTab ? llTab.value : 'onepager');
    document.querySelectorAll('.ll-panel').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-ll') === tab);
    });
    document.querySelectorAll('.side a[data-ll-tab]').forEach(function (a) {
      var on = a.getAttribute('data-ll-tab') === tab;
      a.classList.toggle('active', on);
      a.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    if (llTab) llTab.value = tab;
    syncLlPrint();
    if (scroll !== false) {
      var target = document.querySelector('.ll-panel.active');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function syncLlPrint() {
    if (!printOnlyLl) {
      document.body.classList.add('print-all-ll');
      document.body.classList.remove('print-one-ll');
      return;
    }
    if (printOnlyLl.checked) {
      document.body.classList.add('print-one-ll');
      document.body.classList.remove('print-all-ll');
    } else {
      document.body.classList.add('print-all-ll');
      document.body.classList.remove('print-one-ll');
    }
  }

  if (llTab) {
    llTab.addEventListener('change', function () { showLlTab(llTab.value); save(); });
    document.querySelectorAll('.side a[data-ll-tab]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        showLlTab(a.getAttribute('data-ll-tab'));
        save();
      });
    });
    showLlTab(llTab.value || 'onepager', false);
    window.__pmoAfterReset = function () {
      showLlTab(llTab.value || 'onepager', false);
      syncLlPrint();
    };
  }
  if (printOnlyLl) {
    printOnlyLl.addEventListener('change', function () { syncLlPrint(); save(); });
    syncLlPrint();
  }

  var addRowBtn = document.getElementById('ll-add-row');
  if (addRowBtn) {
    addRowBtn.addEventListener('click', function () {
      var body = document.getElementById('ll-log-body');
      var proto = body && body.querySelector('tr[data-ll-blank="1"]');
      if (!proto) return;
      var clone = proto.cloneNode(true);
      logRowSeq += 1;
      var prefix = 'logx' + logRowSeq;
      clone.querySelectorAll('input, textarea, select').forEach(function (el) {
        if (!el.name) return;
        var suffix = el.name.replace(/^log\d+_/, '');
        el.name = prefix + '_' + suffix;
        if (el.type === 'checkbox' || el.type === 'radio') el.checked = false;
        else el.value = '';
      });
      body.appendChild(clone);
      save();
    });
  }

  var addCardBtn = document.getElementById('ll-add-card');
  if (addCardBtn) {
    addCardBtn.addEventListener('click', function () {
      var box = document.getElementById('ll-cards');
      var cards = box && box.querySelectorAll('.ll-card');
      if (!cards || !cards.length) return;
      var n = cards.length + 1;
      var clone = cards[cards.length - 1].cloneNode(true);
      var oldPrefix = 'll' + String(cards.length).padStart(2, '0');
      var newPrefix = 'll' + String(n).padStart(2, '0');
      clone.querySelector('h3').textContent = 'LL-' + String(n).padStart(2, '0') + ' · Significant Lesson';
      clone.querySelectorAll('input, textarea, select').forEach(function (el) {
        if (el.name) el.name = el.name.replace(oldPrefix, newPrefix);
        if (el.id) el.id = el.id.replace(oldPrefix, newPrefix);
        if (el.type === 'checkbox' || el.type === 'radio') el.checked = false;
        else el.value = '';
      });
      var lab = clone.querySelector('label[for]');
      if (lab) lab.setAttribute('for', newPrefix + '_title');
      box.appendChild(clone);
      save();
    });
  }

  /* Fit sheet width on narrow screens */
  function fit() {
    var box = document.querySelector('.pages');
    if (!box) return;
    document.querySelectorAll('.pmo-sheet').forEach(function (p) {
      p.style.zoom = 1;
      var z = Math.min(1, (box.clientWidth - 24) / p.offsetWidth);
      p.style.zoom = z;
    });
  }
  window.addEventListener('resize', fit);
  function labelLogColumns() {
    var headers = [
      'ID', 'Ngày', 'Nguồn', 'Went well / Improve', 'Category', 'Keywords',
      'Ngữ cảnh', 'Tác động', 'Root cause', 'Early warning', 'Prior risk',
      'Lesson', 'Recommendation', 'Action', 'Owner', 'Due', 'Status', 'OPA',
      'Evidence', 'Conf.'
    ];
    document.querySelectorAll('#ll-log-table tbody tr').forEach(function (tr) {
      tr.querySelectorAll('td').forEach(function (td, i) {
        if (headers[i]) td.setAttribute('data-col', headers[i]);
      });
    });
  }
  labelLogColumns();

  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('.pmo-sheet').forEach(function (p) { p.style.zoom = 1; });
    labelLogColumns();
  });
  window.addEventListener('afterprint', fit);
  fit();
})();
