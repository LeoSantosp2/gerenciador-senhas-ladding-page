class Slide {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.slideBar = document.querySelector('.slide-bar');
    this.currentSlide = document.getElementById('current-slide');
    this.current = 0;

    this.createDiv();
    this.count();
    this.btnClick();
  }

  createDiv() {
    for (let i = 0; i < this.slides.length; i++) {
      const newDiv = document.createElement('div');

      newDiv.id = i;
      newDiv.classList.add('bar');

      this.slideBar.appendChild(newDiv);
    }

    document.getElementById('0').classList.add('current-bar');
  }

  count() {
    const count = document.querySelectorAll('.slide-bar div');

    for (let i = 0; i < count.length; i++) {
      count[i].addEventListener('click', () => {
        this.current = count[i].id;
        this.trasition();
      });
    }
  }

  btnClick() {
    document.addEventListener('click', (e) => {
      const event = e.target;

      console.log(event);

      if (event.classList.contains('arrow-left')) {
        this.current--;
        this.trasition();
      }

      if (event.classList.contains('arrow-right')) {
        this.current++;
        this.trasition();
      }
    });
  }

  trasition() {
    if (this.current >= this.slides.length) {
      this.current = 0;
    }

    if (this.current < 0) {
      this.current = this.slides.length - 1;
    }

    document.querySelector('.current-bar').classList.remove('current-bar');
    this.currentSlide.style.marginLeft = -33.33 * this.current + '%';
    document.getElementById(this.current).classList.add('current-bar');
  }
}

const slide = new Slide();
