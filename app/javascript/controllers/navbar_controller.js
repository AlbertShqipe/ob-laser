import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY;
      let opacity = Math.max(1 - (scrollY / 50), 0); // Smoothly fades out at 200px scroll

      navbar.style.opacity = opacity;
    });
  }
}
