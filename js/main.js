let body = document.querySelector(`body`);
let currentSlide = 0;
let carousel = document.querySelector(`.carousel-slides`);
let script = document.createElement(`script`);

let leftArrow = document.querySelectorAll(`a`)[0];
let rightArrow = document.querySelectorAll(`a`)[1];
leftArrow.style.visibility = `hidden`;

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

        album.textContent = data.slides[index].album;
        artistURL.href = data.slides[index].url;
        artistURL.textContent = data.slides[index].artist;

        coverImage.src = data.slides[index].cover_image.path;
        coverImage.alt = data.slides[index].cover_image.alt_content;
        imageCredit.href = data.slides[index].cover_image.url;
        imageCredit.textContent = data.slides[index].cover_image.credit;

        review.textContent = data.slides[index].review.content;
        review.style.textAlign = `start`;
        reviewCredit.textContent = data.slides[index].review.source;
        reviewCredit.href = data.slides[index].review.url;

        slide.appendChild(artist);
        slide.appendChild(album);
        slide.appendChild(artistURL);
        slide.appendChild(coverImage);
        slide.appendChild(imageCredit);
        slide.appendChild(review);
        slide.appendChild(reviewCredit);

        carousel.append(slide);
        console.log(`Slide number ` + index  +` Data.slide.lenght` + data.slides.length);
    }
    showSlide();
}

let previousSlide = (event) =>{
    if(currentSlide === 0 ){
        leftArrow.style.visibility = `hidden`;
        return;
    }
        leftArrow.style.visibility = `visible`;
        console.log(`Current slide ` + currentSlide);
        --currentSlide;
        showSlide();
        updateArrows();
}

let nextSlide = (event) =>{
    let total = document.querySelectorAll(`.carousel-slide`).length;
    if(currentSlide >= total - 1){
        rightArrow.style.visibility = `hidden`;
        return;
    }
        rightArrow.style.visibility = `visible`;
        console.log(`Current slide ` + currentSlide);
        ++currentSlide;
        showSlide();
        updateArrows();
}

let showSlide = () => {
    document.querySelector('.carousel-slides').style.transform = `translateX(-${currentSlide * 680}px)`;
};

let updateArrows = () => {
    let total = document.querySelectorAll(`.carousel-slide`).length;

    leftArrow.style.visibility = currentSlide === 0 ? `hidden` : `visible`;
    rightArrow.style.visibility = currentSlide === total - 1 ? `hidden` : `visible`;
};

leftArrow.addEventListener(`click`, previousSlide);
rightArrow.addEventListener(`click`, nextSlide);

script.setAttribute(`src`, `json/data.json`);
body.appendChild(script);
