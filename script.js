// Modal controls
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

// open modal for every button with class 'modal-trigger'
document.querySelectorAll('.modal-trigger').forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! Thank you.');
  modal.style.display = 'none';
  this.reset();
});

// GSAP animations for sections and feature cards
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.animate-gsap').forEach((section, i) => {
  gsap.fromTo(section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.07 * i,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
});

gsap.utils.toArray('.feature-card').forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: 0.15 * i,
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    }
  );
});
