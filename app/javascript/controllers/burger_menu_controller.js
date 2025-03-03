import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="burger-menu"
export default class extends Controller {
  connect() {
    const burgerMenu = this.element.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    const ul = document.querySelectorAll('.menu ul li');
    console.log(ul);
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      if (burgerMenu.classList.contains('active')) {
        menu.style = 'opacity: 1; z-index:10';
      } else {
        menu.style = 'display: none';
      }
    });

    ul.forEach((li) => {
      li.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        menu.style = 'display: none';
      });
    });
  }
}
