// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--paper)';
      links.style.padding = '18px 28px';
      links.style.borderBottom = '1px solid var(--line)';
      links.style.gap = '16px';
    });
  }

  // Directory filter (directory.html)
  const dirSearch = document.getElementById('dirSearch');
  const dirCards = document.querySelectorAll('.biz-card');
  const filterPills = document.querySelectorAll('.filter-pill');
  let activeCat = 'all';

  function applyFilter() {
    const q = (dirSearch ? dirSearch.value : '').toLowerCase().trim();
    dirCards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      const cat = card.dataset.cat;
      const matchesQ = !q || name.includes(q) || cat.toLowerCase().includes(q);
      const matchesCat = activeCat === 'all' || cat === activeCat;
      card.style.display = (matchesQ && matchesCat) ? '' : 'none';
    });
  }
  if (dirSearch) dirSearch.addEventListener('input', applyFilter);
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCat = pill.dataset.cat;
      applyFilter();
    });
  });

  // Events calendar month toggle (events.html)
  const monthTabs = document.querySelectorAll('.month-tab');
  const monthPanels = document.querySelectorAll('.month-panel');
  monthTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      monthTabs.forEach(t => t.classList.remove('active'));
      monthPanels.forEach(p => p.style.display = 'none');
      tab.classList.add('active');
      const panel = document.getElementById(tab.dataset.month);
      if (panel) panel.style.display = 'grid';
    });
  });
});
