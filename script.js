var audioPlayer = document.getElementById('audioplayer');
var loaded = false;

var playBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');

pauseBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";

    return false;
});

const playSong = (file) => {

    if(loaded == false){
        audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mp3"`;
        loaded = true;
    }
    audioPlayer.play();

    pauseBtn.style.display = "inline";
    playBtn.style.display = "none";
}

document.querySelectorAll('.main__col').forEach(item =>{
    item.addEventListener('click',event=>{
        alert('clicado');
    })
})