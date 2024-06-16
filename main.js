document.addEventListener('DOMContentLoaded', function () {
  let dropdownItems = document.querySelectorAll('.dropdown-item');
  let navbarToggler = document.querySelector('.navbar-toggler');

  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.stopPropagation(); // Impede que o evento se propague para fechar o dropdown
      if (!navbarToggler.classList.contains('collapsed')) {
        navbarToggler.click(); // Fecha o menu se estiver aberto
      }
    });
  });

  // Fechar o menu se clicar em qualquer lugar fora do dropdown
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
      if (!navbarToggler.classList.contains('collapsed')) {
        navbarToggler.click(); // Fecha o menu se estiver aberto
      }
    }
  });
});