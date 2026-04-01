let body = document.querySelector(`body`);
let slide = 3;
let carousel = document.querySelector(`.carousel-slides`);
let script = document.createElement(`script`);
let artist = document.createElement(`h2`);
let album = document.createElement(`p`);
let review = document.createElement(`p`);
let reviewSource = document.createElement(`a`);
let img = document.createElement(`img`);
let imgCredit = document.createElement(`a`);
let artistURL = document.createElement(`a`);

let leftArrow = document.querySelectorAll(`a`)[0];
let rightArrow = document.querySelectorAll(`a`)[1];

function container(data){
    artist.textContent = data.slides[slide].artist;
    album.textContent = data.slides[slide].album;
    review.textContent = data.slides[slide].review.content;
    img.setAttribute(`src`, data.slides[slide].cover_image.path);
    img.alt = data.slides[slide].cover_image.alt_content;
    artistURL.setAttribute(`href`, data.slides[slide].url);
    artistURL.textContent = data.slides[slide].artist;
    imgCredit.textContent = data.slides[slide].cover_image.credit;
    imgCredit.href = data.slides[slide].cover_image.url;
    reviewSource.textContent = 'source: ' + data.slides[slide].review.source;
    reviewSource.href = data.slides[slide].review.url;
    console.log(`${img.alt}`);
}


let previousSlide = (event) =>{
    if(slide === 0 ){
        leftArrow.style.visibility = `hidden`;
        return;
    }
        --slide;
        leftArrow.style.visibility = `visible`;
        container();
}

let nextSlide = (event) =>{
    if(slide >= 3){
        righttArrow.style.visibility = `hidden`;
        return;
    }
        --slide;
        rightArrow.style.visibility = `visible`;
        container();
}
leftArrow.addEventListener(`click`, previousSlide());
rightArrow.addEventListener(`click`, nextSlide());
carousel.appendChild(artist);
carousel.appendChild(artistURL);
carousel.appendChild(img);
carousel.appendChild(imgCredit);
carousel.appendChild(review);
carousel.appendChild(reviewSource);

script.setAttribute(`src`, `json/data.json`);
body.appendChild(script);
