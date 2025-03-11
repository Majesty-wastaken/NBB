var list = document.querySelector('#sidenav .tabList');
var navBtn = document.getElementById('openNavBtn');

var pageElements = document.querySelectorAll('*');

pageElements.forEach(function(elements){
    elements.addEventListener('click', closeNav);
});

navBtn.addEventListener('click', openNav);

function openNav(event) {
    list.style.display = "flex"
    navBtn.style.display = "none"
    event.stopPropagation();
};

list.addEventListener('click', (event) => {
    event.stopPropagation();
});

function closeNav() {
    list.style.display = "none"
    navBtn.style.display = "block"
};