import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="welcome"
export default class extends Controller {
  static targets = [
    'slide',
    'mobileNavigation',
    'closeNavIcon',
    'openNavIcon',
    'navigationBar',
  ];

  static values = { index: Number };

  handleScroll(_event) {
    const clientHeight = this.navigationBarTarget.getBoundingClientRect().top;
    if (-100 > clientHeight) {
      document.getElementById('navigationBar').classList.remove('bg-white');
    } else {
      document.getElementById('navigationBar').classList.add('bg-transparent');
    }
  }

  connect() {
    window.addEventListener('scroll', this.handleScroll);
  }

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
}
