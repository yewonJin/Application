// input - add 'li' Element
const $input = document.querySelector('.content-input');

$input.addEventListener('keydown', e => {
    if(e.key !== 'Enter') return;
    
    const $li = document.createElement('li');
    $li.className = 'main_li';
    $li.textContent = e.target.value;

    document.querySelector('.main_ul').appendChild($li);

    e.target.value ='';
});

// ul - li:active
const $ul = document.querySelector('.main_ul');

$ul.addEventListener('click', e => {
    if(!(e.target.matches('li') || e.target.matches('li > button'))) return;
    
    e.target.classList.replace('main_li', 'main_li_active');

    const $button = document.createElement('button');
    $button.className = 'li_button';
    $button.textContent = '휴지통';
    
    document.querySelector('.main_li_active').appendChild($button);
    
})


$ul.addEventListener('mouseout', e => {
    if(!e.target.matches('li')) return;

    document.querySelector('.main_li_active').removeChild(document.querySelector('.li_button'));

    setTimeout(()=> {
        e.target.classList.replace('main_li_active', 'main_li');
    }, 1000, e);

})