const menuBtn = document.querySelector('.m-menu');//кнпока на мобилках
const menu = document.querySelector('.menu-sidebar');//меню

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active'); //если у элемента menu есть класс active , он его уберет, если нет класаа, то добавит
})

