let cl = console.log;

const showbtn = document.getElementById('btnn');
const backdrop = document.getElementById('backdrop');
const mymodel = document.getElementById('mymodel');
const myclose = [...document.querySelectorAll('.myClose')];
const moviecontainer = document.getElementById('moviecontainer');
const addmovie = document.getElementById('addmovie');
const titlecontrol = document.getElementById('title');
const imgcontrol = document.getElementById('image');
const ratingcontrol = document.getElementById('ratings');

let moviesarray = [];

if (localStorage.getItem("movies") === null) {
    localStorage.setItem("movies", JSON.stringify(moviesarray));
} else {
    moviesarray = JSON.parse(localStorage.getItem("movies"));
}

const templating = (arr) => {
    let result = ``;
    arr.forEach(movie => {
        result += `<div class="col-sm-4">
        <div class="card moviecard">
            <div class="card-header">
                <h3>${movie.title}</h3>
            </div>
            <div class="card-body">
                <figure class="mb-0 movieimg">
                    <img src="${movie.imgurl}" alt="">
                </figure>
            </div>
            <div class="card-footer">
                <p class="text-right font-weight-bold">
                ${movie.rating}/5
                </p>
            </div>
        </div>
        </div>`
    })
    moviecontainer.innerHTML = result;
}

templating(moviesarray);

const ontoggle =() =>{
    backdrop.classList.toggle('show');
    mymodel.classList.toggle('show');
}

const onaddmovie = (eve) =>{
    let obj ={
        title:titlecontrol.value,
        imgurl:imgcontrol.value,
        rating:ratingcontrol.value
    }
    moviesarray.unshift(obj);
    localStorage.setItem("movies", JSON.stringify(moviesarray));
    titlecontrol.value =``;
    imgcontrol.value =``;
    ratingcontrol.value =``;
    ontoggle();
    templating(moviesarray);

    cl(moviesarray);
}


showbtn.addEventListener("click",ontoggle)

myclose.forEach(ele =>{
    ele.addEventListener("click",ontoggle)
})


addmovie.addEventListener("click",onaddmovie);
