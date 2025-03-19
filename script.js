function changeMainImage(imageUrl, thumb) {
  const mainImage = thumb.closest('.gallery-container').querySelector('.main-image');
  mainImage.src = imageUrl;
  mainImage.classList.add('confirm-animation');
  setTimeout(() => mainImage.classList.remove('confirm-animation'), 500);
}

function showPaymentInstructions() {
  document.getElementById('payment-instructions').classList.remove('hidden');
  document.body.scrollIntoView({ behavior: 'smooth' });
}

function confirmPayment() {
  alert('Takk for din bestilling! Vi kontakter deg for leveringsdetaljer.');
  document.getElementById('payment-instructions').classList.add('hidden');
}

document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (!e.target.closest('button')) {
      card.classList.toggle('expanded');
    }
  });
});

function openModal(imageUrl) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImg.src = imageUrl;
  document.body.style.overflow = 'hidden'; // Forhindre scrolling av bakgrunnen
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = "none";
  document.body.style.overflow = 'auto'; // Tillat scrolling av bakgrunnen
}

document.querySelector('.close').addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
  if (event.target === document.getElementById('imageModal')) {
    closeModal();
  }
});