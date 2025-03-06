import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="swiper"
export default class extends Controller {
  async connect() {
    const SwiperModule = await import("swiper");
    const Swiper = SwiperModule.default; // Get Swiper from module

    new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true, // Ensures slides loop continuously
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
