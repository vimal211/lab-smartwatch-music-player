let msgBtn = document.getElementById("msgBtn");
let clockBtn = document.getElementById("clockBtn");
let musicBtn = document.getElementById("musicBtn");

let displayMsg = false;
let displaySong = false;

let middle = document.getElementById("middle");
let msgContainer = document.getElementById("msg-conatiner");
let musContainer = document.getElementById("music-container");
//calculating time and displaying
function showTime() {
  let curDate = new Date();
  let curDay = curDate.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("day").innerText = week[curDay];

  let hours = curDate.getHours();
  let minutes = curDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let myTime = `${hours}:${minutes}`;
  console.log(myTime);
  document.getElementById("top").innerText = myTime;
  document.getElementById("time").innerHTML = `${hours}<span>:</span>${minutes}`;
}

setInterval(showTime, 1000);

//displaying the message conatiner on click the button

msgBtn.addEventListener("click", function () {
  displaySong = false;
  musContainer.style.display = "none"
  if (displayMsg) {
    displayMsg = false;
    middle.style.display = "inherit";
    msgContainer.style.display = "none";
  } else {
    displayMsg = true;
    middle.style.display = "none";
    msgContainer.style.display = "inherit";

    let msg = `
        <div id="msg-list">
        <p id="java">Java</p>
        <p id="html">Html</p>
        <p id="css">Css</p>
        </div>`;

    msgContainer.innerHTML = msg;
    var java = document.getElementById("java");
    var html = document.getElementById("html");
    var css = document.getElementById("css");
  }

  //displaying the respective messages

  java.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let javaMsg = `<p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>`;
    msgContainer.innerHTML = javaMsg;
  });

  html.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let htmlMsg = `<p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>`;
    msgContainer.innerHTML = htmlMsg;
  });

  css.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let cssMsg = `<p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</p>`;
    msgContainer.innerHTML = cssMsg;
  });
});

//displaying Time
clockBtn.onclick = () => {
  displayMsg = false;
  displaySong = false;
  middle.style.display = "inherit";
  msgContainer.style.display = "none";
  musContainer.style.display = "none"
};

//displaying music player
musicBtn.onclick = () => {
  displayMsg = false;

  if(displaySong){
    displaySong = false;
    middle.style.display = "inherit";
    msgContainer.style.display = "none";
    musContainer.style.display = "none";
  } else {
    displaySong = true;
    middle.style.display = "none";
    msgContainer.style.display = "none";
    musContainer.style.display = "inherit";
  }

  let fragment = `
  <div class="mus">
    <div class="music_top">
       <img id="img-src" src="./images/song1.jpg" alt="" srcset="">
       <audio id="song-src" controls>
          <source src="./songs/song1.mp3" type="audio/mp3">
       </audio>
    </div>
    <div class="music_bottom">
      <p id="song1" class="music_name">1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vera Mari &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 4:14 </p>
      <p id="song2" class="music_name">2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jai Sulthan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 4:06 </p>
      <p id="song3" class="music_name">3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vaathi Coming &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3:48 </p>
      <p id="song4" class="music_name">4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chumma Kizhi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3:50 </p>
  <div>
  </div>
  `;
  musContainer.innerHTML = fragment;

  let song1 = document.getElementById('song1');
  let song2 = document.getElementById('song2');
  let song3 = document.getElementById('song3');
  let song4 = document.getElementById('song4');

  let imgSrc= document.getElementById("img-src");
  let songSrc= document.getElementById("song-src");

  //changing audio and image source on clicking tha song title
  song1.onclick=()=>{
      imgSrc.setAttribute('src',`./images/song1.jpg`);
      songSrc.setAttribute('src',`./songs/song1.mp3`);
      songSrc.play();
  }
  song2.onclick=()=>{
    imgSrc.setAttribute('src',`./images/song2.jpg`);
    songSrc.setAttribute('src',`./songs/song2.mp3`);
    songSrc.play();
  }
  song3.onclick=()=>{
    imgSrc.setAttribute('src',`./images/song3.jpg`);
    songSrc.setAttribute('src',`./songs/song3.mp3`);
    songSrc.play();
  }
  song4.onclick=()=>{
    imgSrc.setAttribute('src',`./images/song4.jpg`);
    songSrc.setAttribute('src',`./songs/song4.mp3`);
    songSrc.play();
  }
}



