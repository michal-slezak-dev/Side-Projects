const btn = document.querySelectorAll('.question'); // or .question span
const activeState = {}; // true - class=.active false - class!=.active

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        const icon = document.querySelector('.question' + (i + 1) + ' h2 span img');
        const answer = document.getElementById('a-' + (i + 1));

        answer.classList.toggle('active');


        const isActive = answer.classList.contains('active');
        activeState['a-' + (i + 1)] = isActive;
        // console.log(activeState);


        // change button image
        if (isActive) {
            icon.setAttribute('src', './assets/images/icon-minus.svg')
        } else {
            icon.setAttribute('src', './assets/images/icon-plus.svg')
        }


        // reset so that only 1 answer is displayed at the time
        for (let j = 0; j < btn.length; j++) {
            if (j != i) {
                const plusIcon = document.querySelector('.question' + (j + 1) + ' h2 span img');
                const otherActiveAnswer = document.getElementById('a-' + (j + 1));

                otherActiveAnswer.classList.remove('active');
                plusIcon.setAttribute('src', './assets/images/icon-plus.svg');
                activeState['a-' + (j + 1)] = false;
            }
        }






    });
}