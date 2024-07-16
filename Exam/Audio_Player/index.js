const songs = [
  {
    title: "Apna Bana Le",
    src: "./Audio/apna bana le.mp3",
    image: "./Images/Apna-Bana-Le.jpg",
    duration: "3:24",
  },
  {
    title: "Give Me Some Sunshine",
    src: "./Audio/Give Me Some Sunshine.mp3",
    image: "./Images/give me some sunshine.jpg",
    duration: "4:14",
  },
  {
    title: "Kesariya",
    src: "./Audio/kesariya.mp3",
    image: "./Images/kesariya.jpg",
    duration: "2:52",
  },
  {
    title: "Teri Mitti",
    src: "./Audio/Teri Mitti.mp3",
    image: "./Images/teri mitti.jpg",
    duration: "5:25",
  },
  {
    title: "Lehra Do",
    src: "./Audio/Lehra Do.mp3",
    image: "./Images/lehra do.jpg",
    duration: "3:31",
  },
  {
    title: "Ludovico Einaudi - Experience",
    src: "./Audio/Ludovico Einaudi - Experience.mp3",
    image: "./Images/Ludovico Einaudi - Experience.jpg",
    duration: "2:43",
  },
  {
    title: "Mann meri",
    src: "./Audio/mann meri.mp3",
    image: "./Images/mann meri jann.jpg",
    duration: "3:14",
  },
  {
    title: "Manzar hai yeh naya",
    src: "./Audio/Manzar Hai Yeh Naya.mp3",
    image: "./Images/Manzar hai yeh naya.jpg",
    duration: "4:13",
  },
  {
    title: "Saudebazi",
    src: "./Audio/saudebazi.mp3",
    image: "./Images/Saudebazi.jpg",
    duration: "5:54",
  },
  {
    title: "Shaabaashiyaan",
    src: "./Audio/Shaabaashiyaan.mp3",
    image: "./Images/Shaabaashiyaan.jpg",
    duration: "4:48",
  },
];

const playlist = document.getElementById("playlist");
const audioPlayer = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const globalPlayPauseIcon = document.getElementById("play-pause-icon");
const song_image = document.getElementById("song-image");

let currentSongIndex = -1;

const createIcon = (index) => {
  const icon = document.createElement("i");
  icon.className = "fas fa-play";
  icon.id = `play-pause-icon-${index}`;
  return icon;
};

const createButton = (index) => {
  const button = document.createElement("button");
  button.className =
    "p-2 bg-gray-800 rounded-full text-xl hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-400 transition-colors duration-200";
  button.appendChild(createIcon(index));
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    playPauseSong(index);
  });
  return button;
};

const createSongElement = (song, index) => {
  const li = document.createElement("li");
  li.className = "flex justify-between m-4 space-x-4";

  const image = document.createElement("img");
  image.src = song.image;
  image.className = "rounded-2xl w-10 h-10";

  const title = document.createElement("span");
  title.className = "font-mono";
  title.textContent = song.title;

  const duration = document.createElement("span");
  duration.textContent = song.duration;

  const titleDiv = document.createElement("div");
  titleDiv.className = "flex justify-between w-full";
  titleDiv.append(title, duration);

  const contectDiv = document.createElement("div");
  contectDiv.className = "flex items-center space-x-4 w-full";
  contectDiv.append(image, titleDiv);

  li.append(contectDiv, createButton(index));
  li.addEventListener("click", () => playSong(song, index));

  return li;
};

const LoadSongs = (data) => {
  if (data.length > 0) {
    loadSongInfo(data[0]);

    data.forEach((song, index) => {
      playlist.appendChild(createSongElement(song, index));
    });
  }
};

const loadSongInfo = (song) => {
  audioPlayer.src = song.src;
  song_image.src = song.image;
  audioPlayer.load();
};

const playSong = (song, index) => {
  if (audioPlayer.src !== song.src) {
    loadSongInfo(song);
    currentSongIndex = index;
  }

  audioPlayer.play();
  updatePlayPauseIcon(index, true);
};

const playPauseSong = (index) => {
  if (currentSongIndex !== index) {
    playSong(songs[index], index);
  } else {
    if (audioPlayer.paused || audioPlayer.ended) {
      audioPlayer.play();
      updatePlayPauseIcon(index, true);
    } else {
      audioPlayer.pause();
      updatePlayPauseIcon(index, false);
    }
  }
};

const resetAllIcons = () => {
  songs.forEach((_, i) => {
    const icon = document.getElementById(`play-pause-icon-${i}`);
    if (icon) {
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  });
};

const updatePlayPauseIcon = (index, isPlaying) => {
  resetAllIcons();
  const playPauseIcon = document.getElementById(`play-pause-icon-${index}`);

  if (isPlaying) {
    globalPlayPauseIcon.classList.replace("fa-play", "fa-pause");
    playPauseIcon.classList.replace("fa-play", "fa-pause");
  } else {
    globalPlayPauseIcon.classList.replace("fa-pause", "fa-play");
    playPauseIcon.classList.replace("fa-pause", "fa-play");
  }
};

playPauseButton.addEventListener("click", () => {
  if (currentSongIndex !== -1) {
    playPauseSong(currentSongIndex);
  } else {
    playPauseSong(0);
  }
});

LoadSongs(songs);
