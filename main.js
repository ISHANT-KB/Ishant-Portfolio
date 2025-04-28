
// Get all nav links
const navLinks = document.querySelectorAll('nav ul li a');

// Listen for the scroll event
window.addEventListener('scroll', () => {
   let currentSection = '';
   
   // Loop through all sections to find the one currently in view
   document.querySelectorAll('div[id]').forEach(section => {
      const sectionTop = section.offsetTop - 50; // Offset for smoother effect
      if (window.scrollY >= sectionTop) {
         currentSection = section.getAttribute('id');
      }
   });
   
   // Remove 'active' class from all links
   navLinks.forEach(link => {
      link.classList.remove('active');
   });
   
   // Add 'active' class to the correct link
   const activeLink = document.querySelector(`nav ul li a[href="#${currentSection}"]`);
   if (activeLink) {
      activeLink.classList.add('active');
   }
});


