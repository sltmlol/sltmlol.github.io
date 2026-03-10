// маска телефона
function setupPhoneMask() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value[0] === '7' || value[0] === '8') {
                    value = value.substring(1);
                }
                
                let formatted = '+7 (';
                if (value.length > 0) formatted += value.substring(0, 3);
                if (value.length > 3) formatted += ') ' + value.substring(3, 6);
                if (value.length > 6) formatted += '-' + value.substring(6, 8);
                if (value.length > 8) formatted += '-' + value.substring(8, 10);
                
                e.target.value = formatted;
            }
        });
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('input[name="name"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const button = form.querySelector('button[type="submit"]');
    
    // валидация
    if (name.length < 2) {
        alert('Введите имя (минимум 2 символа)');
        return;
    }
    
    if (phone.replace(/\D/g, '').length < 11) {
        alert('Введите корректный номер телефона');
        return;
    }
    
    button.disabled = true;
    button.textContent = 'Отправка...';

    setTimeout(() => {
        alert('Спасибо! Мы вам перезвоним в ближайшее время.');
        form.reset();
        button.disabled = false;
        button.textContent = 'Отправить';
    }, 500);
}



document.addEventListener('DOMContentLoaded', function() {
    setupPhoneMask();
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });

});

window.viewApplications = viewApplications;