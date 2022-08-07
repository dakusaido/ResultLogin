const btn = document.querySelector('.btnSubmit');

btn.addEventListener('mousedown', function eventHandler() {
    btn.removeEventListener('mouseup', eventHandler);
    btn.value = 'Вход недоступен';
    btn.type = 'button';
    alert('[Ошибка] Вход на сайт временно недоступен');
    btn.setAttribute('disabled', true);
});