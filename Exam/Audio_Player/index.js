const songs = [
  {
    title: "Apna Bana Le",
    src: `./Audio/apna bana le.mp3`,
    image: `./Images/Apna-Bana-Le.jpg`,
  },
  {
    title: "Give Me Some Sunshine",
    src: "./Audio/Give Me Some Sunshine.mp3",
    image: `./Images/give me some sunshine.jpg`,
  },
  {
    title: "Kesariya",
    src: "./Audio/kesariya.mp3",
    image: `./Images/kesariya.jpg`,
  },
  {
    title: "Teri Mitti",
    src: "./Audio/Teri Mitti.mp3",
    image: `./Images/teri mitti.jpg`,
  },
  {
    title: "Lehra Do",
    src: "./Audio/Lehra Do.mp3",
    image: `./Images/lehra do.jpg`,
  },
  {
    title: "Ludovico Einaudi - Experience",
    src: "./Audio/Ludovico Einaudi - Experience.mp3",
    image: `./Images/Ludovico Einaudi - Experience.jpg`,
  },
  {
    title: "Mann meri",
    src: "./Audio/mann meri.mp3",
    image: `./Images/mann meri jann.jpg`,
  },
  {
    title: "Manzar hai yeh naya",
    src: "./Audio/Manzar Hai Yeh Naya.mp3",
    image: `./Images/Manzar hai yeh naya.jpg`,
  },
  {
    title: "Saudebazi",
    src: "./Audio/saudebazi.mp3",
    image: `./Images/Saudebazi.jpg`,
  },
  {
    title: "Shaabaashiyaan",
    src: "./Audio/Shaabaashiyaan.mp3",
    image: `./Images/Shaabaashiyaan.jpg`,
  },
];

let currentSongIndex = 0;
let isPlaying = false;
let isRepeat = false;
let isShuffle = false;

const audio = new Audio();
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const repeatBtn = document.getElementById("repeat");
const shuffleBtn = document.getElementById("shuffle");
const currentSongTitle = document.getElementById("current-song");
const songImage = document.getElementById("song-image");
const playlist = document.querySelector(".playlist");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.querySelector(".progress-container");

function loadSong(index) {
  audio.src = songs[index].src;
  currentSongTitle.textContent = songs[index].title;
  songImage.src = songs[index].image;
  document
    .querySelectorAll(".playlist li")
    .forEach((li) => li.classList.remove("active"));
  document.querySelectorAll(".playlist li")[index].classList.add("active");
}

function playSong() {
  audio.play();
  isPlaying = true;
  playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  playPauseBtn.classList.replace("btn-success", "btn-danger");
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  playPauseBtn.classList.replace("btn-danger", "btn-success");
}

function nextSong() {
  currentSongIndex = isShuffle
    ? Math.floor(Math.random() * songs.length)
    : (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

function updateProgress() {
  const { duration, currentTime } = audio;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

playPauseBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
//...

repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.innerHTML = isRepeat
    ? '<i class="fas fa-redo-alt"></i>'
    : '<i class="fas fa-redo"></i>';
  if (isRepeat) {
    audio.currentTime = 0; // start from 0:00 immediately
  }
});

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.innerHTML = isShuffle
    ? '<i class="fas fa-random"></i>'
    : '<i class="fas fa-random"></i>';
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
    loadSong(currentSongIndex);
    playSong();
  }
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  return `${minutes}:${secondsRemaining.toString().padStart(2, "0")}`;
}

audio.addEventListener("ended", () => {
  if (isRepeat) {
    playSong();
  } else {
    nextSong();
  }
});

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = `${song.title} (${formatTime(song.duration)})`;
  li.classList.add("list-group-item");
  li.addEventListener("click", () => {
    currentSongIndex = index;
    loadSong(index);
    playSong();
  });
  playlist.appendChild(li);
});

loadSong(currentSongIndex);
