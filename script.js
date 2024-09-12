window.addEventListener('load', () => {
    const header = document.querySelector('header'); // Убедись, что это правильный селектор

    setTimeout(() => {
        header.classList.add('visible');
    }, 100); // Таймер на 100 миллисекунд
});

window.addEventListener('scroll', () => {
    const elementsToShow = document.querySelectorAll('.hidden');

    elementsToShow.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Показ элементов при прокрутке (теперь элемент становится видимым один раз)
        if (elementTop < viewportHeight - 50) {
            element.classList.add('visible');
        }
    });
});



// Текст в ячейке


window.addEventListener('resize', updateText);
window.addEventListener('load', updateText);

function updateText() {
    const textElement = document.querySelector('.main__itemtext');

    if (window.innerWidth <= 768) {
        textElement.textContent = textElement.getAttribute('data-short-text');
    } else {
        textElement.textContent = textElement.getAttribute('data-full-text');
    }
}


// Loader

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.querySelector(".page");

    // Проверяем, что элементы существуют
    if (loader && content) {
        // Скрываем загрузочный экран и показываем основной контент через 2 секунды
        setTimeout(() => {
            loader.style.display = "none"; // Скрыть загрузочный экран
            content.style.display = "block"; // Показать основной контент
            document.body.classList.remove("no-scroll"); // Включить прокрутку
        }, 2000); // Задержка для демонстрации (2 секунды)
    } else {
        console.error('Не удалось найти элементы с идентификаторами "loader" или классом "page".');
    }
});

// Отключить прокрутку страницы во время загрузки
document.body.classList.add("no-scroll");