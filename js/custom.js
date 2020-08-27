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

const button = $('#submit');
const form = $('#form');
button.on('click', function(event){
    event.preventDefault();
    let data = form.serialize();
    console.log(data)
})

// function ifExist (value){
//     let error = false;

//     if (value.trim() == "")
//         error - true;
//     return error;
// }