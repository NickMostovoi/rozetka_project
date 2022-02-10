document.querySelector('.fn-header__burgerButton_open').addEventListener('click', function() {
    document.querySelector('.asideMenu').style.display = 'block';
});

document.querySelector('.fn-button__radio_close').addEventListener('click', function() {
    document.querySelector('.asideMenu').style.display = 'none';
});