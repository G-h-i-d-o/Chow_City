const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
function sendToWhatsApp() {
  const phoneNumber = "27642261364"; // South African number without '+' and with country code

  const name = document.getElementById("fName").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("lName").value;

  const text = `Hello! My name is ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, '_blank');
}