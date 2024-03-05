const btn = document.querySelectorAll('.question span');
const activeState = {}; // true - class=.active false - class!=.active

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        const minsIcon = document.querySelector('.question' + (i + 1) + ' h2 span img');
        const answer = document.getElementById('a-' + (i + 1));

        answer.classList.toggle('active');
        minsIcon.setAttribute('src', './assets/images/icon-minus.svg');
        // fetch all visible answers using for loop
        const isActive = answer.classList.contains('active');
        activeState['a-' + (i + 1)] = isActive;
        // console.log(activeState);

        for(let j = 0; j < btn.length; j++){
            if(j != i){
                const plusIcon = document.querySelector('.question' + (j + 1) + ' h2 span img');
                const otherActiveAnswer = document.getElementById('a-' + (j + 1));
                otherActiveAnswer.classList.remove('active');
                plusIcon.setAttribute('src', './assets/images/icon-plus.svg');
                activeState['a-' + (j + 1)] = false;
            }
        }




    });
}


