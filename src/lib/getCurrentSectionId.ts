function highlightCurrentNavItem(sectionId: string) {
  const currentSection = document.querySelector(`a[href="#${sectionId}"]`);
  const currentNav = document.getElementById("current-nav");
  if (currentNav && currentSection && currentSection instanceof HTMLElement) {
    currentNav.style.width = currentSection.offsetWidth + "px";
    currentNav.style.left = currentSection.offsetLeft + "px";
  }
}

function isBottomReached(threshole = 10): boolean {
  return (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - threshole
  );
}

function getCurrentSectionId() {
  const sections = document.getElementsByClassName("sections");
  let currentSection: string = "home";

  Array.from(sections).forEach((section) => {
    if (
      section instanceof HTMLElement &&
      window.scrollY >= section.offsetTop - 400
    ) {
      currentSection = section.id;
    }
    if (isBottomReached()) currentSection = "contact";
  });

  return currentSection;
}

export { getCurrentSectionId, highlightCurrentNavItem };
