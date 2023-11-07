/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import dom from './dom';

const events = (() => {
  const menu = document.querySelector('.menu');
  const sections = document.querySelectorAll('section');
  const menuLinks = document.querySelectorAll('.menu-link');

  function clickListener() {
    const copy = document.querySelector('.icons-list').cloneNode(true);
    document.querySelector('.skills-carousel').appendChild(copy);

    document.addEventListener('click', (event) => {
      const { target } = event;
      // Click on About tab link
      if (target.classList.contains('tab-link')) {
        if (!target.classList.contains('active-link')) {
          dom.openTab();
        }
      }

      if (target.classList.contains('menu-link')) {
        dom.openMenuLink(target);
      }

      // Navbar manipulation
      if (target.classList.contains('menu-btn')) {
        menu.style.right = '0';
      } else if (target.classList.contains('close-btn')) {
        menu.style.right = '-200px';
      }
    });
  }

  window.onscroll = () =>{
    sections.forEach((section)=>{
      let top = window.scrollY;
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if( top >= offset && top < offset+ height){
        menuLinks.forEach(link=>{
          link.classList.remove('active-link');
          if (link.getAttribute('href').includes(id)) {
              link.classList.add('active-link');
          }
        })
      }
    })
  }

  return {
    clickListener,
  };
})();

export default events;
