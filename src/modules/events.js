/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import dom from './dom';

const events = (() => {
  const menu = document.querySelector('.menu');

  function clickListener() {
    document.addEventListener('click', (event) => {
      const { target } = event;
      console.log(target);
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

  return {
    clickListener,
  };
})();

export default events;
