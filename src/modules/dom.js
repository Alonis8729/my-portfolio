const dom = (() => {
  function openTab() {
    const tabLinks = document.querySelectorAll('.tab-link')
    const tabContents = document.querySelectorAll('.tab-contents')

    tabLinks.forEach((link) => link.classList.toggle('active-link'))
    tabContents.forEach((tab) => {
      tab.classList.toggle('hide')
    })
  }

  return {
    openTab,
  }
})()

export default dom
