    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const intervalTime = 10000;
    let slideInterval;

    function showSlide(newIndex, direction = 'right') {
      if (newIndex === currentIndex) return;

      slides.forEach(slide => {
        slide.classList.remove('active');
      });

      const nextSlide = slides[newIndex];
      nextSlide.classList.add('active');

      currentIndex = newIndex;
    }

    function nextSlide() {
      const newIndex = (currentIndex + 1) % totalSlides;
      showSlide(newIndex, 'right');
    }

    function prevSlide() {
      const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(newIndex, 'left');
    }

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoSlide() {
      clearInterval(slideInterval);
    }

    document.querySelector('.carousel-btn.next').addEventListener('click', () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });

    document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });

    startAutoSlide();
    // Ampliar imagen al hacer clic
document.querySelectorAll('.cert-card img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

// Cerrar modal
document.querySelector('.close-modal').addEventListener('click', () => {
  document.getElementById('img-modal').style.display = 'none';
});

// Cerrar al hacer clic fuera de la imagen
document.getElementById('img-modal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = 'none';
  }
});
