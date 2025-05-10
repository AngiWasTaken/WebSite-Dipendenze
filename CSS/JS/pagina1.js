document.querySelectorAll('.collapse').forEach(collapse => {
  const toggle = collapse.previousElementSibling.querySelector('.collapse-toggle');
  const icon = toggle.querySelector('.icon');

  collapse.addEventListener('show.bs.collapse', () => {
    collapse.closest('.card-custom').classList.add('active');
    icon.textContent = '▼';
  });

  collapse.addEventListener('hide.bs.collapse', () => {
    collapse.closest('.card-custom').classList.remove('active');
    icon.textContent = '➤';
  });
});
