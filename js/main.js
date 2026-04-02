let body = document.querySelector(`body`);
let currentSlide = 0;
let carousel = document.querySelector(`.carousel-slides`);
let script = document.createElement(`script`);

let leftArrow = document.querySelectorAll(`a`)[0];
let rightArrow = document.querySelectorAll(`a`)[1];

function container(data){
    for(let index = 0; index < data.slides.length; ++index){
        let artist = document.createElement(`h2`);
        let album = document.createElement(`p`);
        let coverImage = document.createElement(`img`);
        let artistURL = document.createElement(`a`);
        let imageCredit = document.createElement(`a`);
        let review = document.createElement(`p`);
        let reviewCredit = document.createElement(`a`);
        let slide = document.createElement(`div`);

        slide.classList.add(`carousel-slide`);
        artist.textContent = data.slides[index].artist;
        album.textContent = data.slides[index].album;
        artistURL.href = data.slides[index].url;
        artistURL.textContent = data.slides[index].artist;

        coverImage.src = data.slides[index].cover_image.path;
        coverImage.alt = data.slides[index].cover_image.alt_content;
        imageCredit.href = data.slides[index].cover_image.url;
        imageCredit.textContent = data.slides[index].cover_image.credit;

        review.textContent = data.slides[index].review.content;
        reviewCredit.textContent = data.slides[index].review.source;
        reviewCredit.href = data.slides[index].review.url;

        slide.appendChild(artist);
        slide.appendChild(album);
        slide.appendChild(coverImage);
        slide.appendChild(imageCredit);
        slide.appendChild(review);
        slide.appendChild(reviewCredit);

        carousel.append(slide);
        console.log(`Slide number ` + index  +` Data.slide.lenght` + data.slides.length);
    }
}

let previousSlide = (event) =>{
    if(currentSlide === 0 ){
        leftArrow.style.visibility = `hidden`;
        return;
    }
        leftArrow.style.visibility = `visible`;
        console.log(`Current slide ` + currentSlide);
        --currentSlide;
}

let nextSlide = (event) =>{
    let total = document.querySelectorAll(`.carousel-slide`).length;
    if(currentSlide >= total -1){
        rightArrow.style.visibility = `hidden`;
        return;
    }
        rightArrow.style.visibility = `visible`;
        console.log(`Current slide ` + currentSlide);
        ++currentSlide;
}


leftArrow.addEventListener(`onclick`, previousSlide());
rightArrow.addEventListener(`onclick`, nextSlide());

script.setAttribute(`src`, `json/data.json`);
body.appendChild(script);
