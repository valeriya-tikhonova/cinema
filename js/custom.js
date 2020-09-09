// const form = document.getElementById('form');
// form.onsubmit = function(event) {
//     //остановить стандартную обработку браузером
//     event.prevenDefault();
    
//     Object.keys(form.elements).forEach(function(elements){
//         if(form.elements[elements].type != "submit") {
//             console.log(form.elements[elements].name, form.elements[elements].value)
//         }

//     })
// }

// const button = $('#submit');
// console.log('button', button);
// const form = $('#form');
// button.on('click', function(event){
//     event.preventDefault();
//     //остановка перезагрузки браузера
//     let data = form.serialize();
//     console.log('data', data)
// })

// function ifExist (value){
//     let error = false;
//     if (value.trim() == "")
//         error - true;
//     return error;
// }

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav:true,
    });
});

const films = [
    {
        start: '10.00',
        name: 'Человек-паук',
        genre: [
            0,
            1,
            2
        ]
    },
    {
        start: '12.00',
        name: 'Собачья жизнь 2',
        genre: [
            0,
            1,
            2
        ]
    },
    {
        start: '14.00',
        name: 'История игрушек 4',
        genre: [
            0,
            1,
            2
        ]
    },
    {
        start: '16.00',
        name: 'Люди  в черном: Интернешнл',
        genre: [
            0,
            1,
            2
        ]
    }
    
]

console.log(films)