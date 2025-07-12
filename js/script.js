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
