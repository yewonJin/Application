const $date_btn = document.getElementById('date_btn');
const $date = document.querySelector('.date_input');

$date_btn.addEventListener('click', e => {
    setDate();

    printDate($date.value);

    setDday();

    setInterval(setDday, 1000);
});


function setDday() {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const nowDate = new Date();
    const afterDate = $date.value.split('-');

    let leftDays = 0;

    // Set Year to days
    const year = afterDate[0] - nowDate.getFullYear();

    if(year > 0) {
        leftDays += (365 * year);
    }

    // Set Month to days
    const nowMonth = parseInt(nowDate.getMonth() + 1);
    const afterMonth = parseInt(afterDate[1]);

    for(let i = 0; i < afterMonth - nowMonth; i++) {
        leftDays += month[i + nowMonth]; 
    }

    // Set Date to days 
    leftDays += parseInt(afterDate[2]) - parseInt(nowDate.getDate()) - 1;

    document.querySelector('.days').textContent = leftDays;

    // Set hours and minutes
    const nowHours = nowDate.getHours();
    const nowMinutes = nowDate.getMinutes();

    document.querySelector('.hours').textContent = 23 - parseInt(nowHours);
    document.querySelector('.minutes').textContent = 60 - parseInt(nowMinutes);
}


function setDate() {
    document.querySelector('.initial_set').classList.toggle('move');

    setTimeout(() => {
        document.querySelector('.initial_set').classList.toggle('close');
        document.querySelector('.main_content').classList.toggle('open');
    }, 1000);

    setTimeout(() => {
        document.querySelector('.main_content').classList.toggle('move');
    }, 1100);
}

function printDate(date) {
    document.querySelector('.main_date').textContent = date;
}


