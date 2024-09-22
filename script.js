document.getElementById('menu-icon').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.left = '0px'; // Show menu
});

document.getElementById('close-icon').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.left = '-250px'; // Hide menu
});
