/* eslint-disable no-console */
import dom from './dom'

const events = (() => {
  function clickListener() {
    document.addEventListener('click', (event) => {
      const { target } = event

      // Click on About tab link
      if (target.classList.contains('tab-link')) {
        if (!target.classList.contains('active-link')) {
          dom.openTab()
        }
      }
    })
  }

  return {
    clickListener,
  }
})()

export default events
