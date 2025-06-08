import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="redirect"
export default class extends Controller {
  connect() {
    setTimeout(() => {
      window.location.href = "/macchinario_laser_808_1064";
    }, 3000); // Redirect after 3 seconds
  }
}
