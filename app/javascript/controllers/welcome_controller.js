import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="welcome"
export default class extends Controller {
  static targets = ['slide', 'mobileNavigation', 'closeNavIcon', 'openNavIcon'];

  static values = { index: Number };

  showNavigation() {
    this.mobileNavigationTarget.classList.add('h-96');
    this.mobileNavigationTarget.classList.remove('h-0');
    this.closeNavIconTarget.classList.remove('hidden');
    this.openNavIconTarget.classList.add('hidden');
  }

  closeNavigation() {
    this.mobileNavigationTarget.classList.remove('h-96');
    this.mobileNavigationTarget.classList.add('h-0');
    this.closeNavIconTarget.classList.add('hidden');
    this.openNavIconTarget.classList.remove('hidden');
  }

  initialize() {
    this.showCurrentSlide();
  }

  next() {
    if (this.indexValue + 1 < 4) {
      this.indexValue++;
    } else {
      this.indexValue = 0;
    }

    this.showCurrentSlide();
  }

  previous() {
    if (this.indexValue > 0) {
      this.indexValue--;
    } else {
      this.indexValue = 3;
    }
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue;
    });
  }
}
