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
script.setAttribute(`src`, `json/data.json`);
body.appendChild(script);
