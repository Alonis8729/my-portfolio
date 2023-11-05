/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import dom from './dom'

const events = (() => {
  const menu = document.querySelector('.menu')

  function clickListener() {
    document.addEventListener('click', (event) => {
      const { target } = event

      // Click on About tab link
      if (target.classList.contains('tab-link')) {
        if (!target.classList.contains('active-link')) {
          dom.openTab()
        }
      }

      if (target.classList.contains('menu-btn')) {
        menu.style.right = '0'
      } else if (target.classList.contains('close-btn')) {
        menu.style.left = '-200px'
      }
    })
  }

  return {
    clickListener,
  }
})()

export default events
