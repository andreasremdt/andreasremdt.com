(function() {
  "use strict";

  var menu = document.querySelector('[data-element="menu"]');

  function toggleMenu() {
    menu.classList.toggle("-open");
  }
  
  document.querySelector('[data-element="menu-toggle"]').addEventListener("click", toggleMenu);
})();