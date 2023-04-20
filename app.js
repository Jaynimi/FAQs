// // Traversing the DOM METHOD
// // I don't know how to close all other open questions when I click on another question with this method
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (button) {
//     button.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement;

//         question.classList.toggle('show-text')

//         // btns.forEach(function (item) {
//         //     if (item !== question) {
//         //       item.classList.remove("show-text");
//         //     }
//         // });
//     });
// });

const question = document.querySelectorAll('.question');

question.forEach(function (qstn) {
    const btn = qstn.querySelector('.question-btn');
    btn.addEventListener("click", function () {

        //hide other answers
        question.forEach(function (item) {
            if (item !== qstn) {
                item.classList.remove("show-text")
            }
        });

        //show answer to clicked question
        qstn.classList.toggle('show-text');
    });
});