import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="loading"
export default class extends Controller {
  connect() {
    this.startLoading();
  }

  startLoading() {
    const bar = this.element.querySelector(".loading-bar");
    bar.style.transition = "width 3s linear";
    bar.style.width = "100%";
  }
}
