export const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 40;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
    });
  }
};
