console.log("Welcome to Spotify")

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mpeg');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  { songName: " salam-e-ishq", filePath: "songs/1.mpeg", coverPath: "covers/1.jpg" },
  { songName: " salam-e-ishq", filePath: "songs/2.mpeg", coverPath: "covers/2.jpg" },
  { songName: " salam-e-ishq", filePath: "songs/3.mpeg", coverPath: "covers/3.jpg" },
  { songName: " salam-e-ishq", filePath: "songs/4.mpeg", coverPath: "covers/4.jpg" },
  { songName: " salam-e-ishq", filePath: "songs/5.mpeg", coverPath: "covers/5.jpg" },
  { songName: " salam-e-ishq", filePath: "songs/6.mpeg", coverPath: "covers/6.jpg" },
  { songName: " salam-e-ishq", filePath: "songs/7.mpeg", coverPath: "covers/7.jpg" },
  { songName: " salam-e-ishq", filePath: "songs/8.mpeg", coverPath: "covers/8.jpg" },
  { songName: " salam-e-ishq", filePath: "songs/9.mpeg", coverPath: "covers/9.jpg" },
  { songName: " salam-e-ishq", filePath: "songs/10.mpeg", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//s/audioElement.play();

// andle Play pause click

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-circle-pausee');
      element.classList.add('fa-circle-play');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = `songs/${songIndex+1}.mpeg`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
  })
})
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mpeg`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mpeg`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})