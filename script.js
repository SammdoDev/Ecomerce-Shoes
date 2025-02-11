document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
  
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  });
  

  function toggleBrand(selectedBrand, brandName) {
    const brands = document.querySelectorAll('.brand');
    const cards = document.querySelectorAll('.card');
  
    brands.forEach(brand => brand.classList.remove('expanded'));
  
    selectedBrand.classList.add('expanded');
  
    cards.forEach(card => {
      card.style.display = 'none';
      card.classList.remove('extended');
    });
  
    const brandCards = document.querySelectorAll(`.${brandName}`);
    brandCards.forEach(card => {
      card.style.display = 'block';
      card.classList.add('extended');
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const nikeBrand = document.querySelector('.brand-list .brand');
    toggleBrand(nikeBrand, 'nike');
  });
  