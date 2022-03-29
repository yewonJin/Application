const $img = document.getElementById('menu_img');

$img.addEventListener("click", () => {
    document.querySelector('.menu').classList.toggle("open");
    document.querySelector('.expand_menu').classList.toggle("open"); 
    document.querySelector('.narrow_menu').classList.toggle("open");
});