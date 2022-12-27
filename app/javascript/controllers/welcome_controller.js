import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="welcome"
export default class extends Controller {
  static targets = [
    'slide',
    'mobileNavigation',
    'closeNavIcon',
    'openNavIcon',
    'navigationBar',
    'filterBox',
    'filterShowIcon',
    'filterHideIcon',
  ];

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
    if (this.indexValue + 1 < 3) {
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
      this.indexValue = 2;
    }
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue;
    });
  }

  showFilterBox() {
    this.filterBoxTarget.classList.add('h-max');
    this.filterHideIconTarget.classList.remove('hidden');
    this.filterShowIconTarget.classList.add('hidden');
  }

  hideFilterBox() {
    this.filterBoxTarget.classList.remove('h-max');
    this.filterHideIconTarget.classList.add('hidden');
    this.filterShowIconTarget.classList.remove('hidden');
  }
}
