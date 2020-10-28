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

function ifExist (value){
    let error = false;
    if (value.trim() == "")
        error - true;
    return error;
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
    })
});

// const genres = [
//    'Фантастика', // 0
//     'Боевик',     // 1
//     'Фэнтези',    // 2
//     'Драма',      // 3
//     'Комедия',    // 4
//     'Мультфильм', // 5
//     'Приключения' // 6
//   ]


// const films = [
//     {
//         start: '10:00',
//         name: 'Человек-паук',
//         genre: [0, 1, 2],
//         price: 200,
//     },

//     {
//         start: '12:00',
//         name: 'Собачья жизнь 2',
//         genre: [3, 4, 5],
//     },
//     {
//         start: '02:00',
//         name: 'История игрушек 4',
//         genre: [2, 3, 5],
//     },
//     {
//         start: '03:00',
//         name: 'Люди в черном: Интернэшнл', 
//         genre: [0, 1, 5],
//     },
// ]


// const tableFilms = document.querySelector('.block03__table').childNodes[1];

// for (let i=0; i< films.length; i++){
//     const tr = document.createElement('tr');
//     const tdStart = document.createElement('td');
//     tdStart.innerHTML = films[i].start;
//     const tdName = document.createElement('td');
//     tdName.innerHTML = films[i].name;
//     let currentGenreFilm = [];
//     for (let j=0; j < films[i].genre.length; j++){
//         currentGenreFilm.push(' ' + genres[films[i].genre[j]]);
//     }

//     currentGenreFilm = currentGenreFilm.toString()
//     const tdGenre = document.createElement('td');
//     tdGenre.innerHTML = currentGenreFilm;
    

//     const tdButton = document.createElement('td') 
//     tdButton.innerHTML = '<label><input type="checkbox" class="block03__checkbox1"><span></span></label>'

//     tr.appendChild(tdStart);
//     tr.appendChild(tdName);
//     tr.appendChild(tdGenre);
//     tr.appendChild(tdButton);
//     tableFilms.appendChild(tr);
// };

//burger
document.getElementsByClassName('menu__burger')[0].onclick = function(){
    console.log("hello",document.getElementsByClassName('block01__nav')[0])
    if(document.getElementsByClassName('block01__nav')[0].style.display == 'block')
      {document.getElementsByClassName('block01__nav')[0].style.display = 'none';
    }
    else {document.getElementsByClassName('block01__nav')[0].style.display = 'block';
  }
};
