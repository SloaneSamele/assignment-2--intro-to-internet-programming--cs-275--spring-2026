let body = document.querySelector(`body`);
let carousel = document.querySelector(`.carousel-slides`);
let script = document.createElement(`script`);
let artist = document.createElement(`h2`);
let album = document.createElement(`p`);
let review = document.createElement(`p`);
let img = document.createElement(`img`);
let artistURL = document.createElement(`a`);

function container(data){
    artist.textContent = data.slides[0].artist;
    album.textContent = data.slides[0].album;
    review.textContent = data.slides[0].review.content;
    img.setAttribute(`src`, data.slides[0].cover_image.path);
    artistURL.setAttribute(`src`, data.slides[0].url);
    artistURL.innerText = artist.textContent;
    console.log(`${data.slides[0].cover_image.path}`);
}
script.setAttribute(`src`, `json/data.json`);
body.appendChild(script);
