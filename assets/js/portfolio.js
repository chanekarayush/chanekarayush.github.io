const darkmodeToggle = document.getElementById('modeswitch');
darkmodeToggle.addEventListener('click', () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    return false;
});