document.querySelectorAll('.download-btn').forEach(button => {
  button.addEventListener('click', () => {
    const fileUrl = button.getAttribute('data-link');
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop(); // Nombre del archivo basado en el link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

// Actualización de dots al hacer scroll
const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');

carousel.addEventListener('scroll', () => {
  const scrollPosition = carousel.scrollLeft;
  const width = carousel.offsetWidth;

  const index = Math.round(scrollPosition / width);

  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) {
    dots[index].classList.add('active');
  }
});
