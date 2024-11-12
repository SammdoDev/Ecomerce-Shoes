const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});



document.querySelectorAll('.dropbtn').forEach(dropbtn => {
    dropbtn.addEventListener('click', function(event) {
        const dropdownContent = this.nextElementSibling;
        const arrowIcon = this.querySelector('.arrow-icon');

        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';  
            arrowIcon.style.transform = 'rotate(0deg)';  
        } else {
            dropdownContent.style.display = 'block';  
            arrowIcon.style.transform = 'rotate(180deg)'; 
        }

        event.stopPropagation();
    });
});


document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {

        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
        
        document.querySelectorAll('.arrow-icon').forEach(arrowIcon => {
            arrowIcon.style.transform = 'rotate(0deg)';
        });
    }
});
