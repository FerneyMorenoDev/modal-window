'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal');
let isModalOpen = false;

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  isModalOpen = true;
};

const hideModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  isModalOpen = false;
};

openModalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    showModal();
  });
});

closeModalBtn.addEventListener('click', () => {
  hideModal();
});

window.addEventListener('keydown', ({ key: keyName }) => {
  if (keyName === 'Escape' && isModalOpen) {
    hideModal();
  }
});
