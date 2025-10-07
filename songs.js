const songs = [
    { title: "K.", 
        genre: "dream pop", 
        cover: "cover/snoopy.jpg", 
        file: "canciones/K.mp3" },

    { title: "For: You", 
        genre: "neo-soul", 
        cover: "cover/kali.jpg", 
        file: "canciones/FORYOU.mp3" },

    { title: "Only", 
        genre: "R&B", 
        cover: "cover/flores.jpg", 
        file: "canciones/ONLY.mp3" }

        
];

const titleEl = document.getElementById('title');
const genreEl = document.getElementById('genre');
const coverEl = document.getElementById('cover');
const audioEl = document.getElementById('audio');

const playBtn = document.getElementById('play');
const playIcon = document.getElementById('play-icon');
const backBtn = document.getElementById('back');
const fwdBtn = document.getElementById('forward');

const progress = document.querySelector('.progress');
const progressBar = document.getElementById('progress-bar');
const progressThumb = document.getElementById('progress-thumb');

let current = 0;

function loadSong(index) {
    const song = songs[index];
    titleEl.textContent = song.title;
    genreEl.textContent = song.genre;
    coverEl.src = song.cover;
    audioEl.src = song.file;

}

function updatePlayIcon() {
    if (audioEl.paused) {
        playIcon.src = "resources/play.png";
    } else {
        playIcon.src = "resources/pause.png";
    }

}

playBtn.addEventListener("click", () => {
    if (audioEl.paused) {
        audioEl.play();
    } else {
        audioEl.pause();

    }
    updatePlayIcon();
});

backBtn.addEventListener('click', () => {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  audioEl.play();
  updatePlayIcon();
});

fwdBtn.addEventListener('click', () => {
  current = (current + 1) % songs.length;
  loadSong(current);
  audioEl.play();
  updatePlayIcon();
});

//Progreso

audioEl.addEventListener("timeupdate", () => {
    const porcentaje = (audioEl.currentTime / audioEl.duration) * 100;
    progressBar.style.width = porcentaje + "%";
    progressThumb.style.left = porcentaje + "%";


});

// Carga inicial
loadSong(current);
updatePlayIcon();



