import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="back-to-top"
export default class extends Controller {
  connect() {
    this.backToTop = this.element.querySelector(".back-to-top");

    if (this.backToTop) {
      window.addEventListener("scroll", this.updateOpacity.bind(this));

      this.backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  updateOpacity() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable area
    const currentScroll = window.scrollY;

    const minScrollThreshold = 380; // Scroll position where the button starts appearing
    const maxScrollThreshold = 600; // Scroll position where the button is fully visible

    if (currentScroll < minScrollThreshold) {
      this.backToTop.style.opacity = 0;
      this.backToTop.style.pointerEvents = "none";
    } else {
      // Calculate opacity based on scroll position (smooth fade-in effect)
      const opacity = Math.min(
        (currentScroll - minScrollThreshold) / (maxScrollThreshold - minScrollThreshold),
        1
      );

      this.backToTop.style.opacity = opacity;
      this.backToTop.style.pointerEvents = "auto"; // Enable clicking
    }
  }
}
