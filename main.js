

const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', ()=> {
   sections.forEach(section=>{
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight-100) {
         section.classList.add('visible');
      }
   });
});