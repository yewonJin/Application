const $nav_menu = document.getElementById('nav_img');
var count = 0;

$nav_menu.addEventListener('click', () => {
    if(count === 0) {
        count++;
        document.querySelector('.nav_category').classList.toggle('open');
        setTimeout(() => {
            document.querySelector('.nav_category').classList.toggle('scale');
        }, 50)
        setTimeout(() => {
            document.querySelector('.nav_category').classList.toggle('move');
        }, 1000)

    } else{
        count--;
        document.querySelector('.nav_category').classList.toggle('move');
        setTimeout(() => {
            document.querySelector('.nav_category').classList.toggle('scale');
        }, 1000)
        setTimeout(() => {
            document.querySelector('.nav_category').classList.toggle('open');
        }, 2000)

    }

});