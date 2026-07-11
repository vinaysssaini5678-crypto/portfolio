<script>
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before sending.");
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for contacting Vermicompost Natural Manure! We will reply soon.");
  form.reset();
});

// Dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Vermicompost Natural Manure. All rights reserved.`;
});

// Highlight product cards on hover with eco effect
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = '#F1F8E9'; // light eco-green
  });
  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = '#fff';
  });
});
</script>
