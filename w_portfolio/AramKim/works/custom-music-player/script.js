// let's select all required tags or elements
const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector(".img-area img"),
    musicName = wrapper.querySelector(".song-details .name"),
    musicArtist = wrapper.querySelector(".song-details .artist"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    prevBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next"),
    mainAudio = wrapper.querySelector("#main-audio"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = progressArea.querySelector(".progress-bar"),
    musicList = wrapper.querySelector(".music-list"),
    moreMusicBtn = wrapper.querySelector("#more-music"),
    closemoreMusic = musicList.querySelector("#close");


// load random music on page refresh
let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", () => {
    loadMusic(musicIndex);          // calling load music function once window loaded
    playingSong();
});

// load music function 
function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `assets/imgs/${allMusic[indexNumb - 1].src}.jpg`;
    mainAudio.src = `assets/songs/${allMusic[indexNumb - 1].src}.mp3`;
}

// play music function
function playMusic() {
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

// play music function
function pauseMusic() {
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

// next music function
function nextMusic() {
    musicIndex++; //increment of musicIndex by 1
    // if musicIndex is greater than array length then musicIndex will be 1 so the first song will play
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

// prev music function
function prevMusic() {
    musicIndex--; //decrement of musicIndex by 1
    // if musicIndex is less than 1 then musicIndex will be array length so the first song will play
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

//play or music button event
playPauseBtn.addEventListener("click", ()=>{
    const isMusicPlay = wrapper.classList.contains("paused");
    //if isPlayMusic is true then call pauseMusic else call playMusic
    isMusicPlay ? pauseMusic() : playMusic();
    playingSong();
});

// next music btn event
nextBtn.addEventListener("click", () => {
    nextMusic();        // calling next music function
});

// prev music btn event
prevBtn.addEventListener("click", () => {
    prevMusic();        // calling prev music function
});

// update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
  
    let musicCurrentTime = wrapper.querySelector(".current-time"),
    musicDuartion = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", ()=>{
        // update song total duration
        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if(totalSec < 10){      //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });

    // update playing song current time
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){        //if sec is less than 10 then add 0 before it
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e)=>{
    let progressWidth = progressArea.clientWidth; //getting width of progress bar
    let clickedOffsetX = e.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting song total duration
    
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic(); //calling playMusic function
    playingSong();
});

//let's work on repeat, shuffle song according to the icon
const repeatBtn = wrapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", () => {
    // first we get the innerText of the icon then we'll change accordingly
    let getText = repeatBtn.innerText;      // getting innerText of icon

    // let's do different changes on different icon click using switch
    switch (getText) {
        case "repeat":     // if this icon is repeat then change it to repeat_one
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute("title", "Song looped");
        break;
        case "repeat_one":      // if icon is repeat_one then change it to shuffle
            repeatBtn.innerText = "shuffle";
            repeatBtn.setAttribute("title", "Playback shuffled");
            break;
        case "shuffle":      // if icon is shuffle then change it to repeat
            repeatBtn.innerText = "repeat";
            repeatBtn.setAttribute("title", "Playlist looped");
            break;
    }
});

// above we just changed the icon, now let's work on what to do
// after the song ended
mainAudio.addEventListener("ended", () => {
    // we'll do according to the icon means if user has set icon to loop song then we'll repeat
    // the current song and will do further accordingly

    let getText = repeatBtn.innerText;      // getting innerText of icon
    // let's do different changes on different icon click using switch
    switch(getText) {
        case "repeat":      // if this icon is repeat then simply we call the nextMusic function so the next song will play from the beginning
            nextMusic();
            break;
        case "repeat_one":      // if icon is repeat_one then we'll change the current playing song current time to 0
            mainAudio.currentTime = 0;
            loadMusic(musicIndex);          // calling playMusic function
            playMusic();
            break;
        case "shuffle":     // if icon is shuffle then change it to repeat
            // generating random index between the max range of array length
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            do {
                randIndex = Math.floor((Math.random() * allMusic.length) + 1);
            } while(musicIndex == randIndex);        // this loop run until the next random number won't be the same of current music index
            musicIndex = randIndex;         // passing randomIndex to musicIndex so the random song will play
            loadMusic(musicIndex);      // calling loadMusic function
            playMusic();        // calling playMusic function
            playingSong();
            break;
    }
});

//show music list onclick of music icon
moreMusicBtn.addEventListener("click", ()=>{
    musicList.classList.toggle("show");
});

closemoreMusic.addEventListener("click", ()=>{
    moreMusicBtn.click();
});

const ulTag = wrapper.querySelector("ul");
// let's create li according to the array length
for (let i = 0; i < allMusic.length; i++) {
    //let's pass the song name, artist from the array
    let liTag = `<li li-index="${i + 1}">
                    <div class="row">
                        <span>${allMusic[i].name}</span>
                        <p>${allMusic[i].artist}</p>
                    </div>
                    <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                    <audio class="${allMusic[i].src}" src="../custom-music-player/assets/songs/${allMusic[i].src}.mp3"></audio>
                </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag);       //inserting the li inside ul tag

    let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);

    liAudioTag.addEventListener("loadeddata", () => {
        let duration = liAudioTag.duration;
        let totalMin = Math.floor(duration / 60);
        let totalSec = Math.floor(duration % 60);

        if (totalSec < 10) {        //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        };

        liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`;
        // adding t duration attribute which we'll use below
        liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`);        //adding t-duration attribute with total duration value
    });
}

// play particular song from the list onclick of li tag
function playingSong() {
    const allLiTags = ulTag.querySelectorAll("li");

    for(let j = 0; j < allLiTags.length; j++) {
        let audioTag = allLiTags[j].querySelector(".audio-duration");

        // let's remove playing class from all other li expect the last one which is clicked
        if(allLiTags[j].classList.contains("playing")) {
            allLiTags[j].classList.remove("playing");
            // let's get that audio duration value and pass to .audio-duration innertext
            let adDuration = audioTag.getAttribute("t-duration");
            audioTag.innerText = adDuration;        // passing t-duration value to audio duration innerText
        }

        // if there is an li tag which li-index is equal to musicIndex
        // then this music is playing now and we'll style it
        if(allLiTags[j].getAttribute("li-index") == musicIndex) {
            allLiTags[j].classList.add("playing");
            audioTag.innerText = "Playing";
        }
    
        // adding onclick attribute in all li tags
        allLiTags[j].setAttribute("onClick", "clicked(this)");
    }
}

// let's play song on li click
function clicked(element) {
    // getting li index of particular clicked li tag
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;        // passing that li-index to musicIndex
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}
