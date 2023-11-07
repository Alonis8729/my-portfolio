const dom = (() => {
  function openTab() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-contents');
   
    tabLinks.forEach((link) => link.classList.toggle('active-link'));
    tabContents.forEach((tab) => {
      tab.classList.toggle('hide');
    });
  }

  function openMenuLink(link) {
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach((menuLink) => menuLink.classList.remove('active-link'));
    link.classList.add('active-link');
  }

  return {
    openTab,openMenuLink
  };
})();

export default dom;
