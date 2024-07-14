const image=document.querySelector('img');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const music=document.querySelector('audio');
const currentTime1=document.getElementById('current-time');
const duration1=document.getElementById('duration');
const Progress=document.getElementById('Progress');
const ProgressContainer=document.getElementById('Progress-container');
const prevBtn=document.getElementById('prev');
const playBtn=document.getElementById('play');
const nextBtn=document.getElementById('next');




//Music

const songs=[
    {
        name:'music1',
        displayName:"Love Song",
        artist:"Shreya Ghosal"
    },
    {
        name:'music2',
        displayName:"Indian Flag",
        artist:"Lata Mangeshkar"
    },
    {
        name:'music3',
        displayName:"Sad Song",
        artist:"Jubin Natiyul"
    },
    {
        name:'music4',
        displayName:"Sad Song",
        artist:"Snigdhajit bhowmik"
    },
    {
        name:'music5',
        displayName:"Remix Song",
        artist:"Arijit Singh"
    },
    {
        name:'music6',
        displayName:"Sad Song",
        artist:"KK Song"
    },
    {
        name:'music7',
        displayName:"Love Song",
        artist:"Shreya Ghosal"
    },
    {
        name:'music8',
        displayName:"Love Song",
        artist:"Shreya Ghosal"
    },
    {
        name:'music9',
        displayName:"Love Song",
        artist:"Shreya Ghosal"
    },
    {
        name:'music10',
        displayName:"Love Song",
        artist:"Shreya Ghosal"
    },
    {
        name:'music11',
        displayName:"Love Song",
        artist:"Shreya Ghosal"
    },
    {
        name:'music12',
        displayName:"Indian Song",
        artist:"Lata Mangeshkar"
    },
    {
        name:'music13',
        displayName:"Sad Song",
        artist:"Jubin Natiyul"
    },
    {
        name:'music14',
        displayName:"Sad Song",
        artist:"Jubin Natiyul"
    },
    {
        name:'music15',
        displayName:"Sad Song",
        artist:"Jubin Natiyul"
    },
    {
        name:'music16',
        displayName:"Sad Song",
        artist:"Jubin Natiyul"
    },
    {
        name:'music17',
        displayName:"Sad Song",
        artist:"Snigdhajit bhowmik"
    },
    {
        name:'music18',
        displayName:"Sad Song",
        artist:"Snigdhajit bhowmik"
    },
    {
        name:'music19',
        displayName:"Sad Song",
        artist:"Snigdhajit bhowmik"
    },
    {
        name:'music20',
        displayName:"Sad Song",
        artist:"Snigdhajit bhowmik"
    },
    {
        name:'music21',
        displayName:"Sad Song",
        artist:"Snigdhajit bhowmik"
    },
    {
        name:'music22',
        displayName:"Remix Song",
        artist:"Arijit Singh"
    },
    {
        name:'music23',
        displayName:"Remix Song",
        artist:"Arijit Singh"
    },
    {
        name:'music24',
        displayName:"Remix Song",
        artist:"Arijit Singh"
    },
    {
        name:'music25',
        displayName:"Remix Song",
        artist:"Arijit Singh"
    },
    {
        name:'music26',
        displayName:"Remix Song",
        artist:"Arijit Singh"
    },
    {
        name:'music27',
        displayName:"Remix Song",
        artist:"Arijit Singh"
    },
    {
        name:'music28',
        displayName:"Sad Song",
        artist:"KK Song"
    },
    {
        name:'music29',
        displayName:"Sad Song",
        artist:"KK Song"
    },
    {
        name:'music30',
        displayName:"Sad Song",
        artist:"KK Song"
    },

    
]

//Check if playing
let isPlaying=false;

//Play
function playSong(){
    isPlaying=true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'pause')
    music.play()

}

//Pause
function pauseSong(){
    isPlaying=false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'play')
    music.pause()

}

//Play or Pause Event Listener
playBtn.addEventListener('click', ()=>(isPlaying?pauseSong():playSong()));


//Update Dom
function loadSong(Song){
    title.textContent=Song.displayName;
    artist.textContent=Song.artist;
    music.src=`music/${Song.name}.mp3`;
    image.src=`images/${Song.name}.jpeg`;

}
//current Song
let SongIndex=0;

//previous Song
function prevSong(){
    SongIndex--;
    if(SongIndex<0){
        SongIndex=songs.length-1;
    }
    loadSong(songs[SongIndex]);
    playSong();
}

//Next Song
function nextSong(){
    SongIndex++;
    if(SongIndex>songs.length-1){
        SongIndex=0;
    }
    loadSong(songs[SongIndex]);
    playSong();
}

//on Load -select first Song
loadSong(songs[SongIndex])

//Update Progress bar & time
function UpdateProgressBase(e){
    if(isPlaying){
        const {duration, currentTime}=e.srcElement;
        //update progress bar width
        const progressPercent=(currentTime/duration)* 100;
        Progress.style.width=`${progressPercent}%`;
        // calculate display or duration
        const durationMinutes=Math.floor(duration/60);
        let durationSeconds=Math.floor(duration%60);
        if(durationSeconds< 10)
        {
            durationSeconds=`0${durationSeconds}`;
        }


        //Delay switching duration Element to avoid Nan
        if(durationSeconds){
            duration1.textContent=`${durationMinutes}:${durationSeconds}`;
        }

        //Display Current Time
        const currentMinuets=Math.floor(currentTime/60);
        let currentSeconds=Math.floor(currentTime%60);
        if(currentSeconds<10){
            currentSeconds=`0${currentSeconds}`;
        }

        currentTime1.textContent=`${currentMinuets}: ${currentSeconds}`;
    }
}

//Set Progress bar
function setProgressBar(e){
    const width=this.clientWidth;
    const clickX=e.offsetX;
    const {duration}=music;
    music.currentTime=(clickX/width)*duration;
}



//Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', UpdateProgressBase);
ProgressContainer.addEventListener('click', setProgressBar);


