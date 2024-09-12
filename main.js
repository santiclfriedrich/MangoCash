import './style.css'

// Abre el modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
}
  
// Cierra el modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.querySelector('body').style.overflowY = 'auto';
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const registroModal = document.getElementById('registroModal');

    if (event.target === loginModal) {
        closeModal('loginModal');
    }

    if (event.target === registroModal) {
        closeModal('registroModal');
    }
}

document.getElementsByClassName('--signin')[0].addEventListener('click', () => {
    openModal('loginModal');
});

document.getElementsByClassName('--signup')[0].addEventListener('click', () => {
    openModal('registroModal');
});

document.getElementsByClassName('closeModalLogin')[0].addEventListener('click', () => {
    closeModal('loginModal');
});

document.getElementsByClassName('closeModalRegistro')[0].addEventListener('click', () => {
    closeModal('registroModal');
});
  
  