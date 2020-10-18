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

const genres = [
   'Фантастика', // 0
    'Боевик',     // 1
    'Фэнтези',    // 2
    'Драма',      // 3
    'Комедия',    // 4
    'Мультфильм', // 5
    'Приключения' // 6
  ]


const films = [
    {
        start: '10:00',
        staff: 'Человек-паук',
        genre: [0, 1, 2],
    },

    {
        start: '12:00',
        staff: 'Собачья жизнь 2',
        genre: [3, 4, 5],
    },
    {
        start: '02:00',
        staff: 'История игрушек 4',
        genre: [2, 3, 5],
    },
    {
        start: '03:00',
        staff: 'Люди в черном: Интернэшнл', 
        genre: [0, 1, 5],
    },
]

const tableFilms = document.querySelector('.block03__table').childNodes[1];

for (let i=0; i< films.length; i++){
    const tr = document.createElement('tr');
    const tdStart = document.createElement('td');
    tdStart.innerHTML = films[i].start;
    const tdStaff = document.createElement('td');
    tdStaff.innerHTML = films[i].staff;
    let currentGenreFilm = [];
    for (let j=0; j < films[i].genre.length; j++){
        currentGenreFilm.push(' ' + genres[films[i].genre[j]]);
    }

    currentGenreFilm = currentGenreFilm.toString()
    const tdGenre = document.createElement('td');
    tdGenre.innerHTML = currentGenreFilm;
    

    const tdButton = document.createElement('td') 
    tdButton.innerHTML = '<label><input type="checkbox" class="block03__checkbox1" id="popup"><span></span></label>'

    tr.appendChild(tdStart);
    tr.appendChild(tdStaff);
    tr.appendChild(tdGenre);
    tr.appendChild(tdButton);
    tableFilms.appendChild(tr);
}

// film_start_1.innerHTML = films[0].start;
// film_staff_1.innerHTML = films[0].staff;


// const film_start_2 = document.getElementById ('film_start_2');
// const film_staff_2 = document.getElementById ('film_staff_2');
// const film_genre_2 = document.getElementById ('film_genre_2');

// film_start_2.innerHTML = films[1].start;
// film_staff_2.innerHTML = films[1].staff;
// film_genre_2.innerHTML = films[1].genre;

// const film_start_3 = document.getElementById ('film_start_3');
// const film_staff_3 = document.getElementById ('film_staff_3');
// const film_genre_3 = document.getElementById ('film_genre_3');

// film_start_3.innerHTML = films[2].start;
// film_staff_3.innerHTML = films[2].staff;
// film_genre_3.innerHTML = films[2].genre;

// const film_start_4 = document.getElementById ('film_start_4');
// const film_staff_4 = document.getElementById ('film_staff_4');
// const film_genre_4 = document.getElementById ('film_genre_4');

// film_start_4.innerHTML = films[3].start;
// film_staff_4.innerHTML = films[3].staff;
// film_genre_4.innerHTML = films[3].genre;

//burger

// document.getElementById("trigger").onclick = function() {
//     open()
//   };
  
//   function open() {
//     document.getElementById("menu").classList.toggle("show");
//   }