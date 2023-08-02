
let menuicon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick =()=>{
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let currentSectionId = '';

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      currentSectionId = id;
    }

    navLinks.forEach(link => {
      if (link.getAttribute('href').substring(1) === currentSectionId) {
        link.style.color = 'cyan';
        link.style.textDecoration = 'underline';
      } else {
        link.style.color = ''; // Revert to default color if not the active section
        link.style.textDecoration = '';
      }
    });
  });
};


const typed =new Typed('.multiple-text' ,{
  strings : ['Fullstack Developer' , 'Frontend Developer', 'Backend Developer','Freelancer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop : true,
});