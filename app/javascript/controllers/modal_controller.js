import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="modal"
export default class extends Controller {
  static targets = ['slide', 'modalDiv'];

  static values = { index: Number };

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

  showModal() {
    this.modalDivTarget.classList.remove('hidden');
  }

  closeModal() {
    console.log('Clicked');
    this.modalDivTarget.classList.add('hidden');
  }
}
