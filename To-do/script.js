// input - add 'li' Element
const $input = document.querySelector('.content-input');
var colorCount = 0;

$input.addEventListener('keydown', e => {
    if(e.key !== 'Enter') return;

    const $li = document.createElement('li');
    $li.className = 'main_li';
    $li.textContent = e.target.value;

    document.querySelector('.main_ul').appendChild($li);

    e.target.value ='';

    if(colorCount === 0) {
        $li.style.backgroundImage = "-webkit-linear-gradient(hsla(30, 30%, 70%, 0.8), hsla(50, 50%, 70%, 0.7))";
        colorCount++;
    } else if(colorCount === 1) {
        $li.style.backgroundImage = "-webkit-linear-gradient(hsla(90, 30%, 70%, 0.8), hsla(150, 50%, 70%, 0.7))";
        colorCount++;
    } else {
        $li.style.backgroundImage = "-webkit-linear-gradient(hsla(150, 30%, 70%, 0.8), hsla(200, 50%, 70%, 0.7))";
        colorCount = 0;
    }
});

// interaction - list 
const $ul = document.querySelector('.main_ul');
const $content = document.querySelector('.content');
var target_li;

if(!!$ul.children.length) {
    console.log('hi');
}

$content.addEventListener('mousedown', e => {
    if(!(e.target.matches('li'))) return;
    
    e.target.classList.replace('main_li', 'main_li_active');

    if(!!e.target.children.length) {
        return; 
    } else {
        const $waste = document.createElement('img');
        $waste.className = 'li_waste';
        $waste.setAttribute('src', 'delete.png');
    
        e.target.appendChild($waste);

        target_li = e.target;
    }
});

$content.addEventListener('mouseup', e => {
    if(!!document.querySelector('.main_ul').children.length) {
        const $active = document.querySelector('.main_li_active');
        if($active === null) {
            return
        } else if(!!$active.children.length) {
            target_li.classList.replace('main_li_active', 'main_li');
    
            target_li.removeChild(document.querySelector('.li_waste'));

            if(e.target.matches('img')) {
                target_li.remove();
            } 
        }
    } else{
        return;
    }
});

/*



*/