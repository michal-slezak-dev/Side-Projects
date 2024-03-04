const clickedBtns = document.querySelectorAll('span');

clickedBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const parent = this.closest('.question')

        parent.classList.toggle('active')

    })
})