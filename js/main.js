const clickButton = document.querySelector(".toggle-btn")

clickButton.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('show-nav');
});